"use client";

import { useI18n } from "@/lib/i18n/context";
import { HeroSection } from "@/components/hero-section";
import { Check, Users, Send } from "lucide-react";

export default function CustomizedGroupTripPage() {
    const { t } = useI18n();
    const page = t.servicePages.groupTrip;
    const form = t.servicePages.form;

    const benefits = [
        page.benefit1,
        page.benefit2,
        page.benefit3,
        page.benefit4,
        page.benefit5,
        page.benefit6,
    ];

    return (
        <>
            <HeroSection
                title={page.heroTitle}
                backgroundQuery="grouptour-hero"
            />

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/assets/services/group-tour-about.webp"
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
                                    {page.benefitsTitle}
                                </h3>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
                            {page.formTitle}
                        </h2>
                        <p className="text-gray-600 text-lg">{page.formDesc}</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="font-semibold text-xl text-emerald-950">
                                {page.formHeader}
                            </h3>
                            <p className="text-gray-500 mt-2">{page.formSubtitle}</p>
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

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {form.dates}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="DD/MM/YYYY"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {form.travelers}
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="10"
                                        min="5"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {form.budget}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="₹50,000 - ₹1,00,000"
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
