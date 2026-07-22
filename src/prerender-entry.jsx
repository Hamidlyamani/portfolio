// Server-side entry: renders the full page to static HTML at build time
// so search engines and AI crawlers see real content, not an empty shell.
import React from "react";
import { renderToString } from "react-dom/server";
import { LangProvider, ThemeProvider } from "./i18n.jsx";
import Hero from "./components/hero_sction/hero";
import About from "./components/about/about";
import Services from "./components/services/services";
import Projects from "./components/projects/progects";
import Technologies from "./components/Technologies/Technologies";
import CharteTimeline from "./components/timeline/timeline";
import Offer from "./components/offer/offer";
import Process from "./components/process/process";
import Contact from "./components/contact/contact";
import Nav from "./components/parts/nav";
import Controls from "./components/parts/controls";
import WhatsappButton from "./components/parts/whatsapp";

export function render() {
  return renderToString(
    <ThemeProvider>
      <LangProvider>
        <div className="app-container loaded">
          <div>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Offer />
            <Technologies />
            <CharteTimeline />
            <Process />
            <Contact />
            <Nav />
            <Controls />
            <WhatsappButton />
          </div>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}
