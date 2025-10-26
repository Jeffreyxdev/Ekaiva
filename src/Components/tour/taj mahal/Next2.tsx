import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: '001',
      question: 'Commercial Flight Tickets (Both Sides)',
      answer: 'Enjoy round-trip flights from Bangalore to Delhi/Agra, coordinated for swift, efficient connections that maximize your sightseeing hours.',
      image: 'https://plus.unsplash.com/premium_photo-1661902184762-49c2c8ebb787?w=800&h=500&fit=crop'
    },
    {
      id: '002',
      question: 'All Transfers & Sightseeing by Private AC Vehicle',
      answer: 'Relax in a comfortable, air-conditioned car throughout Agra—prompt pickups, luxury service, and no wasted time.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop'
    },
    {
      id: '003',
      question: 'Professional Private Tour Guide',
      answer: 'Unlock history with a knowledgeable, friendly guide from airport arrival to departure. Personalize your experience, ask questions, and never miss a story',
      image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&h=500&fit=crop'
    },
    {
      id: '004',
      question: 'All Monument Entrance Fees',
      answer: 'Skip the ticket lines and walk straight in—Taj Mahal and Agra Fort entries are included in your package price.',
      image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&h=500&fit=crop'
    },
    {
      id: '005',
      question: 'Live Demonstrations (on request)',
      answer: 'Experience Agra’s famed heritage crafts with private demos—marble inlay, rug weaving, or exquisite hand embroidery, tailored to your interests',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop'
    }, {
      id: '006',
      question: 'Pickup from Any Location in Bangalore',
      answer: 'We’ll pick you up wherever suits you in Bangalore—hotel, home, or anywhere central, for total convenience.',
      image: 'https://plus.unsplash.com/premium_photo-1679865372673-8d1655a73b50?w=800&h=500&fit=crop'
    }, {
      id: '007',
      question: 'All Taxes Included',
      answer: 'One price. No surprises. All government or service charges already covered Not Included: Lunch/dinner, drinks, and optional gratuities for guides or drivers.',
      image: 'https://plus.unsplash.com/premium_photo-1718146019714-a7a0ab9e8e8d?w=800&h=500&fit=crop'
    },
    
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" py-16 px-3 sm:px-10 lg:px-2 items-center">
      <div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-22 ">
  <div className="flex flex-wrap justify-between items-start lg:mb-10 sm:mb-3">
    {/* Left Side */}
    <div>
      <button className="px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-2">
        03. Tours
      </button>
      <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight ">
       Inclusion/Exclusion Dropdowns
 <br /> 
      </h2>
    </div>
</div>
<div>

   <div className="flex flex-col items-start gap-3 lg:mt-4 sm:mt-0 max-w-md">
      
  {/* Right side — Paragraph */}
  <p className="text-gray-600 text-md lg:text-lg max-w-xl leading-relaxed sm:md-0 lg:mt-6">
   Enjoy year-round savings and unmatched travel flexibility through Ekaiva.Get exclusive rates not offered by other platforms, with genuine price transparency and secure payment.
  </p>
</div>
</div>

  </div>
</div>


        {/* FAQ Items */}
        <div className="space-y-[0px] rounded-xl mx-auto  w-[85%]">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="  border border-gray-200 overflow-hidden transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-sm font-mono text-gray-400 flex-shrink-0">({faq.id})</span>
                  <h3 className="text-[13px] lg:text-xl font-medium text-gray-900">{faq.question}</h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-col lg:flex-row items-start gap-5">
                    {/* Image */}
                    {faq.image && (
                      <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
                        <img
                          src={faq.image}
                          alt={faq.question}
                          className="w-full h-46 sm:h-64 lg:h-50 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {/* Text */}
                    <div className="flex-1 mt-4 lg:mt-0 ">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default FAQSection;
