// "use client"

// import React from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// // Legal Page Component
// const LegalPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const { t } = useTranslation("legal");

//   // Determine which legal page to show
//   const isPrivacyPolicy = slug === "privacy-policy";
//   const isTermsConditions = slug === "terms-and-conditions";

//   // Get page-specific data
//   const pageData = {
//     title: isPrivacyPolicy ? t("privacy.title") : t("terms.title"),
//     subtitle: isPrivacyPolicy ? t("privacy.subtitle") : t("terms.subtitle"),
//     heroImage: isPrivacyPolicy
//       ? "/assets/hero/policy-hero.webp"
//       : "/assets/hero/terms-hero.webp",
//     sections: isPrivacyPolicy ? "privacy" : "terms",
//   };

//   return (
//     <>
//       <Head>
//         <title>{pageData.title} | Global Tourist Centre</title>
//         <meta name="description" content={pageData.subtitle} />
//         <link
//           rel="canonical"
//           href={`https://globaltouristcentre.com/legal/${slug}`}
//         />
//       </Head>

//       <div className="font-sans">
//         {/* Header/Hero Section */}
//         <header
//           className="relative min-h-[400px] bg-cover bg-center flex flex-col"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${pageData.heroImage})`,
//           }}
//         >
//           <div className="flex-1 flex flex-col justify-center items-center text-center px-8 py-16 text-white">
//             <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
//               {pageData.title}
//             </h1>
//             <p className="text-lg md:text-xl lg:text-2xl opacity-95">
//               {pageData.subtitle}
//             </p>
//           </div>
//         </header>

//         {/* Content Section */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
//           <div className="text-center mb-8 md:mb-12">
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-2">
//               {isPrivacyPolicy
//                 ? t("privacy.commitmentTitle")
//                 : t("terms.bookingTermsTitle")}
//             </h2>
//             <p className="text-gray-500 italic">{t("common.lastUpdated")}</p>
//           </div>

//           <div className="max-w-5xl mx-auto">
//             {isPrivacyPolicy ? (
//               <PrivacyContent t={t} />
//             ) : (
//               <TermsContent t={t} />
//             )}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// // Privacy Policy Content
// const PrivacyContent = ({ t }) => (
//   <>
//     {/* Section 1: Information We Collect */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.infoCollect.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed mb-6">
//         {t("privacy.sections.infoCollect.description")}
//       </p>
//       <ul className="space-y-4">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.infoCollect.items.personalId.title")}
//           </strong>{" "}
//           {t("privacy.sections.infoCollect.items.personalId.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.infoCollect.items.contact.title")}
//           </strong>{" "}
//           {t("privacy.sections.infoCollect.items.contact.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.infoCollect.items.travel.title")}
//           </strong>{" "}
//           {t("privacy.sections.infoCollect.items.travel.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.infoCollect.items.technical.title")}
//           </strong>{" "}
//           {t("privacy.sections.infoCollect.items.technical.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.infoCollect.items.other.title")}
//           </strong>{" "}
//           {t("privacy.sections.infoCollect.items.other.desc")}
//         </li>
//       </ul>
//     </div>

//     {/* Section 2: How We Use Your Information */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.infoUse.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed mb-6">
//         {t("privacy.sections.infoUse.description")}
//       </p>
//       <ul className="space-y-4">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.infoUse.items.service")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.infoUse.items.communication")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.infoUse.items.support")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.infoUse.items.marketing")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.infoUse.items.improvement")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.infoUse.items.legal")}
//         </li>
//       </ul>
//     </div>

//     {/* Section 3: Sharing and Disclosure */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.sharing.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed mb-6">
//         {t("privacy.sections.sharing.description")}
//       </p>
//       <ul className="space-y-4 mb-6">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.sharing.items.providers")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.sharing.items.visa")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.sharing.items.partners")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("privacy.sections.sharing.items.legal")}
//         </li>
//       </ul>
//       <p className="text-gray-600 leading-relaxed">
//         {t("privacy.sections.sharing.note")}
//       </p>
//     </div>

//     {/* Section 4: Data Security */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.security.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed">
//         {t("privacy.sections.security.description")}
//       </p>
//     </div>

//     {/* Section 5: Use of Cookies */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.cookies.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed">
//         {t("privacy.sections.cookies.description")}
//       </p>
//     </div>

//     {/* Section 6: Your Rights and Choices */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.rights.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed mb-6">
//         {t("privacy.sections.rights.description")}
//       </p>
//       <ul className="space-y-4 mb-6">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.rights.items.access.title")}
//           </strong>{" "}
//           {t("privacy.sections.rights.items.access.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.rights.items.optout.title")}
//           </strong>{" "}
//           {t("privacy.sections.rights.items.optout.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("privacy.sections.rights.items.withdraw.title")}
//           </strong>{" "}
//           {t("privacy.sections.rights.items.withdraw.desc")}
//         </li>
//       </ul>
//       <p className="text-gray-600 leading-relaxed">
//         {t("privacy.sections.rights.note")}
//       </p>
//     </div>

//     {/* Section 7: Changes to Privacy Policy */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.changes.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed">
//         {t("privacy.sections.changes.description")}
//       </p>
//     </div>

//     {/* Section 8: Contact Us */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("privacy.sections.contact.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed mb-6">
//         {t("privacy.sections.contact.description")}
//       </p>
//       <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
//         <p className="flex items-center mb-4 text-gray-600">
//           <i className="fas fa-map-marker-alt text-teal-600 mr-4 text-lg w-5 text-center"></i>
//           {t("common.contact.address")}
//         </p>
//         <p className="flex items-center mb-4 text-gray-600">
//           <i className="fas fa-phone text-teal-600 mr-4 text-lg w-5 text-center"></i>
//           {t("common.contact.phone")}
//         </p>
//         <p className="flex items-center text-gray-600">
//           <i className="fas fa-envelope text-teal-600 mr-4 text-lg w-5 text-center"></i>
//           {t("common.contact.email")}
//         </p>
//       </div>
//     </div>
//   </>
// );

