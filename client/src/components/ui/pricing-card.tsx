import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  period: "month" | "year";
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export default function PricingCard({
  name,
  description,
  price,
  period,
  features,
  popular = false,
  ctaText,
}: PricingCardProps) {
  return (
    <motion.div
      className={`group rounded-2xl p-8 shadow-lg border transition-all duration-300 relative ${
        popular
          ? "bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-indigo-300 hover:shadow-2xl"
          : "bg-white/80 backdrop-blur-lg border border-slate-200 hover:shadow-2xl hover:border-indigo-300"
      }`}
      whileHover={{ y: -8 }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-slate-900">${price}</span>
          <span className="text-slate-600">/{period}</span>
        </div>
        <Button
          className={`w-full font-semibold shadow-lg hover:shadow-xl transition-all ${
            popular
              ? "bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white"
              : name === "Enterprise"
              ? "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {ctaText}
        </Button>
      </div>
      
      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-start space-x-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
            <span className="text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
