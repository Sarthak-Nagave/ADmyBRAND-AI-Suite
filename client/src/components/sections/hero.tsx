import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Play, CheckCircle, Clock, Shield } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-400/30 to-violet-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full mb-8 shadow-lg"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-slate-600">✨ New: Advanced AI Brand Analysis</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Transform Your Brand with{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
              AI-Powered Marketing
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            ADmyBRAND AI Suite empowers businesses to create compelling brand strategies, 
            generate high-converting content, and optimize marketing campaigns with advanced artificial intelligence.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-2" size={20} />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-white/20 text-slate-700 text-lg font-semibold hover:bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mt-8 space-x-6 text-sm text-slate-500"
          >
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={16} />
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="text-blue-500 mr-2" size={16} />
              14-day free trial
            </div>
            <div className="flex items-center">
              <Shield className="text-indigo-500 mr-2" size={16} />
              Enterprise security
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          animate={floatAnimation}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1100"
              alt="AI-powered marketing dashboard interface"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            
            <motion.div
              className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-700">AI Active</span>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg p-3 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">+127% ROI</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
