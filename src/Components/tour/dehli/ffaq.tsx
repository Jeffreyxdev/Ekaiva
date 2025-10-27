import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: '001',
      question: 'Airport/Hotel Pick-up and Drop',
      answer: 'Start and end your trip with hassle-free transfers from your chosen location in Delhi. Travel in comfortable, air-conditioned vehicles with a professional driver—timely and tailored for your schedule.',
      image: 'https://plus.unsplash.com/premium_photo-1661902184762-49c2c8ebb787?w=800&h=500&fit=crop'
    },
    {
      id: '002',
      question: 'Private Air-Conditioned Car with Driver',
      answer: 'Relax in your own vehicle for all sightseeing and transfers. No crowded buses or waiting: enjoy full privacy and flexibility with an experienced local driver.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop'
    },
    {
      id: '003',
      question: 'Monument Entrance Tickets',
      answer: 'All major site entry tickets in Delhi and Agra are included. Skip the lines and head straight in—see more while waiting less, all at no extra cost.',
      image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&h=500&fit=crop'
    },
    {
      id: '004',
      question: 'Rickshaw Ride in Old Delhi',
      answer: 'Enjoy a charming rickshaw ride through Chandni Chowk. Soak in the color, history, and incredible bustle of Old Delhi’s legendary market streets.',
      image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&h=500&fit=crop'
    },
    {
      id: '005',
      question: 'Live Tour Guide Service',
      answer: 'Benefit from guided insight at every stop—learn hidden stories, get answers, and make each monument more meaningful with Ekaiva’s expert guides.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop'
    }, {
      id: '006',
      question: '1-Night Hotel with Breakfast',
      answer: 'We’ll pick you up wherever suits you in Bangalore—hotel, home, or anywhere central, for total convenience.',
      image: 'https://plus.unsplash.com/premium_photo-1679865372673-8d1655a73b50?w=800&h=500&fit=crop'
    }, {
      id: '007',
      question: 'Mineral Water Bottles',
      answer: 'Complimentary mineral water for your comfort on the road—stay hydrated during sightseeing and transfers',
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
