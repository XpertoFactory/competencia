'use client';

import { useTranslations } from 'next-intl';
import { Header, Footer } from '@/components/layout';
import { Card, CardContent } from '@/components/ui';
import { ContactForm } from '@/components/contact';
import { Mail, MessageSquare, Clock, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">{t('tagline')}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
                {t('pageTitle')}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('pageSubtitle')}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
        </section>

        {/* Form + Sidebar */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card variant="bordered" className="bg-white">
                  <CardContent className="p-6 sm:p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <Card variant="bordered" className="bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary-50">
                        <MessageSquare className="w-5 h-5 text-primary-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{t('directEmail')}</h3>
                    </div>
                    <a href="mailto:info@skaills.io" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                      info@skaills.io
                    </a>
                  </CardContent>
                </Card>

                <Card variant="bordered" className="bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-emerald-50">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{t('responseTime')}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{t('responseTimeDesc')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
