import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      
      question: 'Can I customize parts of the itinerary?',
      answer: 'Yes, we offer flexibility to adjust sites and days.Contact us to personalize your European adventure.',
      
    },
    {
      
      question: 'Are all entrance fees included in the tour price?',
      answer: 'Most monument admissions are covered; optional extras may cost extra. We clearly list all included and excluded tickets.',
      
    },
    {
      
      question: 'What type of accommodation is provided?',
      answer: 'Hotels range from 3-4 stars, carefully selected for comfort and location.Room upgrades and preferences can be requested.',
      
    },
    {
     
      question: 'Are meals included?',
      answer: 'Daily continental breakfasts and select dinners are included. Other meals are at your discretion.',
      
    },
    {
     
      question: 'Is travel insurance included?',
      answer: 'No, travelers should arrange their own insurance.We can recommend trusted providers.',
     
    },
     {
     
      question: 'How are airport transfers managed?',
      answer: 'Transfers at beginning and end of tour are included.On-tour transport is via private coach',
     
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
                src="https://images.unsplash.com/photo-1650118146076-5e584e3ee165?auto=compress&cs=tinysrgb&w=1200"
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
