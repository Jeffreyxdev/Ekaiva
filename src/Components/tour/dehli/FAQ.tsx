import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      
      question: 'Can the tour be customized for extra stops or pickups?',
      answer: 'Yes—let us know your preference, and we’ll suggest ways to include additional sights.',
      
    },
    {
      
      question: 'Are all monument fees and taxes included in the price?',
      answer: 'Absolutely—all listed entrance fees and taxes are fully covered so you don’t have to worry.',
      
    },
    {
      
      question: 'What types of hotels are available?',
      answer: 'Choose from 3-star, 4-star, or 5-star options—all are vetted for comfort, location, and guest reviews.',
      
    },
    {
     
      question: 'Is this tour suitable for seniors or children?',
      answer: 'Yes, routes and pace are family- and senior-friendly, with adjustments on request for any accessibility needs.',
      
    },
    {
     
      question: 'What if I need to change my return location?',
      answer: 'No problem—final drop can be hotel, airport, or another agreed spot in Delhi.',
     
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

export default FAQ;
