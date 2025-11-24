import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

 const faqs = [
  {
    question: "Can I select which temples and shrines to visit?",
    answer:
      "Yes, your tour is fully adaptable—share your interests when booking. We’ll help tailor the day so you visit the spiritual sites that matter most to you.",
  },
  {
    question: "Is this tour suitable for those new to Indian religions?",
    answer:
      "Absolutely. Your personal guide will explain the traditions, customs, and beliefs at each stop, helping you appreciate both the foundations and deeper context.",
  },
  {
    question: "Are there any restrictions on photography or dress?",
    answer:
      "Modest clothing is generally recommended for all religious sites. Photography rules differ from place to place, and your guide will advise at each stop.",
  },
  {
    question: "How long do we spend at each site?",
    answer:
      "Expect approximately 20–45 minutes at major locations. Timing can be adjusted based on your pace, interest level, and comfort.",
  },
  {
    question: "Is food included at Gurudwara or elsewhere?",
    answer:
      "Free snack offerings may be provided as part of Sikh hospitality, but main meals are not included. Let your guide know if you’d like to pause for a lunch break.",
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
                src="https://images.unsplash.com/photo-1649072814953-2ba8a7a8a0d4?auto=compress&cs=tinysrgb&w=1200"
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
