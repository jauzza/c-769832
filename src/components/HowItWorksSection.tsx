
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
    <section className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            How <span className="text-gradient font-medium">Postify</span> Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From content creation to performance tracking, we've streamlined your LinkedIn workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass rounded-xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-600">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
