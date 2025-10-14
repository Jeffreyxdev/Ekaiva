import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How many people can fit in one house?',
      answer: 'A standard house can comfortably accommodate 2 people. There are houses with an additional bed for a child or another adult.'
    },
    {
      question: 'Is there a shower or a toilet?',
      answer: 'Yes, each house comes with a private bathroom including a modern shower, toilet, and sink. All bathrooms are equipped with eco-friendly amenities and hot water.'
    },
    {
      question: 'Are pets Allowed?',
      answer: 'We welcome well-behaved pets in select accommodations. There is an additional fee of $50 per pet per night. Please inform us in advance so we can arrange a pet-friendly house for you.'
    },
    {
      question: 'Is there a shower or a toilet?',
      answer: 'All our houses include modern bathroom facilities with showers, toilets, and premium toiletries. We maintain high standards of cleanliness and comfort.'
    },
    {
      question: 'Whats included in this price?',
      answer: 'The price includes accommodation, daily breakfast, access to all resort facilities, WiFi, parking, and basic amenities. Additional services like guided tours, spa treatments, and special dining experiences can be arranged separately.'
    },
    {
      question: 'Whats included in this price?',
      answer: 'Your booking includes the house rental, linens, towels, kitchen essentials, WiFi, parking, and 24/7 concierge service. Meals and activities can be added to your package.'
    },
    {
      question: 'Can I come for 1night?',
      answer: 'Yes, we accept one-night bookings based on availability. However, we recommend staying at least 2-3 nights to fully experience the natural beauty and tranquility of our location. Weekend bookings may require a minimum 2-night stay.'
    }
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
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mountain lake landscape"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
