'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { PersonaQuote, PERSONAS } from '@/components/resources/PersonaQuote';

export default function CareerPlanningFAQsPage() {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: JSX.Element; personaQuote?: JSX.Element }[] = [
    {
      question: '1. What careers will be most in demand from 2027 to 2030?',
      answer: (
        <>
          <p>
            The careers with the strongest demand trajectory through 2030 cluster around three themes: AI orchestration, human-centric services, and sustainability. AI and machine learning engineers, data scientists, and prompt engineers will remain highly sought after, but the fastest-growing roles are those that bridge technology and domain expertise — AI ethics officers, healthcare AI specialists, and financial algorithm auditors. Cybersecurity professionals will see explosive demand as AI both creates new attack vectors and enables more sophisticated defenses.
          </p>
          <p>
            Equally important are roles that AI cannot automate. Mental health professionals, elder care specialists, and complex negotiators will see sustained demand as populations age and workplace stress increases. Sustainability officers, green energy engineers, and circular economy designers are riding regulatory tailwinds worldwide. Creative strategists who can direct AI tools toward novel solutions will command premium compensation. The common thread across all high-demand careers is the combination of specialized knowledge with adaptive, cross-disciplinary thinking — roles where human judgment, ethical reasoning, and interpersonal skills remain irreplaceable.
          </p>
        </>
      ),
    },
    {
      question: '2. Is my current job at risk from AI automation?',
      answer: (
        <>
          <p>
            Rather than thinking in terms of entire jobs being replaced, focus on which tasks within your role are most susceptible to automation. Jobs with a high proportion of routine, predictable, and data-processing tasks — data entry, basic bookkeeping, standard report generation, rule-based customer service — face the highest automation risk. However, even roles with significant automatable components rarely disappear entirely; they transform as AI handles the routine work and humans focus on exceptions, relationships, and strategy.
          </p>
          <p>
            To assess your personal risk, audit your daily tasks. What percentage involves repetitive pattern matching versus creative problem-solving? How much requires emotional intelligence, physical dexterity in unpredictable environments, or nuanced ethical judgment? Roles in healthcare, education, skilled trades, creative direction, and strategic leadership have the lowest automation risk. If your role is heavily routine, the answer isn&apos;t panic — it&apos;s proactive reinvention. Identify the higher-value tasks adjacent to your current work and begin developing those capabilities. Employees who anticipate and prepare for transformation are consistently the ones who benefit from it.
          </p>
        </>
      ),
    },
    {
      question: '3. What skills should I develop to stay relevant?',
      answer: (
        <>
          <p>
            The most future-proof skill portfolio combines technical fluency, cognitive agility, and interpersonal mastery. On the technical side, develop working proficiency with AI tools relevant to your field — not necessarily programming, but the ability to effectively prompt, evaluate, and integrate AI outputs into your workflows. Data literacy is essential across every profession: understanding how to interpret statistics, recognize misleading data, and make evidence-based decisions will distinguish you from peers who rely solely on intuition.
          </p>
          <p>
            Cognitive skills like critical thinking, systems thinking, and creative problem-solving are increasingly valuable because they represent what AI does poorly. Practice questioning assumptions, connecting disparate ideas, and designing novel solutions to ambiguous problems. On the interpersonal front, invest in emotional intelligence, cross-cultural communication, and the ability to influence without authority. Leadership skills — particularly change management and coaching — will be in high demand as organizations navigate continuous transformation. Finally, cultivate a learning mindset. The specific technical skills of 2026 may be obsolete by 2030, but the ability to learn rapidly and adapt continuously never goes out of style.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[0]}>
          <p>
            &quot;I tell every professional I mentor the same thing: the most dangerous career strategy today is standing still. You don&apos;t need to become a data scientist overnight, but you do need to be actively building new capabilities every quarter. The professionals who are thriving aren&apos;t the ones with the most impressive credentials — they&apos;re the ones with the most aggressive learning habits. Curiosity is the ultimate career insurance.&quot;
          </p>
        </PersonaQuote>
      ),
    },
    {
      question: '4. How important are certifications in AI and data science?',
      answer: (
        <>
          <p>
            Certifications in AI and data science can be valuable career accelerators, but their importance varies significantly by context. For career changers entering technical fields, certifications from recognized institutions (Google, AWS, Microsoft, MIT, Stanford) provide credibility signals that help overcome the experience gap. For professionals in non-technical roles, certifications demonstrate initiative and baseline technical fluency that increasingly matters in hiring decisions.
          </p>
          <p>
            However, certifications alone are insufficient. Employers consistently report that they value demonstrated project experience over credential accumulation. A portfolio of real-world applications — even small personal projects — often outweighs a stack of certificates. The most strategic approach combines targeted certifications with practical application: earn a credential that validates foundational knowledge, then immediately apply that knowledge to solve a real problem in your current role or through a side project. Be selective about which certifications to pursue. Choose those aligned with your career direction and recognized in your target industry. And remember that the landscape shifts rapidly — a certification earned today may need updating within two to three years as tools and methodologies evolve.
          </p>
        </>
      ),
    },
    {
      question: '5. Should I change careers because of AI disruption?',
      answer: (
        <>
          <p>
            A career change motivated purely by AI anxiety is rarely the right move. Instead, take a strategic approach: assess whether your current field is being disrupted or augmented. Most professions are experiencing augmentation — AI is changing how work is done, not eliminating the need for the work itself. Accountants still analyze financial health, but with AI-powered tools. Marketers still craft persuasive campaigns, but with AI-generated insights and content assistance. In these cases, evolving within your current field is typically more rewarding than starting over.
          </p>
          <p>
            A career change makes sense when it aligns with your interests and strengths, not just when it feels like an escape from disruption. If you&apos;re genuinely drawn to a growing field and your transferable skills create a natural bridge, the transition can be highly rewarding. Identify where your existing expertise creates unique value in emerging domains — a nurse moving into health tech, a teacher transitioning to instructional design for AI-powered learning platforms, or a logistics manager becoming a supply chain automation specialist. These lateral moves leverage your domain knowledge while positioning you in higher-growth areas. The key is intentional repositioning, not reactive flight.
          </p>
        </>
      ),
    },
    {
      question: '6. How can I highlight AI readiness in my resume?',
      answer: (
        <>
          <p>
            Demonstrating AI readiness on your resume requires more than listing tools — it means showing how you&apos;ve used technology to create tangible results. Instead of writing &quot;Familiar with ChatGPT,&quot; write &quot;Implemented AI-powered content workflow that reduced production time by 40% while maintaining quality standards.&quot; Quantify outcomes wherever possible. Frame your AI competencies around business impact: efficiency gains, cost reductions, quality improvements, or innovation outcomes.
          </p>
          <p>
            Create a dedicated skills section that includes relevant AI tools, platforms, and methodologies specific to your field. Include any certifications or courses completed, but pair them with application examples. If you&apos;ve led or participated in AI implementation projects, describe your role in evaluation, adoption, and change management. Highlight your adaptability by showing a pattern of technology adoption throughout your career — this signals to employers that you&apos;ll continue adapting as AI evolves. Consider adding a brief &quot;AI &amp; Digital Proficiency&quot; section that lists tools you actively use, frameworks you understand, and relevant projects. For technical roles, link to a portfolio or GitHub repository that demonstrates practical application.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[1]}>
          <p>
            &quot;When I reviewed executive candidates at Nordic Financial Group, the resumes that stood out were never the ones that listed the most AI tools. They were the ones that told a story of transformation — here&apos;s a problem I recognized, here&apos;s how I used AI to solve it, and here&apos;s the measurable impact. Any hiring manager worth their salt can see through buzzword padding. Show me what you built, what you improved, and what you learned along the way.&quot;
          </p>
        </PersonaQuote>
      ),
    },
    {
      question: '7. What does "AI literacy" mean for non-technical professionals?',
      answer: (
        <>
          <p>
            AI literacy for non-technical professionals is not about understanding neural network architectures or writing Python code. It&apos;s about developing a practical working knowledge that enables you to evaluate, use, and make decisions about AI tools effectively. At its core, AI literacy means understanding what AI can and cannot do, recognizing when AI-generated outputs might be unreliable, and knowing how to frame problems in ways that leverage AI capabilities.
          </p>
          <p>
            Practically, this means being able to craft effective prompts for generative AI tools, critically evaluate AI-generated content for accuracy and bias, understand basic concepts like training data, hallucinations, and model limitations, and participate meaningfully in conversations about AI adoption in your organization. You should be able to ask intelligent questions when vendors pitch AI solutions: What data does it need? How was it validated? What are its failure modes? AI literacy also includes understanding the ethical dimensions — recognizing when AI decisions might be biased, knowing when human oversight is essential, and understanding data privacy implications. Think of it as the professional equivalent of financial literacy: you don&apos;t need to be an accountant, but you need to read a balance sheet.
          </p>
        </>
      ),
    },
    {
      question: '8. How can I build a personal brand in the AI era?',
      answer: (
        <>
          <p>
            Building a personal brand in the AI era requires demonstrating a unique intersection of skills and perspectives that AI cannot replicate. Start by identifying your distinctive value proposition — the specific combination of expertise, experience, and viewpoint that makes your contribution irreplaceable. Then consistently share that perspective through content creation, speaking engagements, community participation, and professional mentoring.
          </p>
          <p>
            Use AI tools strategically in your brand-building efforts, but never let them replace your authentic voice. AI can help you research topics, draft initial content, and analyze audience engagement, but your personal insights, professional stories, and industry opinions should remain genuinely yours. Audiences increasingly value authenticity precisely because AI-generated content is everywhere. Build your brand around thought leadership in your specific niche — the intersection of your domain expertise and AI&apos;s impact on that domain is a rich territory that few people occupy well. Engage actively on professional platforms, contribute to industry discussions, and be generous with your knowledge. The professionals who become known as trusted guides through the AI transition will build enduring career capital.
          </p>
        </>
      ),
    },
    {
      question: '9. Are traditional degrees still valuable?',
      answer: (
        <>
          <p>
            Traditional degrees retain significant value, but their role in career success is evolving. A bachelor&apos;s or master&apos;s degree still serves as a powerful credibility signal, particularly for entry-level positions, regulated professions, and roles in traditional industries. The structured learning, critical thinking development, and professional networks that degree programs provide remain genuinely valuable and difficult to replicate through self-study alone.
          </p>
          <p>
            However, the degree is no longer sufficient on its own. Employers increasingly evaluate candidates on a portfolio of credentials: formal education, professional certifications, demonstrated project experience, and continuous learning patterns. The most strategic approach is to view your degree as a foundation — not a finished product. Supplement it with targeted certifications, practical projects, and ongoing skill development that keeps pace with industry evolution. For mid-career professionals considering whether to pursue additional degrees, carefully evaluate the return on investment. In many fields, a master&apos;s degree in data analytics or AI combined with work experience creates more career leverage than an MBA. The key is matching your educational investments to where your industry is heading, not where it has been.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[2]}>
          <p>
            &quot;In logistics and operations, I&apos;ve hired brilliant professionals with traditional engineering degrees and equally brilliant ones with trade certifications and self-taught AI skills. What matters is the ability to solve real problems. My advice: if you have a degree, invest in practical AI skills. If you have practical skills, consider targeted credentials that open doors. The combination of formal education and hands-on capability is what creates truly exceptional professionals.&quot;
          </p>
        </PersonaQuote>
      ),
    },
    {
      question: '10. How can I use AI tools to accelerate my career growth?',
      answer: (
        <>
          <p>
            AI tools can dramatically accelerate your career growth when used as amplifiers for your existing strengths. Start with productivity enhancement: use AI assistants to automate routine tasks, generate first drafts, summarize lengthy documents, and organize information. This frees up time and cognitive energy for higher-value work — the strategic thinking, relationship building, and creative problem-solving that advance careers.
          </p>
          <p>
            Use AI for accelerated learning: ask AI tools to explain complex concepts, create personalized study plans, generate practice problems, and provide feedback on your work. AI-powered language tools can help you communicate more effectively in writing and presentation. Analytics tools can help you understand industry trends, competitive landscapes, and emerging opportunities that inform your career strategy. Use AI to prepare for important moments — interview preparation, presentation refinement, and proposal development. Build visible AI competency within your organization by volunteering for AI-related initiatives, sharing useful tool recommendations with colleagues, and documenting efficiency gains from AI adoption. This positions you as a forward-thinking contributor and often leads to increased responsibility and recognition.
          </p>
        </>
      ),
    },
    {
      question: '11. What industries will see the most AI-driven job creation?',
      answer: (
        <>
          <p>
            Healthcare is poised for massive AI-driven job creation as diagnostic AI, personalized treatment planning, remote patient monitoring, and drug discovery generate demand for professionals who can develop, implement, and oversee these systems. Clinical AI specialists, health data analysts, and digital health coordinators are emerging roles with strong growth trajectories. The financial services sector is similarly expanding its AI workforce — risk modeling, fraud detection, algorithmic trading, and regulatory compliance all require human professionals working alongside AI systems.
          </p>
          <p>
            The technology sector itself will continue to be the largest generator of AI-related jobs, but the most interesting growth is happening at industry intersections. AgriTech is using AI for precision farming and supply chain optimization. EdTech is creating personalized learning experiences at scale. CleanTech is leveraging AI for energy optimization, carbon tracking, and sustainable materials development. The creative industries — gaming, entertainment, marketing, and design — are experiencing a renaissance as AI tools lower the barriers to content creation while increasing demand for human creative direction. Every industry that generates data — which is effectively every industry — will create roles focused on turning that data into intelligent action.
          </p>
        </>
      ),
    },
    {
      question: '12. How do I prepare for a job interview in an AI-savvy company?',
      answer: (
        <>
          <p>
            Preparing for interviews at AI-forward companies requires demonstrating both technical awareness and adaptive mindset. Research the company&apos;s specific AI initiatives — read their engineering blog, review recent product announcements, and understand how AI fits into their business strategy. Be prepared to discuss how AI impacts their industry and where you see opportunities they might not be addressing yet. This shows strategic thinking beyond surface-level tool familiarity.
          </p>
          <p>
            Prepare concrete examples of how you&apos;ve used AI tools to improve your work, even in non-technical roles. Practice articulating your learning process — interviewers at AI-savvy companies value curiosity and adaptability as much as current knowledge. Be ready for practical assessments: you might be asked to use an AI tool during the interview, critique an AI-generated output, or propose how AI could solve a specific business challenge. Show that you understand AI&apos;s limitations as well as its capabilities — companies want employees who use AI thoughtfully, not uncritically. Prepare thoughtful questions about the company&apos;s AI governance, ethical guidelines, and how they balance automation with human judgment. This signals maturity and strategic thinking that distinguishes you from candidates who only focus on AI as a productivity tool.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[3]}>
          <p>
            &quot;When I interview candidates at Synaptic Ventures, I&apos;m not testing whether they can use ChatGPT — I assume everyone can. I&apos;m testing whether they can think critically about AI outputs, identify when something is wrong, and propose creative solutions that go beyond what any model would suggest. The candidates who impress me most are the ones who show me how they think, not just what tools they know. Demonstrate judgment, demonstrate curiosity, and demonstrate the courage to say &apos;I don&apos;t know yet, but here&apos;s how I&apos;d figure it out.&apos;&quot;
          </p>
        </PersonaQuote>
      ),
    },
  ];

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

      <div className="max-w-4xl mx-auto">
        <header className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Career Planning and Development in the AI Era — FAQs
          </h1>
          <p className="text-lg text-gray-500 mb-4">
            Navigate your professional future with confidence
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>March 2026</span>
            <span>&middot;</span>
            <span>12 questions</span>
          </div>
        </header>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                    {faq.answer}
                  </div>
                  {faq.personaQuote && (
                    <div className="mt-4">{faq.personaQuote}</div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
