'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import { PersonaQuote, PERSONAS, ArticleLayout } from '@/components/resources/PersonaQuote';

export default function AmIReadyForAIPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-8">
        <Link href={`/${locale}/resources`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Button>
        </Link>
      </div>

      <ArticleLayout
        title="Am I Ready for AI Adoption?"
        subtitle="A personal reflection on readiness — and eagerness — to change and adapt"
        date="March 2026"
        readTime="11 min read"
      >
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Personal AI Readiness Check</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Before asking whether your organization, your industry, or the world is ready for AI, it is worth asking a more intimate question: Am I ready? Not in the abstract, theoretical sense — but honestly, personally, in the way that matters when the alarm goes off on a Monday morning and you realize that the tool your colleague just mastered is redefining what competence looks like in your field. Readiness for AI is ultimately a personal state of mind, and it begins with an honest self-assessment that most professionals would rather avoid.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Start with curiosity. When you hear about a new AI tool, is your first instinct to explore it or to dismiss it? When a colleague mentions they used AI to complete a task you typically spend hours on, do you feel intrigued or threatened? When your company announces an AI initiative, do you volunteer to participate or quietly hope it doesn&apos;t affect your department? These gut reactions reveal more about your AI readiness than any formal assessment ever could. Curiosity is the foundation — without it, every other readiness factor is compromised.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Next, evaluate your relationship with change itself. Think back to the last significant change in your professional life — a new system, a reorganization, a shift in strategy. How did you respond? Were you among the first to adapt, or did you resist until adaptation became unavoidable? There is no shame in honest reflection here. Most of us are more resistant to change than we like to admit, and recognizing that tendency is the first step toward managing it. The professionals who navigate AI adoption most successfully are not those who feel no resistance — they are those who recognize their resistance and choose to engage despite it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Understanding Your Resistance</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Resistance to AI adoption is not irrational — it is deeply human and psychologically well-understood. One of the most common barriers is identity threat. If you have spent twenty years building expertise in data analysis, financial modeling, or legal research, the emergence of AI systems that can perform these tasks in seconds strikes at the core of your professional identity. It is not the tool you fear — it is the question the tool raises: If a machine can do what I do, who am I? This existential dimension of AI resistance is rarely discussed in training programs but is often the most powerful barrier to adoption.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Fear of irrelevance is closely related but subtly different. Identity threat asks &quot;Who am I?&quot; while fear of irrelevance asks &quot;Do I still matter?&quot; Professionals who have built their careers on being the go-to expert for a particular skill set may feel their value diminishing as AI democratizes access to that expertise. The accountant who was the only person in the office who could build complex financial models, the translator who was indispensable for international communications, the researcher who could synthesize vast literature — each faces the possibility that their unique value proposition is being commoditized. This fear is real, and it deserves acknowledgment before it can be addressed.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Comfort zone addiction is perhaps the most insidious barrier because it masquerades as competence. When you have mastered your current tools and workflows, there is a genuine pleasure in operating at peak efficiency. Learning new AI tools means accepting a period of reduced productivity, making mistakes, and feeling like a beginner — experiences that become increasingly uncomfortable as you advance in your career. The irony is that the professionals who have the most to gain from AI adoption are often the most resistant, because they have the most comfort to lose. Recognizing this dynamic is essential to breaking through it.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Growth Mindset Imperative</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Carol Dweck&apos;s research on fixed versus growth mindsets has never been more relevant than in the context of AI disruption. A fixed mindset views abilities as innate and static: you are either good at something or you are not, and effort is a sign of inadequacy. A growth mindset sees abilities as developable through dedication and hard work, and views challenges as opportunities to learn. When confronted with AI, the fixed mindset says &quot;I&apos;m not a tech person&quot; and withdraws. The growth mindset says &quot;I don&apos;t understand this yet&quot; and engages.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The growth mindset is not mere optimism — it is a practical orientation that produces measurably better outcomes in periods of change. Professionals with growth mindsets invest more time in learning, recover more quickly from setbacks, seek feedback more actively, and adapt more readily to new tools and workflows. In the context of AI adoption, they are the ones who experiment with AI tools on their own time, ask questions without embarrassment, share what they learn with colleagues, and treat every failed attempt as useful data rather than evidence of inadequacy.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Cultivating a growth mindset is not about personality change — it is about deliberate practice. Start by reframing your internal narrative. Replace &quot;I can&apos;t use AI&quot; with &quot;I haven&apos;t learned to use AI effectively yet.&quot; Replace &quot;AI will replace me&quot; with &quot;AI will change my role, and I can shape how.&quot; Replace &quot;I&apos;m too old/experienced/senior to learn new tools&quot; with &quot;My experience gives me context that makes AI tools more powerful in my hands than in a beginner&apos;s.&quot; These are not empty affirmations — they are accurate reframings that open the door to productive engagement.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Practical Steps to Adapt</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Begin by integrating AI into your daily routine in low-stakes ways. Use an AI assistant to draft emails, summarize meeting notes, or brainstorm ideas. The goal is not to produce perfect outputs but to build familiarity and intuition for how AI tools behave — their strengths, their quirks, their failure modes. Within a week of daily use, most professionals report that AI feels less like an alien technology and more like a capable but imperfect colleague. This normalization is an essential first step that reduces anxiety and builds confidence.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Experiment broadly before specializing. Try different AI tools across different domains of your work: writing, analysis, research, brainstorming, visualization, coding. You will quickly discover where AI adds genuine value in your specific workflow and where it falls short. This personal discovery process is far more valuable than reading about AI applications in the abstract, because it grounds your understanding in your own professional reality. Take notes on what works, what doesn&apos;t, and why — this reflective practice accelerates your learning dramatically.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Build a learning habit and find AI-savvy mentors. Set aside thirty minutes a week to explore a new AI capability or use case. Follow practitioners — not just pundits — who share practical insights about AI in your field. Join communities (online or in person) where professionals in your industry discuss their AI experiments. Find a colleague, friend, or mentor who is further along the AI adoption curve and learn from their experience. The combination of structured exploration and social learning is the fastest path from reluctant novice to confident practitioner.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">From Readiness to Eagerness</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          There is a critical psychological transition that separates professionals who merely cope with AI from those who thrive with it: the shift from &quot;I have to adapt&quot; to &quot;I get to evolve.&quot; The first framing treats AI adoption as a burden — something imposed by external forces that must be endured. The second treats it as an opportunity — a chance to shed tedious tasks, develop new capabilities, and operate at a higher level of impact. Both framings describe the same reality, but they produce radically different emotional responses and behavioral outcomes.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          The shift to eagerness typically happens when a professional experiences their first genuine &quot;AI moment&quot; — an instance where AI enables them to accomplish something they could not have done before, or completes in minutes a task that previously consumed hours. For a marketing director, it might be using AI to analyze customer feedback across thousands of reviews and discovering a product insight that transforms their strategy. For an operations manager, it might be watching AI optimize a scheduling problem that their team had struggled with for months. These moments are transformative because they make the abstract promise of AI tangible and personal.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Cultivate eagerness by focusing on the aspects of your work that AI frees you from rather than the aspects it threatens. Most professionals spend a significant portion of their time on tasks they find tedious, repetitive, or beneath their capabilities. AI offers liberation from that drudgery, creating space for the work that originally drew you to your profession — the creative challenges, the strategic decisions, the meaningful human interactions. When you frame AI as a tool that returns your time and energy to the work you love, readiness becomes eagerness naturally.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Change Management at the Personal Level</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Organizations spend millions on change management frameworks, but the most important change management happens at the individual level. Personal transformation in the face of AI requires the same elements that organizational change management prescribes: a clear vision of the desired future state, an honest assessment of the current state, a roadmap connecting the two, and support systems that sustain motivation through the inevitable difficulties. The difference is that you are both the change agent and the subject of change — which makes self-awareness and self-compassion essential tools.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Create your personal AI transformation roadmap. Define where you want to be in six months, twelve months, and two years in terms of AI fluency. Identify the specific skills you need to develop and the tools you need to master. Set small, achievable milestones — completing an online course, using AI for a specific work project, teaching a colleague what you&apos;ve learned. Celebrate progress rather than fixating on the distance remaining. And critically, build in accountability: share your goals with someone who will check in on your progress and encourage you when motivation wanes.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Finally, practice self-compassion throughout the process. You will make mistakes. AI will produce outputs that embarrass you if you share them unreviewed. You will feel slow, confused, and inadequate at times. This is not failure — it is learning. Every expert in every field was once a fumbling beginner, and the AI transition is no exception. The professionals who emerge strongest from this period will not be those who never struggled but those who struggled openly, learned continuously, and never stopped moving forward.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Expert Perspectives</h2>

        <div className="space-y-6 mt-6">
          <PersonaQuote persona={PERSONAS[0]}>
            <p>
              Readiness for change is not about age or technical skill — it&apos;s about intellectual humility. The most AI-ready people I know are those who still consider themselves students, regardless of their title. I&apos;ve watched 60-year-old executives embrace AI with the enthusiasm of interns, and 25-year-old developers resist it because they felt threatened by tools that could generate code. The variable is not demographics — it&apos;s disposition. If you can say &quot;I don&apos;t know, but I want to learn,&quot; you are ready. Everything else follows from that posture of intellectual humility.
            </p>
          </PersonaQuote>

          <PersonaQuote persona={PERSONAS[1]}>
            <p>
              At 58, I&apos;ve reinvented myself three times. Each time was uncomfortable. Each time was worth it. AI readiness isn&apos;t about knowing the tools — it&apos;s about being willing to be a beginner again. When spreadsheets replaced ledger books, I was a beginner. When the internet transformed financial services, I was a beginner. When mobile banking upended our distribution model, I was a beginner again. Each reinvention stripped away a layer of false confidence and replaced it with genuine competence. AI is my fourth reinvention, and I&apos;ve learned that the discomfort of being a beginner is not a bug — it&apos;s the signal that growth is happening.
            </p>
          </PersonaQuote>

          <PersonaQuote persona={PERSONAS[2]}>
            <p>
              I was skeptical about AI until I watched it optimize a port scheduling problem I&apos;d spent months on — in 4 minutes. My readiness started with humility and grew into genuine enthusiasm. For three months, our team had been trying to optimize container routing at the Port of Limón during peak season. We had spreadsheets, whiteboards, and years of experience. Then an engineer demonstrated an AI optimization model that found a solution 23% more efficient than our best effort — in 4 minutes. I could have felt threatened. Instead, I felt liberated. All those months of manual optimization could now be redirected toward strategic decisions that actually needed my human judgment.
            </p>
          </PersonaQuote>

          <PersonaQuote persona={PERSONAS[3]}>
            <p>
              Stop asking if you&apos;re ready. You&apos;re not — and that&apos;s fine. Nobody is fully ready for a revolution. The question is: are you willing to learn while building? That&apos;s all it takes. I launched my first AI-powered product with zero machine learning knowledge. I learned by doing — by shipping, failing, iterating, and shipping again. Six months later, I understood AI better than most people who had spent those six months taking courses. Readiness is a myth that perfectionism uses to justify inaction. The only readiness that matters is the willingness to start before you feel prepared.
            </p>
          </PersonaQuote>
        </div>
      </ArticleLayout>
    </div>
  );
}
