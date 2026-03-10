import jsPDF from 'jspdf';
import type { AnalysisResult, LocalizedString } from '@/types';

type Locale = 'es' | 'en';

// Helper to extract localized text
function t(str: LocalizedString, locale: Locale): string {
  return str[locale] || str.es || str.en || '';
}

// Labels for both languages
const labels = {
  es: {
    title: 'skaills — Resultados de Evaluación',
    generatedFor: 'Generado para',
    date: 'Fecha de análisis',
    indicesTitle: 'Índices de Competencias',
    professional: 'Índice Profesional',
    softSkills: 'Índice de Habilidades Blandas',
    readiness: 'Índice de Disposición al Cambio',
    strengthsTitle: 'Fortalezas',
    opportunitiesTitle: 'Oportunidades de Crecimiento',
    profilesTitle: 'Perfiles Asignados',
    match: 'Coincidencia',
    personalizedMessage: 'Mensaje Personalizado',
    trainingPath: 'Ruta de Capacitación',
    changeStrategies: 'Estrategias de Gestión del Cambio',
    step: 'Paso',
    focusAreas: 'Áreas de enfoque',
    page: 'Página',
    of: 'de',
  },
  en: {
    title: 'skaills — Evaluation Results',
    generatedFor: 'Generated for',
    date: 'Analysis date',
    indicesTitle: 'Competency Indices',
    professional: 'Professional Index',
    softSkills: 'Soft Skills Index',
    readiness: 'Readiness Index',
    strengthsTitle: 'Strengths',
    opportunitiesTitle: 'Growth Opportunities',
    profilesTitle: 'Assigned Profiles',
    match: 'Match',
    personalizedMessage: 'Personalized Message',
    trainingPath: 'Training Path',
    changeStrategies: 'Change Management Strategies',
    step: 'Step',
    focusAreas: 'Focus areas',
    page: 'Page',
    of: 'of',
  },
};

// Colors
const COLORS = {
  primary: [37, 99, 235] as [number, number, number],       // blue-600
  secondary: [107, 114, 128] as [number, number, number],   // gray-500
  success: [22, 163, 74] as [number, number, number],       // green-600
  warning: [234, 179, 8] as [number, number, number],       // yellow-500
  accent: [147, 51, 234] as [number, number, number],       // purple-600
  dark: [31, 41, 55] as [number, number, number],           // gray-800
  light: [243, 244, 246] as [number, number, number],       // gray-100
  white: [255, 255, 255] as [number, number, number],
  barBg: [229, 231, 235] as [number, number, number],       // gray-200
};

function getScoreColor(score: number): [number, number, number] {
  if (score >= 75) return COLORS.success;
  if (score >= 50) return COLORS.warning;
  return [239, 68, 68]; // red-500
}

