import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import dv from "../../assets/dv.png";
function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      
      question: 'What makes Ekaiva different from other agencies?',
      answer: 'Our journeys are custom-built for you, with honest pricing, and delivered by a real team you can trust.',
      
    },
    {
      
      question: 'Will I get local support during my trip?',
      answer: 'Yes—our team and partners are available 24/7 for help, advice, or anything unexpected that arises.',
      
    },
    {
      
      question: 'Does Ekaiva handle both leisure and business travel?',
      answer: 'Absolutely—whether for families, groups, solo explorers, or corporate incentives, we tailor to your needs.',
      
    },
    {
     
      question: 'Can I request special experiences or adjust my trip mid-journey?',
      answer: 'Flexibility is core to Ekaiva—we happily adjust plans to match changing dreams or new discoveries on the road.',
      
    },
    {
     
      question: 'How do you ensure my safety and satisfaction?',
      answer: 'Every partner is reviewed for quality and reliability, and our satisfaction guarantee means we’re committed to your happiness throughout the journey.',
     
    },
     {
     
      question: 'How can I give feedback or suggestions?',
      answer: 'We love hearing from travelers—reach us anytime for feedback, recommendations, or to plan your next adventure.',
     
    }
    
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen  bg-white">
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
                  className="border-b border-gray-200 "
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mt-0 lg:mt-10">
              <img
                src={dv}
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
