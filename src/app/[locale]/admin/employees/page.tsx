'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select, Badge, ConfirmModal } from '@/components/ui';
import { AuthGuard } from '@/components/auth';
import {
  getEmployees,
  saveEmployee,
  deleteDocument,
  COLLECTIONS,
  generateId,
  getProfiles,
} from '@/lib/firebase/firestore';
import type { Employee, EmployeeStatus, Profile } from '@/types';
import { Timestamp } from 'firebase/firestore';
import { ArrowLeft, Plus, Pencil, Trash2, X, Loader2, UserCheck } from 'lucide-react';

interface EmployeeFormData {
  name: string;
  email: string;
  departmentEs: string;
  departmentEn: string;
  positionEs: string;
  positionEn: string;
  supervisorName: string;
  supervisorEmail: string;
  hireDate: string;
  status: EmployeeStatus;
  profileId: string;
  isActive: boolean;
}

const emptyForm: EmployeeFormData = {
  name: '',
  email: '',
  departmentEs: '',
  departmentEn: '',
  positionEs: '',
  positionEn: '',
  supervisorName: '',
  supervisorEmail: '',
  hireDate: '',
  status: 'probation',
  profileId: '',
  isActive: true,
};

function timestampToDateString(ts: Timestamp): string {
  const d = ts.toDate();
  return d.toISOString().split('T')[0];
}

