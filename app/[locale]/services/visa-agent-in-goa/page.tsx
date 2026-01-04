"use client";

import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "@/components/hero-section";
import { Check, MessageCircle, FileText, Upload, Bell, Send } from "lucide-react";

export default function VisaAgentPage() {
    const { t } = useI18n();
    const page = t.servicePages.visaAgent;
    const form = t.servicePages.form;

    const services = [
        page.service1,
        page.service2,
        page.service3,
        page.service4,
        page.service5,
        page.service6,
    ];

    const steps = [
        { icon: MessageCircle, title: page.step1Title, desc: page.step1Desc },
        { icon: FileText, title: page.step2Title, desc: page.step2Desc },
        { icon: Upload, title: page.step3Title, desc: page.step3Desc },
        { icon: Bell, title: page.step4Title, desc: page.step4Desc },
    ];

    return (
        <>
            <HeroSection
                title={page.heroTitle}
                backgroundQuery="visa-hero"
            />

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/assets/services/visa-about.webp"
                                alt={page.aboutTitle}
                                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-6">
                                {page.aboutTitle}
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {page.aboutDesc}
                            </p>
                            <div>
                                <h3 className="font-semibold text-xl text-emerald-900 mb-4">
                                    {page.servicesTitle}
                                </h3>
                                <ul className="space-y-3">
                                    {services.map((service, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
                            {page.processTitle}
                        </h2>
                        <p className="text-gray-600 text-lg">{page.processDesc}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <Icon className="w-7 h-7 text-teal-600" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-emerald-950 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="font-semibold text-xl text-emerald-950">
                                {page.heroTitle}
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Fill in the details below and we&apos;ll contact you within 24 hours
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {form.yourName}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={form.namePlaceholder}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {form.email}
                                    </label>
                                    <input
                                        type="email"
                                        placeholder={form.emailPlaceholder}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {form.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder={form.phonePlaceholder}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {form.destination}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={form.destinationPlaceholder}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {form.message}
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder={form.messagePlaceholder}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                {form.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
