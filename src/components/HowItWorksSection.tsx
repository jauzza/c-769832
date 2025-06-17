
import { motion } from "framer-motion";
import { Zap, Calendar, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Generate Content",
    description: "Tell our AI about your industry, expertise, and goals. Get perfectly crafted LinkedIn posts in seconds.",
    step: "01",
    position: { top: "20%", left: "15%" }
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Schedule & Automate",
    description: "Set your posting schedule and let Postify handle the rest. Your content goes live at optimal times automatically.",
    step: "02",
    position: { top: "20%", right: "15%" }
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Scan & Learn",
    description: "Analyze successful LinkedIn profiles in your industry and replicate their content style and strategy.",
    step: "03",
    position: { bottom: "20%", left: "15%" }
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Track Performance",
    description: "Monitor your LinkedIn growth with detailed analytics and insights to optimize your content strategy.",
    step: "04",
    position: { bottom: "20%", right: "15%" }
  }
];

const connections = [
  { from: 0, to: 1, path: "M 25% 30% Q 50% 15% 75% 30%" },
  { from: 1, to: 3, path: "M 75% 30% Q 90% 50% 75% 70%" },
  { from: 3, to: 2, path: "M 75% 70% Q 50% 85% 25% 70%" },
  { from: 2, to: 0, path: "M 25% 70% Q 10% 50% 25% 30%" }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
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

        {/* Roadmap Container */}
        <div className="relative max-w-6xl mx-auto h-[600px] md:h-[500px]">
          {/* Connection Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {connections.map((connection, index) => (
              <motion.path
                key={index}
                d={connection.path}
                stroke="url(#gradient)"
                strokeWidth="0.3"
                fill="none"
                strokeDasharray="2,2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0A66C2" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1485CC" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0A66C2" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-[#1485CC] flex items-center justify-center shadow-2xl border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white/20" />
              </div>
            </div>
          </motion.div>

          {/* Step Nodes */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={step.position}
            >
              <div className="relative group">
                {/* Step Node */}
                <div className="w-16 h-16 rounded-full glass border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary/60 transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <div className="w-72 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Pulse Effect */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-1 gap-8 mt-16">
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
                <div className="flex justify-center mt-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
