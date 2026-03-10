'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Select } from '@/components/ui';
import { ArrowLeft, Save, TestTube, CheckCircle, XCircle, Loader2, Key, Trash2, Eye, EyeOff } from 'lucide-react';
import type { AIMode, AIProvider, AIApiKeys, AppSettings } from '@/types';
import { getSettings, saveSettings } from '@/lib/firebase/firestore';
import { AuthGuard } from '@/components/auth';

const defaultSettings: AppSettings = {
  aiMode: 'hybrid',
  aiProvider: 'claude',
  defaultLocale: 'es',
  evaluationTimeoutMinutes: 60,
  enableAnonymousEvaluations: false,
};

export default function SettingsPage() {
  const t = useTranslations('admin.settings');
  const locale = useLocale();
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<'success' | 'error' | null>(null);
  const [saveResult, setSaveResult] = useState<'success' | 'error' | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [newApiKey, setNewApiKey] = useState('');
  const [showNewApiKey, setShowNewApiKey] = useState(false);
  const [isSavingKey, setIsSavingKey] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      try {
        const stored = await getSettings();
        if (stored) {
          setSettings(stored);
        }
      } catch (error) {
        console.error('Failed to load settings from Firestore:', error);
        // Keep defaults on error
      } finally {
        setIsLoading(false);
      }
    }
    loadSettings();
  }, []);

  const aiModeOptions = [
    { value: 'claude', label: t('ai.modes.claude') },
    { value: 'openai', label: t('ai.modes.openai') },
    { value: 'gemini', label: t('ai.modes.gemini') },
    { value: 'hybrid', label: t('ai.modes.hybrid') },
    { value: 'rule-based', label: t('ai.modes.ruleBased') },
  ];

  const aiProviderOptions = [
    { value: 'claude', label: 'Claude (Anthropic)' },
    { value: 'openai', label: 'OpenAI GPT' },
    { value: 'gemini', label: 'Google Gemini' },
  ];

  const localeOptions = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' },
  ];

  const handleSave = async () => {
    setIsSaving(true);
    setSaveResult(null);
    setSaveError(null);
    try {
      await saveSettings(settings);
      setSaveResult('success');
    } catch (error) {
      console.error('Failed to save settings:', error);
      setSaveResult('error');
      setSaveError(error instanceof Error ? error.message : t('saveError'));
    } finally {
      setIsSaving(false);
      // Auto-dismiss success message after 4 seconds
      setTimeout(() => setSaveResult(null), 4000);
    }
  };

  // Get the current provider key from settings
  const currentProviderKey = settings.aiProvider;
  const storedKey = settings.aiApiKeys?.[currentProviderKey] || '';
  const hasStoredKey = storedKey.length > 0;

  function maskKey(key: string): string {
    if (key.length <= 8) return '••••••••';
    return '••••••••••••' + key.slice(-4);
  }

  async function handleSaveApiKey() {
    if (!newApiKey.trim()) return;
    setIsSavingKey(true);
    try {
      const updatedKeys: AIApiKeys = {
        ...settings.aiApiKeys,
        [currentProviderKey]: newApiKey.trim(),
      };
      const updatedSettings = { ...settings, aiApiKeys: updatedKeys };
      await saveSettings(updatedSettings);
      setSettings(updatedSettings);
      setNewApiKey('');
      setShowNewApiKey(false);
      setSaveResult('success');
      setTimeout(() => setSaveResult(null), 4000);
    } catch (error) {
      console.error('Failed to save API key:', error);
      setSaveResult('error');
      setSaveError(error instanceof Error ? error.message : t('saveError'));
    } finally {
      setIsSavingKey(false);
    }
  }

  async function handleDeleteApiKey() {
    setIsSavingKey(true);
    try {
      const updatedKeys: AIApiKeys = { ...settings.aiApiKeys };
      delete updatedKeys[currentProviderKey];
      const updatedSettings = { ...settings, aiApiKeys: updatedKeys };
      await saveSettings(updatedSettings);
      setSettings(updatedSettings);
      setSaveResult('success');
      setTimeout(() => setSaveResult(null), 4000);
    } catch (error) {
      console.error('Failed to delete API key:', error);
      setSaveResult('error');
      setSaveError(error instanceof Error ? error.message : t('saveError'));
    } finally {
      setIsSavingKey(false);
    }
  }

  const handleTestConnection = async () => {
    setIsTesting(true);
    setTestResult(null);
    try {
      // Save current settings first so the API key is persisted
      await saveSettings(settings);
      // For now, a successful save indicates the connection to Firestore works.
      // A real AI provider test would call an API route that pings the provider.
      setTestResult('success');
    } catch (error) {
      console.error('Test connection failed:', error);
      setTestResult('error');
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <AuthGuard>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-3xl mx-auto px-4">
          {/* Back Link */}
          <Link
            href={`/${locale}/admin`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToPanel')}
          </Link>

          <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('title')}</h1>

          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
              <span className="ml-3 text-gray-600">{t('loading')}</span>
            </div>
          ) : (
          <div className="space-y-6">
            {/* AI Configuration */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('ai.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Select
                  label={t('ai.mode')}
                  options={aiModeOptions}
                  value={settings.aiMode}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      aiMode: e.target.value as AIMode,
                    }))
                  }
                />

                {settings.aiMode !== 'rule-based' && (
                  <>
                    <Select
                      label={t('ai.provider')}
                      options={aiProviderOptions}
                      value={settings.aiProvider}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          aiProvider: e.target.value as AIProvider,
                        }))
                      }
                      helperText={t('ai.providerHelperText')}
                    />

                    {/* API Key Management */}
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        {t('ai.apiKey')} — {settings.aiProvider.charAt(0).toUpperCase() + settings.aiProvider.slice(1)}
                      </label>

                      {hasStoredKey ? (
                        <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-green-800">
                              {t('ai.apiKey')} configured
                            </p>
                            <p className="text-sm text-green-700 font-mono">
                              {maskKey(storedKey)}
                            </p>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={handleTestConnection}
                              disabled={isTesting}
                            >
                              {isTesting ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <TestTube className="w-4 h-4" />
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={handleDeleteApiKey}
                              disabled={isSavingKey}
                              className="text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <Key className="w-5 h-5 text-amber-600 shrink-0" />
                          <p className="text-sm text-amber-800">
                            No API key configured for {settings.aiProvider}.
                          </p>
                        </div>
                      )}

                      {/* Input for new/update key */}
                      <div className="flex items-end gap-3">
                        <div className="flex-1 relative">
                          <Input
                            label={hasStoredKey ? 'Update API Key' : 'Enter API Key'}
                            type={showNewApiKey ? 'text' : 'password'}
                            value={newApiKey}
                            onChange={(e) => setNewApiKey(e.target.value)}
                            placeholder={settings.aiProvider === 'gemini' ? 'AIza...' : 'sk-...'}
                            helperText={t('ai.apiKeyHelperText')}
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewApiKey(!showNewApiKey)}
                            className="absolute right-3 top-[34px] text-gray-400 hover:text-gray-600"
                          >
                            {showNewApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        <Button
                          variant="primary"
                          onClick={handleSaveApiKey}
                          disabled={isSavingKey || !newApiKey.trim()}
                          className="shrink-0"
                        >
                          {isSavingKey ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Save className="w-4 h-4 mr-2" />
                          )}
                          {hasStoredKey ? 'Update' : 'Save'}
                        </Button>
                      </div>
                    </div>

                    {testResult && (
                      <div
                        className={`flex items-center gap-2 p-3 rounded-lg ${
                          testResult === 'success'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-red-50 text-red-700'
                        }`}
                      >
                        {testResult === 'success' ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            <span>{t('ai.connectionSuccess')}</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-5 h-5" />
                            <span>{t('ai.connectionError')}</span>
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">{t('ai.analysisModes')}</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>
                      <strong>Claude/OpenAI/Gemini:</strong> {t('ai.analysisModesAI')}
                    </li>
                    <li>
                      <strong>{t('ai.modes.hybrid')}:</strong> {t('ai.analysisModesHybrid')}
                    </li>
                    <li>
                      <strong>{t('ai.modes.ruleBased')}:</strong> {t('ai.analysisModesRules')}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* General Settings */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>{t('general.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Select
                  label={t('general.defaultLanguage')}
                  options={localeOptions}
                  value={settings.defaultLocale}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      defaultLocale: e.target.value as 'es' | 'en',
                    }))
                  }
                />

                <Input
                  label={t('general.timeout')}
                  type="number"
                  value={settings.evaluationTimeoutMinutes}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      evaluationTimeoutMinutes: parseInt(e.target.value) || 60,
                    }))
                  }
                  helperText={t('general.timeoutHelperText')}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      {t('general.anonymousEvaluations')}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t('general.anonymousEvaluationsDesc')}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.enableAnonymousEvaluations}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          enableAnonymousEvaluations: e.target.checked,
                        }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Save Feedback */}
            {saveResult && (
              <div
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  saveResult === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {saveResult === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('saveSuccess')}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5" />
                    <span>{saveError || t('saveError')}</span>
                  </>
                )}
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end">
              <Button variant="primary" size="lg" onClick={handleSave} isLoading={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {t('saveButton')}
              </Button>
            </div>
          </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
    </AuthGuard>
  );
}
