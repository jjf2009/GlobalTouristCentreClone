import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-500 text-white text-center py-16 px-8">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Privacy Policy</h1>
        <p className="text-xl md:text-2xl opacity-95">Your privacy is important to us</p>
      </div>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
            Our Commitment to Your Privacy
          </h2>
          <p className="text-gray-500 italic text-base md:text-lg">
            Last updated: December 2023
          </p>
        </div>

        {/* Policy Content */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section 1 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              1. Information We Collect
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Global Tourist Centre ("we," "us," or "our") is committed to protecting the privacy of our customers. We may collect personal information from you in a variety of ways, including when you book a tour, request a quote, or contact us for information. The types of personal information we may collect include:
            </p>
            <ul className="space-y-4">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Personal Identification Information:</strong> Your name, date of birth, and nationality.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Contact Information:</strong> Your address, email address, and phone number.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Travel and Booking Details:</strong> Passport details, visa information, booking history, travel preferences, and frequent flyer numbers.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Technical Information:</strong> IP address, browser type, and browsing data collected through cookies when you visit our website.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Other Information:</strong> Any other information you voluntarily provide to us, such as dietary requirements or medical conditions relevant to your travel plans.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              2. How We Use Your Information
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-4">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                To provide and manage our services: process bookings, manage travel arrangements
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                To communicate with you: send confirmations, itineraries, and important updates
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                For customer support: respond to inquiries and resolve issues
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                For marketing and promotions: send information about products and services (only with your consent)
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                To improve our services: analyze usage and enhance our offerings
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                For legal and security purposes: comply with obligations and protect rights
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              3. Sharing and Disclosure of Your Information
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                Third-party service providers: airlines, hotels, transport operators essential to your travel
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                Visa facilitation services: embassies or consulates when providing visa assistance
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                Business partners: trusted partners for joint services or promotions
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                Legal authorities: when required by law or valid government request
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              These third parties are obligated to protect your information and are not authorized to use it for any other purpose.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              4. Data Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to protecting your information. We have implemented appropriate administrative, technical, and physical security measures to protect your personal data from unauthorized access, use, alteration, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              5. Use of Cookies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our website uses "cookies" to enhance your browsing experience. Cookies are small data files stored on your device that help us understand your preferences and tailor our website content for you. You can choose to accept or decline cookies through your browser settings.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              6. Your Rights and Choices
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              You have certain rights regarding your personal information:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Access and Correction:</strong> You have the right to access and update the personal information we hold about you.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Opt-Out:</strong> You can opt-out of receiving marketing communications from us at any time.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Withdrawal of Consent:</strong> You may withdraw your consent for us to use your personal information.
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Please note that withdrawing consent may prevent us from providing you with certain services.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              7. Changes to This Privacy Policy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              8. Contact Us
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <i className="fas fa-map-marker-alt text-teal-600 text-lg w-5 text-center"></i>
                <span className="text-gray-600">Address: Benaulim, Goa 403716, India</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <i className="fas fa-phone text-teal-600 text-lg w-5 text-center"></i>
                <span className="text-gray-600">Phone: +91 9067972295</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <i className="fas fa-envelope text-teal-600 text-lg w-5 text-center"></i>
                <span className="text-gray-600">Email: sales@globaltouristcentre.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}