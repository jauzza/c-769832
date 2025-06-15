
import { motion } from "framer-motion";

const stats = [
  {
    number: "500K+",
    label: "LinkedIn Posts Generated",
    description: "AI-powered content created by our users"
  },
  {
    number: "50K+",
    label: "Active LinkedIn Creators",
    description: "Professionals using Postify daily"
  },
  {
    number: "300%",
    label: "Average Engagement Boost",
    description: "Increase in LinkedIn engagement rates"
  },
  {
    number: "95%",
    label: "Time Saved",
    description: "Reduction in content creation time"
  }
];

export const StatsSection = () => {
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
            Powering LinkedIn Success
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how Postify is transforming LinkedIn content creation for thousands of professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass rounded-xl p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
