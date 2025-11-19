import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
  {
    question: "What time does the tour start?",
    answer: "Early pickup between 3:30 AM and 4:00 AM ensures you reach the Taj Mahal at sunrise.",
  },
  {
    question: "Is this suitable for families and seniors?",
    answer: "Yes, this private tour can be customized for groups of all ages with comfortable pace and support.",
  },
  {
    question: "Are tickets and guide services included?",
    answer: "All monument entrance fees and qualified guide services are included for a seamless experience.",
  },
  {
    question: "Can I adjust pickup location?",
    answer: "Pickup can be arranged from any central Delhi or NCR location. Just inform us in advance.",
  },
  {
    question: "What happens if it rains?",
    answer: "Tours proceed rain or shine, but alternative indoor locations or rescheduling options are offered for your comfort.",
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
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
