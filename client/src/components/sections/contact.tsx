import { motion } from "framer-motion";
import ContactForm from "@/components/ui/contact-form";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "+1 (555) 123-4567",
      subtitle: "Available Monday - Friday, 9AM - 6PM EST",
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "support@admybrand.ai",
      subtitle: "24/7 response within 2 hours",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      subtitle: "Start Chat Now →",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Marketing?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start your free trial today or get in touch with our team to learn how ADmyBRAND AI can revolutionize your marketing strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <method.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{method.title}</h4>
                    <p className="text-slate-600">{method.value}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">{method.subtitle}</p>
              </div>
            ))}

            <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">Enterprise Sales</h4>
              <p className="text-slate-600 text-sm mb-4">
                Need a custom solution for your enterprise? Our sales team is ready to help you build the perfect AI marketing strategy.
              </p>
              <Button
                variant="link"
                className="text-indigo-600 hover:text-indigo-700 font-medium text-sm p-0"
              >
                Contact Sales Team →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
