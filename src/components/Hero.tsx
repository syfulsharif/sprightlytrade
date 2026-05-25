import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "../assets/images/port_ship_hero_1779722470216.png";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950">
      
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Cargo ship at a modern industrial port"
          className="w-full h-full object-cover md:object-center"
        />
        {/* Soft dark gradient fading up from bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-medium tracking-tight mb-6 text-white drop-shadow-xl leading-[1.05]">
            Seamless Customs Clearance<br />
            &amp; Logistics Solutions
          </h1>
          
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
            Trusted C&amp;F partner for timely import-export clearance, regulatory compliance, and end-to-end supply chain support in Chattogram and Dhaka.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2 group text-sm font-medium"
            >
              Get a Free Consultation <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
