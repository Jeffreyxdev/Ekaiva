import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      
      question: 'How can I book a cheap India tour package with Ekaiva?',
      answer: 'Start by searching your preferred destination and travel dates on our easy site. Compare deals—every option comes with guaranteed savings versus the major travel portals.Booking is hassle-free, and confirmation arrives instantly for all hotels and tours, so you can plan with confidence.',
      
    },
    {
      
      question: 'Can customers customize their trips?',
      answer: 'Absolutely! Ekaiva specializes in tailoring trips around your preferences. From handpicking destinations and hotels to adding unique local experiences, your journey can be fully personalized. Just let us know your interests and we’ll create the ideal itinerary.',
      
    },
    {
      
      question: 'What makes Ekaiva more affordable than other sites?',
      answer: 'Ekaiva negotiates exclusive rates, offers transparent pricing, and never adds hidden fees. Our smart search engine finds deals others miss, saving you more on every trip.Promotions, bulk discounts, and loyalty offers stack up to maximize value for all guests.',
      
    },
    {
     
      question: 'What support does Ekaiva offer during the trip?',
      answer: 'Ekaiva provides round-the-clock assistance for travelers, ensuring peace of mind from start to end.Our team handles issues like last-minute changes or special requests swiftly and professionally. You’re never alone—help is always just a call or message away.',
      
    },
    {
     
      question: 'Is Ekaiva safe for solo or elderly travelers?',
      answer: 'Safety is our top priority. Partners are vetted for reliability, cars are monitored, and support is one tap away at all times.Elderly travelers can request greater assistance and wheelchair-friendly hotels, plus our helpline is always open.',
     
    },
    
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-8">
              06. FAQ
            </button>

            <h1 className="text-5xl font-light leading-tight mb-12">
              Doubtful?<br />
              We answer honestly
            </h1>

            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 bg-white"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-base font-normal text-gray-900">
                      {faq.question}
                    </span>
                    {openQuestion === index ? (
                      <X className="w-5 h-5 text-gray-600 flex-shrink-0 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 transition-transform group-hover:translate-y-1" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 pb-6 animate-fadeIn">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=compress&cs=tinysrgb&w=1200"
                alt="Mountain lake landscape"
                className="w-full h-[730px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