export async function generateResultsPdf(
  result: AnalysisResult,
  locale: Locale
): Promise<void> {
  const l = labels[locale];
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Parse date
  const analyzedDate = result.analyzedAt?.toDate
    ? result.analyzedAt.toDate()
    : new Date(result.analyzedAt as unknown as string);
  const dateStr = analyzedDate.toLocaleDateString(
    locale === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  function addPageNumbers() {
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(...COLORS.secondary);
      pdf.text(
        `${l.page} ${i} ${l.of} ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }
  }

  function checkPageBreak(requiredSpace: number): void {
    if (y + requiredSpace > pageHeight - 25) {
      pdf.addPage();
      y = margin;
    }
  }

  function drawSectionTitle(title: string): void {
    checkPageBreak(15);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...COLORS.dark);
    pdf.text(title, margin, y);
    y += 2;
    pdf.setDrawColor(...COLORS.primary);
    pdf.setLineWidth(0.5);
    pdf.line(margin, y, margin + contentWidth, y);
    y += 8;
  }

  function drawScoreBar(
    label: string,
    score: number,
    barX: number,
    barWidth: number
  ): void {
    checkPageBreak(14);
    // Label
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...COLORS.dark);
    pdf.text(label, margin, y);

    // Background bar
    const barY = y - 3;
    const barHeight = 6;
    pdf.setFillColor(...COLORS.barBg);
    pdf.roundedRect(barX, barY, barWidth, barHeight, 2, 2, 'F');

    // Score bar
    const filledWidth = (score / 100) * barWidth;
    const color = getScoreColor(score);
    pdf.setFillColor(...color);
    if (filledWidth > 0) {
      pdf.roundedRect(barX, barY, Math.max(filledWidth, 4), barHeight, 2, 2, 'F');
    }

    // Score text
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...color);
    pdf.text(`${Math.round(score)}%`, barX + barWidth + 3, y);

    y += 12;
  }

  function drawBulletList(items: string[]): void {
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...COLORS.dark);

    for (const item of items) {
      checkPageBreak(10);
      // Bullet point
      pdf.setFillColor(...COLORS.primary);
      pdf.circle(margin + 2, y - 1.5, 1.2, 'F');

      // Wrap text
      const lines = pdf.splitTextToSize(item, contentWidth - 10);
      pdf.text(lines, margin + 7, y);
      y += lines.length * 5 + 3;
    }
  }

  // ============================
  // HEADER
  // ============================
  // Header background
  pdf.setFillColor(...COLORS.primary);
  pdf.rect(0, 0, pageWidth, 45, 'F');

  // Title
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...COLORS.white);
  pdf.text(l.title, margin, 20);

  // Candidate name and date
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`${l.generatedFor}: ${result.candidateName}`, margin, 30);
  pdf.text(`${l.date}: ${dateStr}`, margin, 37);

  y = 55;

  // ============================
  // INDICES SECTION
  // ============================
  drawSectionTitle(l.indicesTitle);

  const barStartX = margin + 65;
  const barW = contentWidth - 80;

  drawScoreBar(l.professional, result.indices.professional, barStartX, barW);
  drawScoreBar(l.softSkills, result.indices.softSkills, barStartX, barW);
  drawScoreBar(l.readiness, result.indices.readiness, barStartX, barW);

  y += 5;

  // ============================
  // STRENGTHS
  // ============================
  drawSectionTitle(l.strengthsTitle);

  const strengthTexts = result.strengths.map((s) => t(s, locale));
  drawBulletList(strengthTexts);

  y += 5;

  // ============================
  // GROWTH OPPORTUNITIES
  // ============================
  drawSectionTitle(l.opportunitiesTitle);

  const opportunityTexts = result.growthOpportunities.map((o) => t(o, locale));
  drawBulletList(opportunityTexts);

  y += 5;

  // ============================
  // ASSIGNED PROFILES
  // ============================
  drawSectionTitle(l.profilesTitle);

  const profileEntries = [
    { label: l.professional, profile: result.assignedProfiles.professional },
    { label: l.softSkills, profile: result.assignedProfiles.softSkills },
    { label: l.readiness, profile: result.assignedProfiles.readiness },
  ];

  for (const entry of profileEntries) {
    checkPageBreak(25);

    // Profile card background
    pdf.setFillColor(...COLORS.light);
    pdf.roundedRect(margin, y - 4, contentWidth, 22, 2, 2, 'F');

    // Category label
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...COLORS.primary);
    pdf.text(entry.label.toUpperCase(), margin + 4, y);
    y += 5;

    // Profile name
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...COLORS.dark);
    const profileName = t(entry.profile.profileName, locale);
    pdf.text(profileName, margin + 4, y);

    // Match percentage
    const matchText = `${l.match}: ${Math.round(entry.profile.matchPercentage)}%`;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    const color = getScoreColor(entry.profile.matchPercentage);
    pdf.setTextColor(...color);
    pdf.text(matchText, margin + contentWidth - 4, y, { align: 'right' });
    y += 6;

    // Explanation
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...COLORS.secondary);
    const explanation = t(entry.profile.explanation, locale);
    const explLines = pdf.splitTextToSize(explanation, contentWidth - 10);
    pdf.text(explLines, margin + 4, y);
    y += explLines.length * 4 + 8;
  }

  y += 3;

  // ============================
  // PERSONALIZED MESSAGE
  // ============================
  drawSectionTitle(l.personalizedMessage);

  checkPageBreak(20);
  pdf.setFillColor(239, 246, 255); // blue-50
  pdf.roundedRect(margin, y - 4, contentWidth, 4, 2, 2, 'F'); // placeholder height, will expand

  const message = t(result.recommendations.personalizedMessage, locale);
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'italic');
  pdf.setTextColor(...COLORS.dark);
  const msgLines = pdf.splitTextToSize(message, contentWidth - 10);

  // Draw background to fit text
  const msgHeight = msgLines.length * 5 + 6;
  pdf.setFillColor(239, 246, 255);
  pdf.roundedRect(margin, y - 4, contentWidth, msgHeight, 2, 2, 'F');

  pdf.text(msgLines, margin + 5, y);
  y += msgHeight + 5;

  // ============================
  // TRAINING PATH
  // ============================
  if (result.recommendations.trainingPath.length > 0) {
    drawSectionTitle(l.trainingPath);

    for (const step of result.recommendations.trainingPath) {
      checkPageBreak(25);

      // Step number badge
      pdf.setFillColor(...COLORS.primary);
      pdf.circle(margin + 4, y - 1, 3.5, 'F');
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(...COLORS.white);
      pdf.text(`${step.order}`, margin + 4, y, { align: 'center' });

      // Resource name
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(...COLORS.dark);
      const resourceName = t(step.resource.name, locale);
      pdf.text(resourceName, margin + 12, y);
      y += 5;

      // Rationale
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(...COLORS.secondary);
      const rationale = t(step.rationale, locale);
      const ratLines = pdf.splitTextToSize(rationale, contentWidth - 15);
      pdf.text(ratLines, margin + 12, y);
      y += ratLines.length * 4 + 2;

      // Focus areas
      if (step.focusAreas && step.focusAreas.length > 0) {
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(...COLORS.accent);
        const focusTexts = step.focusAreas.map((fa) => t(fa, locale)).join(' · ');
        const focusLines = pdf.splitTextToSize(
          `${l.focusAreas}: ${focusTexts}`,
          contentWidth - 15
        );
        pdf.text(focusLines, margin + 12, y);
        y += focusLines.length * 4 + 4;
      }

      y += 2;
    }
  }

  y += 3;

  // ============================
  // CHANGE MANAGEMENT STRATEGIES
  // ============================
  if (result.recommendations.changeManagementStrategies.length > 0) {
    drawSectionTitle(l.changeStrategies);

    const strategies = result.recommendations.changeManagementStrategies.map(
      (s) => t(s, locale)
    );
    drawBulletList(strategies);
  }

  // ============================
  // PAGE NUMBERS
  // ============================
  addPageNumbers();

  // ============================
  // SAVE
  // ============================
  const safeName = result.candidateName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  pdf.save(`competencia-results-${safeName}.pdf`);
}
