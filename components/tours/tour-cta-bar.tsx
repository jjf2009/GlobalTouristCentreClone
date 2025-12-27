"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TourCtaBarProps {
  tourName: string;
  phoneNumber?: string;
}

export function TourCtaBar({
  tourName,
  phoneNumber = "+919067972295",
}: TourCtaBarProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in your ${tourName} tour package. Please send me details.`
  );

  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=${whatsappMessage}`;

  const callLink = `tel:${phoneNumber}`;

  return (
    <section className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-slate-900">
            Ready for Your Adventure?
          </h3>
          <p className="text-slate-600 mt-1">
            Book now and secure your spot for an unforgettable experience
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-full shadow-md"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </a>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="px-6 py-6 rounded-full shadow-md"
          >
            <a href={callLink} aria-label="Call us">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
