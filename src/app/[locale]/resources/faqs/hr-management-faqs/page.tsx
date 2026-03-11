'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { PersonaQuote, PERSONAS } from '@/components/resources/PersonaQuote';

export default function HRManagementFAQsPage() {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: JSX.Element; personaQuote?: JSX.Element }[] = [
    {
      question: '1. How will AI change the recruitment process?',
      answer: (
        <>
          <p>
            AI is fundamentally reshaping recruitment by automating high-volume, repetitive tasks while enabling deeper candidate insights. Resume screening algorithms can now process thousands of applications in minutes, identifying candidates who match both explicit requirements and implicit success patterns derived from historical performance data. Intelligent sourcing platforms scan professional networks, open-source contributions, and published work to surface passive candidates who might never respond to a traditional job posting.
          </p>
          <p>
            Beyond efficiency, AI enables more nuanced evaluation. Natural language processing can analyze video interviews for communication skills and cultural alignment. Predictive models can estimate candidate retention likelihood and time-to-productivity. However, the human element remains critical — AI excels at filtering and pattern recognition, but final hiring decisions still benefit from human judgment around team dynamics, growth potential, and organizational fit. The most effective recruitment strategies will combine AI&apos;s analytical power with recruiters&apos; relational intelligence.
          </p>
        </>
      ),
    },
    {
      question: '2. What skills should HR look for in candidates in the AI era?',
      answer: (
        <>
          <p>
            The skill profile of a valuable employee is shifting dramatically. Technical literacy — not necessarily coding ability, but comfort with digital tools and data interpretation — has become a baseline expectation across nearly every role. Equally important are adaptive skills: the ability to learn quickly, pivot between tasks, and remain productive amid ambiguity. Critical thinking has become paramount as employees increasingly need to evaluate AI-generated outputs, question automated recommendations, and apply contextual judgment.
          </p>
          <p>
            Uniquely human capabilities are gaining premium value. Creative problem-solving, emotional intelligence, cross-cultural communication, and ethical reasoning are precisely the skills that AI cannot replicate. HR teams should prioritize candidates who demonstrate a growth mindset — those who view AI as a collaborator rather than a threat. Look for evidence of continuous learning, comfort with experimentation, and the ability to bridge technical and non-technical perspectives. The most resilient employees will be those who can work alongside AI systems while contributing the judgment and empathy that only humans provide.
          </p>
        </>
      ),
    },
    {
      question: '3. Will AI replace HR professionals?',
      answer: (
        <>
          <p>
            AI will not replace HR professionals, but it will profoundly transform what they do. Administrative and transactional HR tasks — payroll processing, benefits enrollment, basic policy inquiries, scheduling, and compliance reporting — are already being automated at scale. This shift is not a threat but an opportunity: it frees HR practitioners to focus on high-value strategic work that demands empathy, judgment, and human connection.
          </p>
          <p>
            The HR professionals who thrive will be those who evolve into strategic advisors, change facilitators, and employee experience architects. They will use AI-generated insights to design better development programs, predict and address retention risks, and create personalized career paths. They will serve as the ethical conscience of AI deployment, ensuring that algorithmic decisions align with organizational values and legal standards. The role becomes more influential, not less — but it requires a willingness to develop new competencies in data literacy, AI governance, and strategic workforce planning.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[0]}>
          <p>
            &quot;The HR professionals I see thriving are those who&apos;ve stopped asking &apos;Will AI take my job?&apos; and started asking &apos;How can AI make my work more impactful?&apos; The administrative burden that once consumed 60% of their time is disappearing — and that&apos;s liberating, not threatening. The future belongs to HR leaders who combine technological fluency with deep human insight.&quot;
          </p>
        </PersonaQuote>
      ),
    },
    {
      question: '4. How can HR departments prepare for AI integration?',
      answer: (
        <>
          <p>
            Preparation begins with an honest skills audit — not just of the workforce, but of the HR team itself. Identify the gaps between current capabilities and what AI-augmented HR requires: data literacy, vendor evaluation skills, change management expertise, and ethical AI governance knowledge. Invest in targeted upskilling programs that build these competencies incrementally rather than attempting a wholesale transformation overnight.
          </p>
          <p>
            Start with pilot projects that address clear pain points. Perhaps it&apos;s an AI chatbot handling routine employee inquiries, or an analytics dashboard that surfaces retention risk indicators. These small wins build organizational confidence and generate lessons that inform larger deployments. Establish a cross-functional AI governance committee that includes HR, IT, legal, and employee representatives. Create clear policies around data usage, algorithmic transparency, and escalation procedures. Most importantly, communicate openly with employees about how AI will be used, what data will be collected, and how their privacy will be protected.
          </p>
        </>
      ),
    },
    {
      question: '5. What are the ethical concerns of using AI in HR?',
      answer: (
        <>
          <p>
            The ethical landscape of AI in HR is complex and rapidly evolving. Algorithmic bias stands as the most documented concern — AI systems trained on historical data can perpetuate and even amplify existing discrimination patterns in hiring, promotion, and compensation decisions. A model trained on a decade of hiring data from a male-dominated industry may systematically undervalue female candidates, not through explicit discrimination but through learned pattern recognition that mirrors past biases.
          </p>
          <p>
            Employee surveillance represents another significant ethical frontier. AI tools can monitor keystrokes, analyze communication sentiment, track location, and measure productivity with unprecedented granularity. While these capabilities can improve performance management, they also risk creating a culture of distrust and psychological stress. Data privacy concerns are equally pressing — HR departments handle sensitive personal information, and AI systems often require extensive data to function effectively. Organizations must navigate consent requirements, data minimization principles, and the right to explanation mandated by regulations like GDPR. Transparency about how AI influences decisions affecting people&apos;s livelihoods is not just ethical — it is increasingly a legal requirement.
          </p>
        </>
      ),
    },
    {
      question: '6. How can AI improve employee retention?',
      answer: (
        <>
          <p>
            AI transforms retention from a reactive scramble into a proactive strategy. Predictive analytics models can identify employees at elevated flight risk months before they begin actively job searching, analyzing patterns in engagement survey responses, communication frequency, project involvement, and even subtle behavioral shifts like reduced participation in optional meetings or decreased use of collaborative tools. This early warning system gives managers a meaningful window to intervene.
          </p>
          <p>
            Beyond prediction, AI enables personalized retention strategies. By analyzing what motivates individual employees — career progression, compensation, work-life balance, learning opportunities, or team dynamics — organizations can tailor their retention efforts rather than applying one-size-fits-all solutions. AI-powered career pathing tools can show employees potential growth trajectories within the organization, reducing the impulse to look externally for advancement. Sentiment analysis of exit interview data and employee feedback reveals systemic issues that might otherwise remain invisible. When combined with human empathy and managerial judgment, these tools create a retention ecosystem that is both data-informed and deeply personal.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[1]}>
          <p>
            &quot;In my years leading strategy at Nordic Financial Group, I watched retention programs fail repeatedly because they relied on gut instinct rather than data. When we finally integrated predictive analytics, we identified that our highest-risk employees weren&apos;t the ones complaining — they were the ones who had gone quiet. AI gave us the signal; our managers provided the solution. Retention improved 23% in one year.&quot;
          </p>
        </PersonaQuote>
      ),
    },
    {
      question: '7. What role does AI play in performance management?',
      answer: (
        <>
          <p>
            AI is dismantling the traditional annual review model in favor of continuous, data-rich performance management. Real-time feedback systems powered by natural language processing can analyze communication patterns, project contributions, and peer interactions to provide ongoing performance insights rather than relying on a single subjective assessment each year. Goal-tracking platforms use AI to suggest milestone adjustments, identify blockers, and recommend resources when employees fall behind on objectives.
          </p>
          <p>
            Perhaps most valuably, AI reduces the impact of cognitive biases that plague traditional performance reviews — recency bias, halo effects, and similarity bias all diminish when evaluations are grounded in comprehensive data rather than a manager&apos;s selective memory. AI can also identify high-potential employees who might be overlooked in conventional review processes, particularly those in less visible roles or from underrepresented groups. However, performance management remains fundamentally a human endeavor. AI provides the data and patterns; managers must still conduct meaningful conversations, provide contextual feedback, and make nuanced development decisions.
          </p>
        </>
      ),
    },
    {
      question: '8. How should HR handle the transition to AI-assisted workflows?',
      answer: (
        <>
          <p>
            Successful transitions begin with empathy and transparency. Acknowledge that AI adoption creates genuine anxiety — people worry about job security, feel overwhelmed by new tools, and may resent changes imposed without their input. Address these concerns directly and honestly rather than dismissing them with vague reassurances. Involve employees in the implementation process through pilot groups, feedback sessions, and co-design workshops. People support what they help create.
          </p>
          <p>
            Structure the transition in manageable phases. Start with AI tools that reduce tedious tasks rather than those that fundamentally change job roles — this builds positive associations with the technology. Provide robust training that goes beyond button-clicking tutorials to include the reasoning behind AI recommendations and the critical thinking needed to evaluate them. Establish clear escalation paths for when AI systems produce questionable results. Celebrate early adopters and create peer mentoring networks. Most critically, maintain open communication channels throughout the process and be willing to adjust the pace of adoption based on legitimate organizational feedback.
          </p>
        </>
      ),
    },
    {
      question: '9. What AI tools are most useful for HR departments today?',
      answer: (
        <>
          <p>
            The most impactful AI tools for HR fall into several categories. For recruitment, applicant tracking systems with AI-powered screening (such as intelligent resume parsing, candidate matching, and automated outreach) deliver immediate ROI by reducing time-to-hire and improving candidate quality. Conversational AI chatbots handle routine employee inquiries about benefits, policies, and procedures — freeing HR staff for strategic work while providing employees with instant, 24/7 support.
          </p>
          <p>
            People analytics platforms that aggregate workforce data into actionable dashboards are transforming strategic HR planning. These tools visualize turnover patterns, compensation equity, engagement trends, and skills gaps. Learning management systems with AI-driven personalization create tailored development paths based on individual skill profiles and career aspirations. Sentiment analysis tools that monitor anonymous feedback, survey responses, and engagement signals provide early warning of cultural issues. Skills assessment platforms — like skaills — that combine psychometric evaluation with AI-powered analysis help organizations understand their workforce&apos;s capabilities at a granular level, enabling targeted development investments.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[2]}>
          <p>
            &quot;When we evaluated AI tools for our logistics consortium, the biggest mistake we almost made was buying the most sophisticated platform. What actually moved the needle were simple, well-integrated tools that solved specific problems. An AI chatbot for HR inquiries saved us 200 hours per month. A basic predictive model for turnover paid for itself in the first quarter. Start practical, then scale.&quot;
          </p>
        </PersonaQuote>
      ),
    },
    {
      question: '10. How can HR ensure AI doesn\'t perpetuate bias in hiring?',
      answer: (
        <>
          <p>
            Combating algorithmic bias requires a multi-layered approach that begins before an AI system is ever deployed. Start with the training data — audit it for historical biases in demographics, educational backgrounds, and career patterns. If your past hiring has been homogeneous, a model trained on that data will replicate that homogeneity. Consider using synthetic data or bias-correction techniques to create more representative training sets.
          </p>
          <p>
            Implement regular algorithmic audits that analyze outcomes across protected categories: gender, ethnicity, age, disability status, and socioeconomic background. Establish clear adverse impact thresholds and automatic alerts when AI recommendations show disparate patterns. Require human review of all AI-assisted hiring decisions, particularly at the shortlisting stage where algorithmic filtering has the greatest impact. Work with vendors who provide transparency about their model architectures and bias-testing methodologies. Create diverse audit teams that include perspectives from underrepresented groups. Document everything — regulatory requirements for explainable AI in employment decisions are tightening globally, and organizations that build robust audit trails now will be better prepared for the compliance landscape ahead.
          </p>
        </>
      ),
    },
    {
      question: '11. What change management strategies work best for AI adoption in HR?',
      answer: (
        <>
          <p>
            The most effective change management strategies for AI adoption combine top-down vision with bottom-up engagement. Executive sponsorship is essential — when leadership visibly uses and champions AI tools, it signals organizational commitment and reduces resistance. However, mandating adoption without adequate support creates resentment and workarounds. Balance the push from leadership with pull from employees by identifying and empowering internal champions who can demonstrate AI&apos;s benefits in practical, relatable terms.
          </p>
          <p>
            Communication must be continuous, honest, and specific. Replace abstract promises like &quot;AI will transform our department&quot; with concrete examples: &quot;This tool will eliminate the 4 hours per week you spend on manual scheduling.&quot; Address fears directly — if certain roles will be restructured, say so openly and provide transition support. Create safe spaces for experimentation where failure is expected and learning is celebrated. Measure and share progress through metrics that matter to frontline employees, not just management dashboards. Finally, recognize that change management for AI adoption is not a one-time project but an ongoing capability. The technology will continue evolving, and organizations need sustainable practices for continuous adaptation.
          </p>
        </>
      ),
    },
    {
      question: '12. How will the HR department of 2030 look different from today?',
      answer: (
        <>
          <p>
            By 2030, the HR department will have evolved from an administrative support function into a strategic intelligence hub. AI will handle the vast majority of transactional work — onboarding paperwork, benefits administration, compliance reporting, and routine inquiries will be fully automated. This frees HR professionals to focus on what machines cannot do: building trust, navigating complex interpersonal dynamics, and designing organizational cultures that attract and retain top talent.
          </p>
          <p>
            The HR team of 2030 will be smaller but far more influential. Its members will be data-fluent strategists who use AI-generated insights to advise on workforce planning, skills investment, and organizational design. Internal mobility will be powered by AI matching algorithms that surface opportunities based on skills, aspirations, and organizational needs — making the traditional job posting largely obsolete. Continuous skills assessment will replace static job descriptions, and personalized development paths will be the norm rather than the exception. The CHRO will sit firmly at the strategic table, armed with predictive workforce analytics as powerful as the financial models that guide CFO decisions. Ethics and governance will be core HR competencies, not afterthoughts.
          </p>
        </>
      ),
      personaQuote: (
        <PersonaQuote persona={PERSONAS[3]}>
          <p>
            &quot;At Synaptic Ventures, we&apos;re already building what most companies won&apos;t see until 2030. Our HR team is half the size of industry average but delivers twice the impact — because they&apos;ve moved entirely out of administration and into strategic workforce architecture. The companies that wait for 2030 to make this shift will find they&apos;re five years behind competitors who started in 2025. The transformation window is now.&quot;
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
            Human Resources Management in the AI Era — FAQs
          </h1>
          <p className="text-lg text-gray-500 mb-4">
            Expert answers to the most pressing questions about AI&apos;s impact on HR
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
