/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Process } from "./components/Process";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
