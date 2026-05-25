import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-white/10 flex flex-col items-center text-center">
        
      <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">
        Ready to streamline your logistics?
      </h2>
      <p className="text-neutral-400 text-sm mb-12 leading-relaxed max-w-xl">
        Contact Sprightly Trade International today for a customized freight forwarding and customs clearance consultation.
      </p>

      <div className="flex flex-col md:flex-row md:justify-center gap-8 md:gap-12">
        <div className="flex items-start gap-4 text-left">
          <div className="border border-white/10 p-3 bg-neutral-900/50 rounded-sm">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-white mb-1">Headquarters</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              7, Uday Chand Market, Barik Building<br />
              Agrabad C/A, Chittagong, 4100<br />
              Bangladesh
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-4 text-left">
          <div className="border border-white/10 p-3 bg-neutral-900/50 rounded-sm">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-white mb-1">Direct Support</h4>
            <a href="https://wa.me/8801670409241" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-white transition-colors">
              +880 1670 409241<br />
              <span className="text-neutral-500">Sat-Thu, 9am - 6pm BST</span>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 text-left">
          <div className="border border-white/10 p-3 bg-neutral-900/50 rounded-sm">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-medium text-sm text-white mb-1">Email inquiries</h4>
            <a href="mailto:info@sprightlytrade.com" className="text-xs text-neutral-400 hover:text-white transition-colors">
              info@sprightlytrade.com
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
