import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Ready to streamline <br className="hidden lg:block" /> your logistics?
          </h2>
          <p className="text-neutral-400 text-sm mb-12 leading-relaxed">
            Contact Sprightly Trade International today for a customized freight forwarding and customs clearance consultation.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
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
            
            <div className="flex items-start gap-4">
              <div className="border border-white/10 p-3 bg-neutral-900/50 rounded-sm">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-white mb-1">Direct Support</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  +880 1670 409241<br />
                  Sat-Thu, 9am - 6pm BST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="border border-white/10 p-3 bg-neutral-900/50 rounded-sm">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-white mb-1">Email inquiries</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  info@sprightlytrade.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-white/10 p-8 md:p-10 bg-neutral-900/20">
          <h3 className="font-display text-xl font-medium mb-8 text-white">Request a Quote</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">First Name</label>
                <input type="text" id="firstName" className="w-full bg-neutral-950 border border-white/5 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Last Name</label>
                <input type="text" id="lastName" className="w-full bg-neutral-950 border border-white/5 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Company Email</label>
              <input type="email" id="email" className="w-full bg-neutral-950 border border-white/5 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors text-white" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">Project Details</label>
              <textarea id="message" rows={4} className="w-full bg-neutral-950 border border-white/5 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none text-white"></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-black font-medium py-3 rounded-none hover:bg-neutral-200 transition-colors mt-8 text-sm">
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
