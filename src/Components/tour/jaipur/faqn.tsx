import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQr() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      
      question: 'Is the itinerary flexible?',
      answer: 'Absolutely — adjust stops and timing to fit your preferences.Our team ensures a seamless experience.',
      
    },
    {
      
      question: 'Are all transfer and guide services included?',
      answer: 'Yes — private car, driver, and tour guides at each location are provided.No hidden transportation costs.',
      
    },
    {
      
      question: 'Do I need to pay extra at monuments?',
      answer: 'Monument entrance fees are excluded; we assist with ticketing.Save time with pre-booked entries.',
      
    },
    {
     
      question: 'Can special requirements be accommodated?',
      answer: 'Yes — we welcome requests for dietary, accessibility, or activity preferences.Let us know when booking.',
      
    },
    {
     
      question: 'What languages do guides speak?',
      answer: 'English is standard; other major languages available upon request.Perfect support for international travelers',
     
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
                src="https://images.unsplash.com/photo-1598614824348-02adf90cf6b7?auto=compress&cs=tinysrgb&w=1200"
                alt="Mountain lake landscape"
                className="w-full h-[680px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQr;
