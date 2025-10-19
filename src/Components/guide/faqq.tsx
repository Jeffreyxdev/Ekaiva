import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import micem from "../../assets/sick.png";
function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      
      question: 'How do I know my guide is certified?',
      answer: 'All Ekaiva guides are professionally vetted, insured, and trained for safety and hospitality.',
      
    },
    {
      
      question: 'Can my guide help with translation or shopping?',
      answer: 'Yes! Your guide is both translator and local expert—supporting every kind of interaction.',
      
    },
    {
      
      question: 'What if I need medical or travel help during the tour?',
      answer: 'Guides are trained in basic first aid and have direct numbers to local services for emergencies.',
      
    },
    {
     
      question: 'Are private and group guide options available?',
      answer: 'Our platform lets you choose private guides for family/solo trips or join scheduled group tours.',
      
    },
    {
     
      question: 'Can I customize my tour with special requests?',
      answer: 'Yes, just let us know specific interests—such as architecture, cuisine, or photography—and guides will adapt accordingly.',
     
    },
    {
     
      question: 'Is my guide available for airport pick-up and drop?',
      answer: 'Many packages offer arrival/departure support; check your specific tour or add during booking.',
     
    },
    
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-9">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-8">
              06. FAQ
            </button>

            <h1 className="text-5xl font-light leading-tight mb-12">
             Guide Service Questions,<br />
              Clearly Answered
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
                src={micem}
                alt="Mountain lake landscape"
                className="w-full h-[720px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