// // Terms & Conditions Content
// const TermsContent = ({ t }) => (
//   <>
//     {/* Section 1: Our Services */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.services.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed">
//         {t("terms.sections.services.description")}
//       </p>
//     </div>

//     {/* Section 2: Booking and Payment */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.booking.title")}
//       </h3>
//       <ul className="space-y-4">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.booking.items.confirm.title")}
//           </strong>{" "}
//           {t("terms.sections.booking.items.confirm.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.booking.items.schedule.title")}
//           </strong>{" "}
//           {t("terms.sections.booking.items.schedule.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.booking.items.methods.title")}
//           </strong>{" "}
//           {t("terms.sections.booking.items.methods.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.booking.items.pricing.title")}
//           </strong>{" "}
//           {t("terms.sections.booking.items.pricing.desc")}
//         </li>
//       </ul>
//     </div>

//     {/* Section 3: Cancellation and Refunds */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.cancellation.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed mb-4">
//         <strong className="text-gray-900 font-semibold">
//           {t("terms.sections.cancellation.byYou.title")}
//         </strong>{" "}
//         {t("terms.sections.cancellation.byYou.description")}
//       </p>
//       <ul className="space-y-4 mb-6">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("terms.sections.cancellation.byYou.items.days90")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("terms.sections.cancellation.byYou.items.days60to89")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("terms.sections.cancellation.byYou.items.days30to59")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("terms.sections.cancellation.byYou.items.daysLess30")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           {t("terms.sections.cancellation.byYou.items.noShow")}
//         </li>
//       </ul>
//       <p className="text-gray-600 leading-relaxed mb-4">
//         <strong className="text-gray-900 font-semibold">
//           {t("terms.sections.cancellation.visaFlights.title")}
//         </strong>{" "}
//         {t("terms.sections.cancellation.visaFlights.desc")}
//       </p>
//       <p className="text-gray-600 leading-relaxed mb-4">
//         <strong className="text-gray-900 font-semibold">
//           {t("terms.sections.cancellation.byUs.title")}
//         </strong>{" "}
//         {t("terms.sections.cancellation.byUs.description")}
//       </p>
//       <p className="text-gray-600 leading-relaxed">
//         <strong className="text-gray-900 font-semibold">
//           {t("terms.sections.cancellation.refunds.title")}
//         </strong>{" "}
//         {t("terms.sections.cancellation.refunds.description")}
//       </p>
//     </div>

//     {/* Section 4: Itinerary Changes */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.itinerary.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed">
//         {t("terms.sections.itinerary.description")}
//       </p>
//     </div>

//     {/* Section 5: Your Responsibilities */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.responsibilities.title")}
//       </h3>
//       <ul className="space-y-4">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.responsibilities.items.passport.title")}
//           </strong>{" "}
//           {t("terms.sections.responsibilities.items.passport.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.responsibilities.items.insurance.title")}
//           </strong>{" "}
//           {t("terms.sections.responsibilities.items.insurance.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.responsibilities.items.health.title")}
//           </strong>{" "}
//           {t("terms.sections.responsibilities.items.health.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.responsibilities.items.conduct.title")}
//           </strong>{" "}
//           {t("terms.sections.responsibilities.items.conduct.desc")}
//         </li>
//       </ul>
//     </div>

//     {/* Section 6: Our Liability */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.liability.title")}
//       </h3>
//       <ul className="space-y-4">
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.liability.items.thirdParty.title")}
//           </strong>{" "}
//           {t("terms.sections.liability.items.thirdParty.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.liability.items.limitation.title")}
//           </strong>{" "}
//           {t("terms.sections.liability.items.limitation.desc")}
//         </li>
//         <li className="relative pl-8 text-gray-600 leading-relaxed">
//           <span className="absolute left-2 text-teal-600 font-bold text-xl">
//             •
//           </span>
//           <strong className="text-gray-900 font-semibold">
//             {t("terms.sections.liability.items.forceMajeure.title")}
//           </strong>{" "}
//           {t("terms.sections.liability.items.forceMajeure.desc")}
//         </li>
//       </ul>
//     </div>

//     {/* Section 7: Jurisdiction */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.jurisdiction.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed">
//         {t("terms.sections.jurisdiction.description")}
//       </p>
//     </div>

//     {/* Section 8: Contact Us */}
//     <div className="mb-8 md:mb-12 p-6 md:p-8 bg-white rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//       <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
//         {t("terms.sections.contact.title")}
//       </h3>
//       <p className="text-gray-600 leading-relaxed mb-6">
//         {t("terms.sections.contact.description")}
//       </p>
//       <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
//         <p className="flex items-center mb-4 text-gray-600">
//           <i className="fas fa-map-marker-alt text-teal-600 mr-4 text-lg w-5 text-center"></i>
//           {t("common.contact.address")}
//         </p>
//         <p className="flex items-center mb-4 text-gray-600">
//           <i className="fas fa-phone text-teal-600 mr-4 text-lg w-5 text-center"></i>
//           {t("common.contact.phone")}
//         </p>
//         <p className="flex items-center text-gray-600">
//           <i className="fas fa-envelope text-teal-600 mr-4 text-lg w-5 text-center"></i>
//           {t("common.contact.email")}
//         </p>
//       </div>
//     </div>
//   </>
// );

















// // Server-side props for static generation
// export const getStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { slug: "privacy-policy" } },
//       { params: { slug: "terms-and-conditions" } },
//     ],
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["legal"])),
//     },
//   };
// };

// export default LegalPage;
