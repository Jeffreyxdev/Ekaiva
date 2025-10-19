import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import dv from "../../assets/dv.png";
function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      
      question: 'How many attendees can your meeting spaces accommodate?',
      answer: 'Our spaces range from intimate boardrooms for 10 to grand halls for 1000+, ensuring a perfect fit for every seminar, workshop, or conference.',
      
    },
    {
      
      question: 'Is advanced audio-visual equipment available?',
      answer: 'Yes, all venues are equipped with high-speed Wi-Fi, projectors, sound systems, and support for both in-person and virtual/hybrid meetings.',
      
    },
    {
      
      question: 'Can you assist with corporate branding throughout the event?',
      answer: 'Absolutely—our team provides signage, branded materials, and digital displays to ensure your company’s presence shines during every session.',
      
    },
    {
     
      question: 'Are group or senior discounts available?',
      answer: 'Absolutely—special rates for families, large friend groups, business travelers, and seniors are available on both tours and accommodation.Simply mention your group details when booking or reach out to customer care for easy savings on tailored travel plans.',
      
    },
    {
     
      question: 'Are meals and refreshments included in event packages?',
      answer: 'Most packages include a variety of catering options, from tea and coffee breaks to full buffet lunches, all customizable for dietary needs.',
     
    },
     {
     
      question: 'What security measures are in place for events?',
      answer: 'All venues feature professional security staff, controlled access, and health/safety protocols for peace of mind from arrival to departure.',
     
    }, {
     
      question: 'Do you offer team-building or networking activities?',
      answer: 'Yes, we provide a range of curated group activities, icebreakers, and networking setups specifically designed to strengthen professional connections.',
     
    }, {
     
      question: 'How flexible is booking and cancellation?',
      answer: 'Enjoy straightforward booking with transparent terms—modifications and cancellations are handled promptly, subject to venue availability and policy.',
     
    },
    
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
