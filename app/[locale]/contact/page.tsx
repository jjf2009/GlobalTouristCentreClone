"use client";

import { ContactHero } from "./ContactHero";
import { ContactInfoGrid } from "./ContactInfoGrid";
import { ContactForm } from "./ContactForm";
import { ContactFAQ } from "./ContactFAQ";
import ContactTitle from "./ContactTitle";
import ContactFaqTitle from "./ContactFaqTitle";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title ABOVE the grid */}
          <ContactTitle />

          {/* Grid starts AFTER title */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <ContactInfoGrid />
            <div className="lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <ContactFaqTitle />
      <ContactFAQ />
    </>
  );
}
