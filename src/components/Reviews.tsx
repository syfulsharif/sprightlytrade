import { Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    author: "Aminur Rahman",
    company: "TexCorp BD",
    text: "I had an amazing experience importing my inventory with them. The team was professional, knowledgeable, and made the entire process stress-free.",
  },
  {
    author: "Sarah Jenkins",
    company: "Global Sourcing LLC",
    text: "As a foreign entity exporting to Bangladesh, we needed a local expert. They managed the LC documentation and clearance with incredible transparency.",
  },
  {
    author: "Kamal Hossain",
    company: "AgriTech Impex",
    text: "Fast, reliable, and communicative. We've shifted all our C&F requirements to Sprightly Trade International. Payment flexibility and round-the-clock service make them stand out.",
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-end mb-12 border-b border-white/10 pb-8">
        <div className="text-right">
          <h2 className="text-xl text-white font-medium mb-1">Reviews from clients</h2>
          <p className="text-xs text-neutral-500">Here's what our previous clients had to say.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {reviews.map((review, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            key={i}
            className="bg-neutral-950 p-8 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                ))}
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed mb-12">
                "{review.text}"
              </p>
            </div>
            <div>
              <p className="font-medium text-white text-xs mb-1">{review.author}</p>
              <p className="text-[10px] text-neutral-500 tracking-wider uppercase">{review.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
