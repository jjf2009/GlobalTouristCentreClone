import type { Metadata } from "next";

import { HeroSection } from "@/components/hero-section";
import HomeForm from "@/app/[locale]/(home)/HomeForm";

/* ------------------------------------------------------------------ */
/* STATIC PARAMS (required for output: "export") */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return [{ locale: "en" }];
}

/* ------------------------------------------------------------------ */
/* METADATA */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Visa Assistance & Documentation Services | Global Tourist Centre",
  description:
    "Comprehensive visa assistance and documentation services for hassle-free international travel. Consultation, application support, and tracking.",
};

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */
export default function VisaAssistancePage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <HeroSection
        title="Visa & Documentation Services"
        backgroundQuery="passport visa travel documents"
      />

      {/* ================= ABOUT / SERVICES ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://source.unsplash.com/900x600/?passport,visa"
              alt="Visa documentation assistance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Simplify Your Visa Process
            </h2>

            <p className="text-muted-foreground mb-6">
              Navigating visa requirements can be complex and time-consuming.
              Our expert visa assistance service takes the stress out of
              international travel documentation. We handle everything from
              application forms to document verification, ensuring your visa
              process is smooth and successful.
            </p>

            <h3 className="font-semibold mb-3">Our Visa Services Include:</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✔ Comprehensive visa consultation for all countries</li>
              <li>✔ Document checklist and preparation assistance</li>
              <li>✔ Application form filling and submission</li>
              <li>✔ Appointment scheduling with embassies/consulates</li>
              <li>✔ Follow-up and status tracking</li>
              <li>✔ Express processing for urgent applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold mb-2">
              Visa Application Process
            </h2>
            <p className="text-muted-foreground">
              Our step-by-step process ensures your visa application is handled
              professionally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Step 1: Consultation",
                text: "We assess your travel plans and explain visa requirements, timelines, and fees.",
              },
              {
                title: "Step 2: Document Preparation",
                text: "Guidance on gathering passports, photographs, financial proofs, and supporting documents.",
              },
              {
                title: "Step 3: Application Submission",
                text: "Accurate form filling, appointment scheduling, and submission to embassies or consulates.",
              },
              {
                title: "Step 4: Follow-up & Collection",
                text: "Status tracking, handling additional requests, and passport collection assistance.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl bg-background p-6 shadow-sm"
              >
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 text-center mb-10">
          <h2 className="font-serif text-3xl font-bold mb-2">
            Apply for Visa Assistance
          </h2>
          <p className="text-muted-foreground">
            Fill out this form and our visa experts will contact you within 24
            hours.
          </p>
        </div>

        {/* Reuse existing HomeForm */}
        <HomeForm />
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-6">Visa FAQs</h2>

          <div className="space-y-4">
            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                Do you assist with both tourist and business visas?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Yes. We assist with tourist, business, student, work, and
                transit visas, guiding you through documentation and submission.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                When should I start the visa process before travel?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Ideally, start a few weeks in advance. Processing times vary by
                country and season.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                Do you provide appointment booking for visa interviews?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                We guide you through appointment booking and preparation, based
                on embassy or consulate requirements.
              </p>
            </details>

            <details className="rounded-lg bg-muted/40 p-4">
              <summary className="font-medium cursor-pointer">
                Can I extend my trip abroad if my visa allows it?
              </summary>
              <p className="mt-2 text-muted-foreground text-sm">
                Extensions depend on destination rules. We can advise you on
                eligibility and local procedures.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
