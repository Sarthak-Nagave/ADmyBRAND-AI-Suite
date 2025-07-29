import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "@/components/ui/testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "ADmyBRAND AI has revolutionized our marketing strategy. We've seen a 300% increase in engagement and our content creation time has been cut in half. The AI insights are incredibly accurate and actionable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "CEO, Growth Ventures",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The predictive analytics feature helped us identify market trends before our competitors. Our ROI improved by 180% in just 3 months. This platform is a game-changer for any serious marketing team.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      title: "Creative Director, Pixel Agency",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "As a small agency, we needed tools that could compete with larger firms. ADmyBRAND AI gave us enterprise-level capabilities at a fraction of the cost. Our client retention rate is now 95%.",
      rating: 5,
    },
    {
      name: "David Thompson",
      title: "Marketing Manager, RetailMax",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The visual content AI is incredible. It creates brand-consistent designs that look like they came from our top designers. We've saved thousands on design costs while maintaining quality.",
      rating: 5,
    },
  ];

  const companies = ["TechCorp", "GrowthCo", "Innovate", "NextGen", "FutureTech"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Marketing Leaders
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses like yours are transforming their marketing with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {getCurrentTestimonials().map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-indigo-500" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ChevronLeft size={20} />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-slate-600 mb-8">Trusted by 10,000+ companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {companies.map((company) => (
              <div key={company} className="flex justify-center">
                <div className="bg-slate-200 rounded-lg px-6 py-3 text-slate-600 font-bold">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
