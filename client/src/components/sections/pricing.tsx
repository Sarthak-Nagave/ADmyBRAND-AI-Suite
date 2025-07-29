import { useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { Shield, RotateCcw, Headphones } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      yearlyPrice: 23,
      features: [
        "5 AI-generated campaigns per month",
        "Basic brand analysis",
        "Content generation for 2 platforms",
        "Email support",
        "Basic analytics dashboard",
      ],
      popular: false,
      ctaText: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 63,
      features: [
        "25 AI-generated campaigns per month",
        "Advanced brand analysis & insights",
        "Content generation for all platforms",
        "Priority support & live chat",
        "Advanced analytics & reporting",
        "API access & integrations",
      ],
      popular: true,
      ctaText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "For large teams and agencies",
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        "Unlimited AI campaigns",
        "Enterprise AI models & training",
        "Custom integrations & API",
        "Dedicated account manager",
        "White-label solutions",
        "SLA guarantee & 24/7 support",
      ],
      popular: false,
      ctaText: "Contact Sales",
    },
  ];

  const additionalFeatures = [
    { icon: Shield, text: "Enterprise security" },
    { icon: RotateCcw, text: "Cancel anytime" },
    { icon: Headphones, text: "24/7 support" },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              AI Marketing Plan
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business needs and marketing ambitions.
          </p>
          
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-1 border border-slate-200 shadow-lg">
            <Button
              variant={!isYearly ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsYearly(false)}
              className={!isYearly ? "bg-indigo-500 text-white" : "text-slate-600"}
            >
              Monthly
            </Button>
            <Button
              variant={isYearly ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsYearly(true)}
              className={`${isYearly ? "bg-indigo-500 text-white" : "text-slate-600"} relative`}
            >
              Yearly
              <span className="text-green-500 font-bold ml-1">-20%</span>
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard
                {...tier}
                price={isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                period={isYearly ? "year" : "month"}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6">All plans include a 14-day free trial. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {additionalFeatures.map((feature) => (
              <div key={feature.text} className="flex items-center">
                <feature.icon className="text-indigo-500 mr-2" size={16} />
                {feature.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
