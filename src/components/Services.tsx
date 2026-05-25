import { FileText, Globe2, ShieldCheck, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const services = [
  {
    title: "Customs Clearance",
    description: "Expert handling of Import/Export Bill of Entry processing, bonded warehouse clearance, and port formalities.",
    icon: FileText,
  },
  {
    title: "Freight Forwarding",
    description: "Reliable logistics network for cargo clearance at Dhaka Airport and sea freight via Chattogram Port.",
    icon: Globe2,
  },
  {
    title: "Regulatory Compliance",
    description: "Full adherence to logistics compliance Bangladesh laws, ensuring zero-penalty processing.",
    icon: ShieldCheck,
  },
  {
    title: "Logistics Consulting",
    description: "Expert guidance on trade tariffs, export documentation services, HS Code classification, and duty exemptions.",
    icon: Lightbulb,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 font-sans">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        
        {/* Left Side text (PAS Framework implementation) */}
        <div className="lg:w-1/3">
          <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-6 font-medium">WHAT WE DO</h2>
          <h3 className="text-3xl font-display text-white mb-6 tracking-tight">Stop letting port delays drain your profit margins.</h3>
          
          <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
            <p>
              <strong className="text-neutral-300">The Problem:</strong> Complex customs paperwork and changing regulations can unexpectedly halt your supply chain.
            </p>
            <p>
              <strong className="text-neutral-300">The Cost:</strong> Stuck shipments lead to mounting demurrage fees and missed deadlines that damage client trust.
            </p>
            <p>
              <strong className="text-white">Our Solution:</strong> As a premier C&amp;F Agency in Bangladesh, Sprightly Trade International acts as your impenetrable shield. We ensure precise documentation, early preparation, and proactive port management.
            </p>
          </div>
        </div>
        
        {/* Right Side Grid */}
        <div className="lg:w-2/3 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                key={service.title}
                className="bg-neutral-950 p-8 md:p-12 hover:bg-neutral-900 transition-colors flex flex-col h-full"
              >
                <div className="mb-8">
                  <service.icon className="w-6 h-6 text-neutral-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg mb-4 text-white font-medium">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
