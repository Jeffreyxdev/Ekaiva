import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
  {
    id: '001',
    question: 'Multilingual Communication',
    answer:
      'Travel without barriers—guides fluent in English, Hindi, and local languages bridge the gap for guests from anywhere in the world.',
    image:
      'https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=800&h=500&fit=crop', // Indian tour guide with travelers
  },
  {
    id: '002',
    question: 'In-Depth Local Insights',
    answer:
      'Enjoy historical stories, hidden gems, and cultural nuances unique to each region, so you discover destinations from a native perspective.',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=500&fit=crop', // Indian temple and heritage site
  },
  {
    id: '003',
    question: 'Priority Access at Attractions',
    answer:
      'Skip lines and enjoy special access at featured monuments or events, thanks to our strong local partnerships.',
    image:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80', // Taj Mahal / monument entrance
  },
  {
    id: '004',
    question: 'Personal Safety & On-the-Go Support',
    answer:
      'Guides are trained in basic first aid, local laws, and emergency response—your wellbeing is always their first priority.',
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=500&fit=crop', // Indian guide assisting tourists
  },
  {
    id: '005',
    question: 'Flexible Customization',
    answer:
      'Adapt your sightseeing, add stops, or switch plans—our guides tailor your journey to match comfort and interests.',
    image:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80', // Scenic India road trip / flexibility theme
  },
  {
    id: '006',
    question: 'Trip Planning & Coordination',
    answer:
      'Enjoy stress-free travel as guides handle timing, tickets, group coordination, and logistics, ensuring smooth transitions and no missed highlights.',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80', // Indian group travel / coordination visual
  },
];

    
  

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" py-16 px-3 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* Header Section */}
<div className="mb-12 md:mb-20">
  {/* FAQ Header Section */}<button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 text-sm font-medium tracking-wide transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-sm mb-6">
    06.WHY OUR GUIDE?
  </button>
<div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 mb-12">
  
  {/* Left side — Button + Title inline */}
 <div className="flex items-center gap-4 flex-shrink-0">
  

  <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
    Why Our Guides <br /> Stand Out
    <br />
  </h1>
</div>


  {/* Right side — Paragraph */}
  <p className="text-gray-600 text-md lg:text-lg max-w-xl leading-relaxed">
   Ekaiva guides deliver more than directions they bring expertise, safety, and cultural connection to every moment. Combining professional training with true local passion, our guides unlock authentic experiences and provide the care that travelers need for a seamless, memorable adventure.
  </p>
</div>

  </div>
</div>


        {/* FAQ Items */}
        <div className="space-y-[0px] rounded-xl">
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
