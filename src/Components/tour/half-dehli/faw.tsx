import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
const faqs = [
  {
    question: "Can I start at any time?",
    answer:
      "Yes, you can choose a start time between 8 AM and 4 PM. We’ll adjust the route to ensure you get the most sightseeing within your preferred window.",
  },
  {
    question: "Is this a private or shared tour?",
    answer:
      "This tour is always private—just for you or your group. Enjoy flexibility, comfort, and personal attention from your guide throughout.",
  },
  {
    question: "Are the guides available in different languages?",
    answer:
      "Yes. Guides are available in English, Hindi, German, Spanish, French, Russian, and Italian. Select your preferred language when booking for a better experience.",
  },
  {
    question: "Can I request specific stops or customize my tour?",
    answer:
      "Absolutely! Tell us what interests you most at the time of booking. We’ll tailor the tour to highlight those places and experiences.",
  },
  {
    question: "Is transport included both ways?",
    answer:
      "Yes. Pickup and drop-off from your hotel or the airport are included, with a private AC car for the entire journey. No shared transfers—your travel is door-to-door.",
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
