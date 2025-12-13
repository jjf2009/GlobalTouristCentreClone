"use client"

import { useI18n } from "@/lib/i18n/context"
import { HeroSection } from "@/components/hero-section"
import { OfferBanner } from "@/components/offer-banner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, User, Send } from "lucide-react"

export default function ContactPage() {
  const { t } = useI18n()

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.ourOffice,
      content: (
        <div className="text-muted-foreground text-xs sm:text-sm">
          <p>Ground Floor, 1492, 3GF5-7,</p>
          <p>Benaulim Beach Road,</p>
          <p>Vasvaddo Beach Road,</p>
          <p>Benaulim, Goa 403716, India</p>
          <a
            href="#"
            className="text-primary hover:underline mt-2 inline-block focus:outline-none focus-visible:underline"
          >
            {t.contact.viewOnMap}
          </a>
        </div>
      ),
    },
    {
      icon: Phone,
      title: t.contact.callUs,
      content: (
        <a
          href="tel:+919067972295"
          className="text-primary hover:underline text-xs sm:text-sm focus:outline-none focus-visible:underline"
        >
          +91 9067972295
        </a>
      ),
    },
    {
      icon: Mail,
      title: t.contact.emailUs,
      content: (
        <div className="text-xs sm:text-sm">
          <p className="text-muted-foreground mb-1">{t.contact.businessInquiry}</p>
          <a
            href="mailto:info@globaltouristcentre.com"
            className="text-primary hover:underline block mb-2 focus:outline-none focus-visible:underline"
          >
            info@globaltouristcentre.com
          </a>
          <p className="text-muted-foreground mb-1">{t.contact.salesInquiry}</p>
          <a
            href="mailto:sales@globaltouristcentre.com"
            className="text-primary hover:underline block focus:outline-none focus-visible:underline"
          >
            sales@globaltouristcentre.com
          </a>
        </div>
      ),
    },
    {
      icon: Clock,
      title: t.contact.workingHours,
      content: (
        <div className="text-muted-foreground text-xs sm:text-sm">
          <p>Monday - Sunday:</p>
          <p>10:00 AM - 9:00 PM</p>
        </div>
      ),
    },
  ]

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
    { question: t.faq.q5, answer: t.faq.a5 },
  ]

  return (
    <div>
      <HeroSection title={t.contact.heroTitle} backgroundQuery="vintage telephones communication contact" />

      <OfferBanner mode="inline" />

      {/* Contact Section */}
      <section className="py-12 sm:py-16" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 sm:mb-12">
            <h2
              id="contact-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2"
            >
              {t.contact.mainTitle}
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-primary mb-3 sm:mb-4" aria-hidden="true" />
            <p className="text-muted-foreground text-sm sm:text-base">{t.contact.mainSubtitle}</p>
          </header>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                      {info.title}
                    </h3>
                    {info.content}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                    {t.contact.sendMessage}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                    {t.contact.sendMessageSubtitle}
                  </p>

                  <form className="space-y-3 sm:space-y-4" aria-label="Contact form">
                    <div>
                      <Label htmlFor="contact-name" className="sr-only">
                        {t.form.name}
                      </Label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <Input
                          id="contact-name"
                          type="text"
                          placeholder={t.form.name + "*"}
                          className="pl-9 sm:pl-10 h-10 sm:h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-email" className="sr-only">
                        {t.form.email}
                      </Label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder={t.form.email + "*"}
                          className="pl-9 sm:pl-10 h-10 sm:h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-phone" className="sr-only">
                        {t.form.phone}
                      </Label>
                      <div className="relative">
                        <Phone
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder={t.form.phone + "*"}
                          className="pl-9 sm:pl-10 h-10 sm:h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-subject" className="sr-only">
                        {t.form.subject}
                      </Label>
                      <Select>
                        <SelectTrigger id="contact-subject" className="h-10 sm:h-12">
                          <SelectValue placeholder={t.form.subject + "*"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Tour Booking</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="contact-message" className="sr-only">
                        {t.form.message}
                      </Label>
                      <Textarea
                        id="contact-message"
                        placeholder={t.form.message + "*"}
                        rows={4}
                        className="resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-10 sm:h-12">
                      <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                      {t.form.sendMessage}
                    </Button>
                  </form>

                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-3 sm:mt-4">
                    We respect your privacy. Your information will not be shared.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-muted/50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="faq-heading" className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t.contact.faqTitle}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">{t.contact.faqSubtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline text-sm sm:text-base py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-3 sm:pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
