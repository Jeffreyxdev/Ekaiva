import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: '001',
      question: 'How can I book a cheap India tour package with Ekaiva?',
      answer: 'Start by searching your preferred destination and travel dates on our easy site. Compare deals—every option comes with guaranteed savings versus the major travel portals.Booking is hassle-free, and confirmation arrives instantly for all hotels and tours, so you can plan with confidence.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop'
    },
    {
      id: '002',
      question: 'Can NRIs and foreigners customize their trips?',
      answer: 'Yes—Ekaiva’s experts actively work to personalize your journey. From local guides to unique stops, elderly care, and family priorities, every detail can be tailored.You’ll receive 1:1 support and recommendations, so you experience India exactly as you want.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop'
    },
    {
      id: '003',
      question: 'What makes Ekaiva more affordable than other sites?',
      answer: 'Ekaiva negotiates exclusive rates, offers transparent pricing, and never adds hidden fees. Our smart search engine finds deals others miss, saving you more on every trip.Promotions, bulk discounts, and loyalty offers stack up to maximize value for all guests.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=500&fit=crop'
    },
    {
      id: '004',
      question: 'Are group or senior discounts available?',
      answer: 'Absolutely—special rates for families, large friend groups, business travelers, and seniors are available on both tours and accommodation.Simply mention your group details when booking or reach out to customer care for easy savings on tailored travel plans.',
      image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&h=500&fit=crop'
    },
    {
      id: '005',
      question: 'Is Ekaiva safe for solo or elderly travelers?',
      answer: 'Safety is our top priority. Partners are vetted for reliability, cars are monitored, and support is one tap away at all times.Elderly travelers can request greater assistance and wheelchair-friendly hotels, plus our helpline is always open.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop'
    },
    
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen py-16 px-6 sm:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* Header Section */}
<div className="mb-12 md:mb-20">
  {/* FAQ Header Section */}
<div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 mb-12">
  
  {/* Left side — Button + Title inline */}
 <div className="flex items-center gap-4 flex-shrink-0">
  <button className="px-5 py-2 border border-gray-300 rounded-full text-gray-700 text-sm font-medium tracking-wide transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-sm">
    06. FAQ
  </button>

  <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
    Frequently Asked Questions
    <br />
  </h1>
</div>


  {/* Right side — Paragraph */}
  <p className="text-gray-600 text-base lg:text-lg max-w-xl leading-relaxed">
   Get quick answers to the most common concerns from travelers booking with Ekaiva. Each response is designed to be clear, reassuring, and thorough—so visitors know exactly what to expect.
  </p>
</div>

  </div>
</div>


        {/* FAQ Items */}
        <div className="space-y-[0px] rounded-xl">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white  shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-sm font-mono text-gray-400 flex-shrink-0">({faq.id})</span>
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900">{faq.question}</h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
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
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
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
          ))}
        </div>
      </div>
    
  );
};

export default FAQSection;
