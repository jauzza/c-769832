
import { motion } from "framer-motion";
import { Zap, Calendar, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Generate Content",
    description: "Tell our AI about your industry, expertise, and goals. Get perfectly crafted LinkedIn posts in seconds.",
    step: "01"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Schedule & Automate",
    description: "Set your posting schedule and let Postify handle the rest. Your content goes live at optimal times automatically.",
    step: "02"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Scan & Learn",
    description: "Analyze successful LinkedIn profiles in your industry and replicate their content style and strategy.",
    step: "03"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Track Performance",
    description: "Monitor your LinkedIn growth with detailed analytics and insights to optimize your content strategy.",
    step: "04"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/2 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full glass-premium"
          >
            <span className="text-sm font-medium text-blue-400">How it works</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl text-display mb-6">
            Simple. <span className="text-gradient-premium">Powerful.</span> Automated.
          </h2>
          <p className="text-xl text-body max-w-2xl mx-auto">
            From content creation to performance tracking, we've streamlined your LinkedIn workflow into four simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="group relative"
            >
              <div className="glass-premium rounded-2xl p-8 h-full group-hover:scale-105 transition-all duration-500">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl glass-premium flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-light text-gray-500 group-hover:text-blue-400/60 transition-colors duration-300">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-medium mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
