import { motion } from "framer-motion";
import FeatureCard from "@/components/ui/feature-card";
import { Brain, Wand2, TrendingUp, Users, Palette, Gem } from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Brand Analysis",
      description: "Advanced AI algorithms analyze your brand positioning, competitor landscape, and market opportunities to provide actionable insights.",
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Wand2,
      title: "Content Generation",
      description: "Generate high-quality marketing copy, social media posts, email campaigns, and blog articles tailored to your brand voice.",
      gradient: "from-violet-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Campaign Optimization",
      description: "Real-time AI optimization of your marketing campaigns across all channels to maximize ROI and conversion rates.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: "Deep dive into your audience demographics, behaviors, and preferences with AI-powered analytics and recommendations.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Palette,
      title: "Visual Content AI",
      description: "Create stunning visuals, logos, and design assets with AI-powered graphic design tools that match your brand identity.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Gem,
      title: "Predictive Analytics",
      description: "Forecast market trends, predict customer behavior, and identify upcoming opportunities with advanced AI modeling.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const enterpriseFeatures = [
    "99.9% uptime SLA with global CDN",
    "SOC 2 compliant with end-to-end encryption",
    "API-first architecture with 500+ integrations",
    "24/7 dedicated support team",
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Powerful AI Features for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover comprehensive AI-powered tools designed to elevate your brand and streamline your marketing efforts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Enterprise-Grade AI Infrastructure
              </h3>
              <div className="space-y-4">
                {enterpriseFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-white" size={12} />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AI network infrastructure visualization"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
