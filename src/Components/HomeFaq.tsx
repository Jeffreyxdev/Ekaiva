'use client';

import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: '001',
      question: 'Lowest Cost, Every Time',
      answer:
        'Enjoy price transparency on every package—no hidden charges or lastminute surprises. Ekaiva India negotiates directly for exclusive rates you won’t find elsewhere.Your travel budget goes further, giving you more value every time you book.',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop',
    },
    {
      id: '002',
      question: 'Custom Trips',
      answer:
        'Design your ideal journey with trips built around your interests, pace, and needs.Choose from flexible itineraries and special activity add-ons for any travel style.Every aspect is tailored so your vacation feels truly your own.',
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop',
    },
    {
      id: '003',
      question: 'Authentic Experiences',
      answer:
        'Discover handpicked stays, local guides, and immersive cultural moments everywhere you go.Ekaiva India connects you to the heart of each destination beyond the typical tourist path.',
      image:
        'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=500&fit=crop',
    },
    {
      id: '004',
      question: 'Fast, Easy Booking',
      answer:
        'Book in just a few clicks with instant confirmations for tours, hotels, and transfers.Our user-friendly platform and responsive customer support team simplify every step.Plan spontaneously or ahead—either way,booking with Ekaiva India is always smooth.',
      image:
        'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&h=500&fit=crop',
    },
    {
      id: '005',
      question: 'Trusted By Many',
      answer:
        'Benefit from 24/7 assistance, expert recommendations, and reliable partners for every trip detail.Ekaiva India manages all the logistics, so you enjoy a seamless, stress free adventure.We’re committed to your comfort,safety, and satisfaction at every journey stage.',
      image:
        'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 px-3 sm:px-10 lg:px-2">
      <div className="max-w-7xl mx-auto">
        {/* ---------- Header ---------- */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-22">
          <div className="flex flex-wrap justify-between items-start lg:mb-10 sm:mb-3">
            <div>
              <button className="px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-2">
                03. Tours
              </button>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                Why book <br /> with Ekaiva?
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 lg:mt-5 sm:mt-0 max-w-md">
            <p className="text-gray-600 text-md lg:text-lg max-w-xl leading-relaxed sm:md-0 lg:mt-3">
              Enjoy year-round savings and unmatched travel flexibility through
              Ekaiva. Get exclusive rates not offered by other platforms, with
              genuine price transparency and secure payment.
            </p>
          </div>
        </div>

        {/* ---------- FAQ Items ---------- */}
        <div className="mt-12 space-y-4">
          {faqData.map((faq, idx) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              {/* ---- Header (always visible) ---- */}
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${faq.id}`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-sm font-mono text-gray-400 flex-shrink-0">
                    ({faq.id})
                  </span>
                  <h3 className="text-[13px] lg:text-xl font-medium text-gray-900">
                    {faq.question}
                  </h3>
                </div>

                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* ---- Panel (grid-based height) ---- */}
              <div
                id={`faq-panel-${faq.id}`}
                className={`
                  grid transition-[grid-template-rows] duration-500 ease-in-out
                  ${openIndex === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2">
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                      {/* Image */}
                      {faq.image && (
                        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                          <img
                            src={faq.image}
                            alt={faq.question}
                            className="w-full h-46 sm:h-64 lg:h-50 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      {/* Text */}
                      <div className="flex-1 mt-4 lg:mt-0">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;