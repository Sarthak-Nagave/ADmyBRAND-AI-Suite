import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqs = [
    {
      question: "How does ADmyBRAND AI analyze my brand?",
      answer: "ADmyBRAND AI uses advanced machine learning algorithms to analyze your existing marketing materials, brand voice, visual assets, and market positioning. It compares your brand against competitors and industry benchmarks to provide comprehensive insights and recommendations for improvement.",
    },
    {
      question: "Can I integrate ADmyBRAND AI with my existing marketing tools?",
      answer: "Yes! ADmyBRAND AI offers over 500 integrations including popular platforms like HubSpot, Mailchimp, Hootsuite, Google Analytics, Facebook Ads, and more. Our API-first architecture makes it easy to connect with any custom tools your team uses.",
    },
    {
      question: "What kind of content can the AI generate?",
      answer: "Our AI can generate a wide variety of content including social media posts, email campaigns, blog articles, ad copy, product descriptions, landing page content, video scripts, and visual assets like logos and graphics. All content is tailored to your brand voice and marketing objectives.",
    },
    {
      question: "Is my data secure with ADmyBRAND AI?",
      answer: "Absolutely. We're SOC 2 compliant and use enterprise-grade security measures including end-to-end encryption, secure data centers, and regular security audits. Your data is never shared with third parties and you maintain full ownership of all content and insights generated.",
    },
    {
      question: "How quickly can I see results?",
      answer: "Most customers see improvements in their marketing efficiency within the first week. Campaign performance typically improves within 30 days, with significant ROI improvements usually visible within 60-90 days. Our AI learns and improves continuously, so results get better over time.",
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes! All plans include comprehensive onboarding, video tutorials, and documentation. Professional and Enterprise plans include live training sessions, dedicated account managers, and priority support. We also have an active community forum and regular webinars.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-colors px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6">Still have questions?</p>
          <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
