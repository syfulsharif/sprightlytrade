import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { ArrowRight, Zap, MapPin, MessageSquare } from "lucide-react";

const processes = [
  {
    num: "1",
    title: "speed",
    subtitle: "Speed & Accuracy",
    description: "Minimizing port demurrage through proactive document preparation and streamlined logistics compliance in Bangladesh.",
    icon: Zap
  },
  {
    num: "2",
    title: "local",
    subtitle: "Deep Local Expertise",
    description: "Extensive knowledge of Bangladesh customs procedures and Chattogram port regulations, ensuring friction-free movement.",
    icon: MapPin
  },
  {
    num: "3",
    title: "transparent",
    subtitle: "Transparent Communication",
    description: "Real-time updates on your shipment status and compliance reports. You are never left in the dark about your cargo.",
    icon: MessageSquare
  },
];

export function Process() {
  const [activeTab, setActiveTab] = useState(processes[0].title);

  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center text-center mb-10 w-full">
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Why Choose <br />
          Sprightly Trade International?
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl leading-relaxed mb-6">
          We combine speed, deep local knowledge, and absolute transparency to be your most reliable <strong className="text-white font-medium font-normal">Customs Broker in Chattogram Port</strong> and across Bangladesh.
        </p>

        <a href="#contact" className="text-xs uppercase tracking-widest flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
          Learn more <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <div className="w-full">
        {/* Tabs */}
        <div className="flex justify-center md:justify-between items-center mb-8 border-b border-white/10 w-full relative">
          {processes.map((p) => (
            <button 
              key={p.num} 
              onClick={() => setActiveTab(p.title)}
              className={cn(
                "flex-1 flex flex-col items-center pb-4 transition-colors relative",
                activeTab === p.title ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              <span className="text-xs mb-1 font-mono">{p.num}</span>
              <span className="text-xs uppercase tracking-widest">{p.title}</span>
              {activeTab === p.title && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="border border-white/10 p-8 md:p-12 bg-neutral-900/30 flex flex-col md:flex-row gap-8">
           {processes.map((p) => (
             p.title === activeTab && (
               <motion.div 
                 key={p.num}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4 }}
                 className="flex flex-col gap-4"
               >
                 <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-full mb-2">
                    <p.icon className="w-5 h-5 text-neutral-300" />
                 </div>
                 <h3 className="font-display text-2xl font-medium text-white">{p.subtitle}</h3>
                 <p className="text-sm text-neutral-400 leading-relaxed max-w-lg">
                   {p.description}
                 </p>
               </motion.div>
             )
           ))}
        </div>
      </div>
    </section>
  );
}
