import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-500 text-white text-center py-16 px-8">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">Terms & Conditions</h1>
        <p className="text-xl md:text-2xl opacity-95">Please read these terms carefully before using our services</p>
      </div>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
            Booking Terms & Conditions
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
              1. Our Services
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Global Tourist Centre is a travel and tourism company based in Goa, India. We specialize in providing personalized domestic and international tour packages, flight booking, visa assistance, and currency exchange services. We act as a facilitator, curating and arranging services from various third-party suppliers such as airlines, hotels, and transport operators.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              2. Booking and Payment
            </h3>
            <ul className="space-y-4">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Booking Confirmation:</strong> A booking is considered confirmed only after we receive the initial deposit or full payment and you receive a confirmation email from us.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Payment Schedule:</strong> The payment schedule for your tour package will be provided at the time of booking. This will typically involve an initial deposit, with the final balance due a specified number of days before your departure date.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Payment Methods:</strong> We accept payments via bank transfer, credit/debit cards, and other online payment methods as specified on our website.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Pricing:</strong> All prices are quoted on a per-person basis, unless otherwise stated. Prices are subject to change without prior notice until the booking is confirmed. Our prices include all applicable taxes.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              3. Cancellation and Refunds
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-900 font-semibold">Cancellation by You:</strong> If you wish to cancel your booking, you must notify us in writing. The following cancellation charges will apply, calculated from the date we receive your written notification:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                90 days or more before departure: Loss of the non-refundable booking deposit.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                60-89 days before departure: 25% of the total tour cost.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                30-59 days before departure: 50% of the total tour cost.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                Less than 30 days before departure: 100% of the total tour cost (no refund).
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                No Show: 100% of the total tour cost (no refund).
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-900 font-semibold">Visa and Flight Tickets:</strong> Please note that visa fees and the cost of flight tickets are non-refundable once booked.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong className="text-gray-900 font-semibold">Cancellation by Us:</strong> In the unlikely event that we have to cancel your tour, we will offer you the choice of an alternative tour of a similar standard, or a full refund of all monies paid. We will not be liable for any other expenses you have incurred.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900 font-semibold">Refunds:</strong> All refunds will be processed within 15-30 working days and will be returned to the original mode of payment.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              4. Itinerary Changes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or alter your itinerary due to unforeseen circumstances such as weather conditions, flight delays, or other operational reasons. We will make every effort to provide a suitable alternative of a similar standard. Any additional costs incurred due to such changes will be your responsibility.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              5. Your Responsibilities
            </h3>
            <ul className="space-y-4">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Passport and Visa:</strong> You are responsible for ensuring that you have a valid passport with a minimum of 6 months' validity from your return date. You are also responsible for obtaining all necessary visas for the countries you are visiting.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Travel Insurance:</strong> We strongly recommend that you purchase comprehensive travel insurance to cover any unforeseen events such as trip cancellation, medical emergencies, or loss of baggage.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Health and Fitness:</strong> You are responsible for ensuring that you are medically and physically fit for your chosen tour.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Conduct:</strong> You are expected to conduct yourself in a manner that does not disrupt the enjoyment of other travelers.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              6. Our Liability
            </h3>
            <ul className="space-y-4">
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Third-Party Suppliers:</strong> We act as an agent for third-party suppliers. While we take utmost care in selecting these suppliers, we are not liable for any act, omission, or default on their part.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Limitation of Liability:</strong> Our liability is limited to the cost of your tour. We are not liable for any indirect or consequential loss or damage.
              </li>
              <li className="relative pl-8 text-gray-600 leading-relaxed">
                <span className="absolute left-2 text-teal-600 font-bold text-xl">•</span>
                <strong className="text-gray-900 font-semibold">Force Majeure:</strong> We are not liable for any failure to perform our obligations due to events beyond our control.
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              7. Jurisdiction
            </h3>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Goa.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 pb-2 border-b-2 border-yellow-400">
              8. Contact Us
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
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