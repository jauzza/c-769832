
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Postify's AI has transformed my LinkedIn presence. I've gone from 2 posts per month to daily engagement with minimal effort. My reach increased by 400%!"
  },
  {
    name: "Michael Chen",
    role: "Sales Manager",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The profile scanning feature is incredible. I analyzed top performers in my industry and Postify helped me replicate their content style. My engagement skyrocketed."
  },
  {
    name: "Emily Rodriguez",
    role: "Business Coach",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Scheduling posts has never been easier. Postify's AI knows the perfect times to post and the content always feels authentic to my voice and brand."
  },
  {
    name: "David Wilson",
    role: "Tech Entrepreneur",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "The AI content generation is spot-on for my industry. It understands tech trends and creates posts that resonate with my network. Saved me 10+ hours per week."
  },
  {
    name: "Lisa Thompson",
    role: "HR Consultant",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "I was skeptical about AI writing, but Postify creates content that sounds exactly like me. The analytics show which posts perform best, helping me refine my strategy."
  },
  {
    name: "James Park",
    role: "Content Creator",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "From idea to published post in under 2 minutes. Postify has made me consistent on LinkedIn for the first time ever. My follower count doubled in 3 months."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Loved by LinkedIn Creators</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of professionals growing their LinkedIn presence with Postify
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