function addMonths(date: Date, months: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export default function EmployeesPage() {
  const t = useTranslations('employees');
  const tc = useTranslations('common');
  const locale = useLocale() as 'es' | 'en';

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<EmployeeFormData>(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState<Employee | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setIsLoading(true);
    try {
      const [emps, profs] = await Promise.all([getEmployees(), getProfiles(false)]);
      setEmployees(emps);
      setProfiles(profs);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleCreate() {
    setEditingId(null);
    setForm(emptyForm);
    setShowForm(true);
  }

  function handleEdit(employee: Employee) {
    setEditingId(employee.id);
    setForm({
      name: employee.name,
      email: employee.email,
      departmentEs: employee.department.es,
      departmentEn: employee.department.en,
      positionEs: employee.position.es,
      positionEn: employee.position.en,
      supervisorName: employee.supervisorName,
      supervisorEmail: employee.supervisorEmail,
      hireDate: timestampToDateString(employee.hireDate),
      status: employee.status,
      profileId: employee.profileId,
      isActive: employee.status !== 'inactive',
    });
    setShowForm(true);
  }

  function handleCancel() {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleSave() {
    if (!form.name || !form.email || !form.hireDate) return;

    setIsSaving(true);
    try {
      const hireDate = new Date(form.hireDate);
      const probationEndDate = addMonths(hireDate, 6);
      const now = Timestamp.now();

      const employee: Employee = {
        id: editingId || generateId(),
        name: form.name,
        email: form.email,
        department: { es: form.departmentEs, en: form.departmentEn, fr: form.departmentEn },
        position: { es: form.positionEs, en: form.positionEn, fr: form.positionEn },
        profileId: form.profileId,
        supervisorName: form.supervisorName,
        supervisorEmail: form.supervisorEmail,
        hireDate: Timestamp.fromDate(hireDate),
        probationEndDate: Timestamp.fromDate(probationEndDate),
        status: form.status,
        evaluationIds: editingId
          ? employees.find((e) => e.id === editingId)?.evaluationIds || []
          : [],
        createdAt: editingId
          ? employees.find((e) => e.id === editingId)?.createdAt || now
          : now,
        updatedAt: now,
      };

      await saveEmployee(employee);
      await loadData();
      handleCancel();
    } catch (error) {
      console.error('Failed to save employee:', error);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    try {
      await deleteDocument(COLLECTIONS.EMPLOYEES, deleteTarget.id);
      await loadData();
    } catch (error) {
      console.error('Failed to delete employee:', error);
    } finally {
      setDeleteTarget(null);
    }
  }

  function getStatusBadgeVariant(status: EmployeeStatus): 'warning' | 'success' | 'default' {
    switch (status) {
      case 'probation':
        return 'warning';
      case 'active':
        return 'success';
      case 'inactive':
        return 'default';
    }
  }

  function formatDate(ts: Timestamp): string {
    return ts.toDate().toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US');
  }

  const statusOptions = [
    { value: 'probation', label: t('status.probation') },
    { value: 'active', label: t('status.active') },
    { value: 'inactive', label: t('status.inactive') },
  ];

  const profileOptions = [
    { value: '', label: t('selectProfile') },
    ...profiles.map((p) => ({
      value: p.id,
      label: p.name[locale],
    })),
  ];

  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />

        <main className="flex-1 py-8">
          <div className="max-w-5xl mx-auto px-4">
            {/* Back Link */}
            <Link
              href={`/${locale}/admin`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToPanel')}
            </Link>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <UserCheck className="w-7 h-7" />
                {t('title')}
              </h1>
              {!showForm && (
                <Button variant="primary" onClick={handleCreate}>
                  <Plus className="w-4 h-4 mr-2" />
                  {t('addEmployee')}
                </Button>
              )}
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
                <span className="ml-3 text-gray-600">{tc('loading')}</span>
              </div>
            ) : showForm ? (
              /* ===== Create / Edit Form ===== */
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>{editingId ? t('editEmployee') : t('addEmployee')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Row: Name, Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('form.name')}
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                    <Input
                      label={t('form.email')}
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  {/* Row: Department ES/EN */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('form.departmentEs')}
                      value={form.departmentEs}
                      onChange={(e) => setForm((prev) => ({ ...prev, departmentEs: e.target.value }))}
                    />
                    <Input
                      label={t('form.departmentEn')}
                      value={form.departmentEn}
                      onChange={(e) => setForm((prev) => ({ ...prev, departmentEn: e.target.value }))}
                    />
                  </div>

                  {/* Row: Position ES/EN */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('form.positionEs')}
                      value={form.positionEs}
                      onChange={(e) => setForm((prev) => ({ ...prev, positionEs: e.target.value }))}
                    />
                    <Input
                      label={t('form.positionEn')}
                      value={form.positionEn}
                      onChange={(e) => setForm((prev) => ({ ...prev, positionEn: e.target.value }))}
                    />
                  </div>

                  {/* Row: Supervisor Name, Supervisor Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('form.supervisorName')}
                      value={form.supervisorName}
                      onChange={(e) => setForm((prev) => ({ ...prev, supervisorName: e.target.value }))}
                    />
                    <Input
                      label={t('form.supervisorEmail')}
                      type="email"
                      value={form.supervisorEmail}
                      onChange={(e) => setForm((prev) => ({ ...prev, supervisorEmail: e.target.value }))}
                    />
                  </div>

                  {/* Row: Hire Date, Status */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t('form.hireDate')}
                      type="date"
                      value={form.hireDate}
                      onChange={(e) => setForm((prev) => ({ ...prev, hireDate: e.target.value }))}
                      required
                    />
                    <Select
                      label={t('form.status')}
                      options={statusOptions}
                      value={form.status}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, status: e.target.value as EmployeeStatus }))
                      }
                    />
                  </div>

                  {/* Row: Linked Profile, isActive */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label={t('form.linkedProfile')}
                      options={profileOptions}
                      value={form.profileId}
                      onChange={(e) => setForm((prev) => ({ ...prev, profileId: e.target.value }))}
                    />
                    <div className="flex items-center gap-3 pt-6">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.isActive}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, isActive: e.target.checked }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                      <span className="text-sm font-medium text-gray-700">{t('form.isActive')}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 pt-4 border-t">
                    <Button variant="outline" onClick={handleCancel}>
                      <X className="w-4 h-4 mr-2" />
                      {tc('cancel')}
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleSave}
                      isLoading={isSaving}
                      disabled={!form.name || !form.email || !form.hireDate}
                    >
                      {tc('save')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : employees.length === 0 ? (
              <Card variant="bordered">
                <CardContent className="py-16 text-center">
                  <UserCheck className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">{t('noEmployees')}</p>
                </CardContent>
              </Card>
            ) : (
              /* ===== Employee List ===== */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {employees.map((emp) => (
                  <Card key={emp.id} variant="bordered" className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{emp.name}</h3>
                          <p className="text-sm text-gray-500">{emp.email}</p>
                        </div>
                        <Badge variant={getStatusBadgeVariant(emp.status)}>
                          {t(`status.${emp.status}`)}
                        </Badge>
                      </div>

                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p>
                          <span className="font-medium">{t('card.department')}:</span>{' '}
                          {emp.department[locale]}
                        </p>
                        <p>
                          <span className="font-medium">{t('card.position')}:</span>{' '}
                          {emp.position[locale]}
                        </p>
                        <p>
                          <span className="font-medium">{t('card.supervisor')}:</span>{' '}
                          {emp.supervisorName}
                        </p>
                        <p>
                          <span className="font-medium">{t('card.hireDate')}:</span>{' '}
                          {formatDate(emp.hireDate)}
                        </p>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEdit(emp)}>
                          <Pencil className="w-3.5 h-3.5 mr-1" />
                          {tc('edit')}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setDeleteTarget(emp)}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-3.5 h-3.5 mr-1" />
                          {tc('delete')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />

        {/* Delete Confirmation Modal */}
        <ConfirmModal
          isOpen={!!deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleDelete}
          title={t('deleteConfirm.title')}
          message={t('deleteConfirm.message', { name: deleteTarget?.name || '' })}
          confirmLabel={tc('delete')}
          variant="danger"
        />
      </div>
    </AuthGuard>
  );
}
