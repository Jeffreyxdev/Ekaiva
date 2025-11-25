import { useState } from 'react';

const inq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
  {
    id: '001',
    question: 'Airport / Hotel Pick-Up & Drop-Off',
    answer:
      'Private transfers for your arrival and departure, ensuring comfort and convenience.',
    image:
      'https://images.unsplash.com/photo-1549897411-b06572cdf806?w=800&h=500&fit=crop'
  },
  {
    id: '002',
    question: '5-Night Stay in Premium Hotels',
    answer:
      'Enjoy comfortable stays in hand-picked 3-star properties with daily breakfast included.',
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=500&fit=crop'
  },
  {
    id: '003',
    question: 'Dhow Cruise Dinner – Dubai Marina',
    answer:
      'Sail across the illuminated skyline with a buffet dinner and live onboard entertainment.',
    image:
      'https://images.unsplash.com/photo-1463183547458-6a2c760d0912?w=800&h=500&fit=crop'
  },
  {
    id: '004',
    question: 'Desert Safari with BBQ Dinner',
    answer:
      'Experience thrilling dune bashing, Arabian performances, and a delicious barbecue dinner.',
    image:
      'https://plus.unsplash.com/premium_photo-1664471482655-126b77fb3395?w=800&h=500&fit=crop'
  },
  {
    id: '005',
    question: 'Burj Khalifa Entry – 124th Floor',
    answer:
      'Skip the lines and enjoy breathtaking panoramic views from the world’s tallest tower.',
    image:
      'https://images.unsplash.com/photo-1583759604327-f9dcd23499d5?w=800&h=500&fit=crop'
  },
  {
    id: '006',
    question: 'Half-Day City Tours – Dubai & Abu Dhabi',
    answer:
      'Discover the UAE’s most iconic landmarks with expert-guided sightseeing experiences.',
    image:
      'https://images.unsplash.com/photo-1728970381104-e04eb2094724?w=800&h=500&fit=crop'
  },
  {
    id: '007',
    question: 'Entry Tickets – Ferrari World & Warner Bros Studio',
    answer:
      'Enjoy hours of fun, thrilling rides, shows, and themed worlds at these top attractions.',
    image:
      'https://images.unsplash.com/photo-1578152882785-df9744e359e5?w=800&h=500&fit=crop'
  },
  {
    id: '008',
    question: 'Includes Water, Taxes & Driver Allowances',
    answer:
      'All essential charges and inclusions covered for a seamless and stress-free trip.',
    image:
      'https://images.unsplash.com/photo-1609100846580-54a309a0a43e?w=800&h=500&fit=crop'
  }
];


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" py-16 px-3 sm:px-10 lg:px-2">
      <div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-22 ">
  <div className="flex flex-wrap justify-between items-start lg:mb-10 sm:mb-3">
    {/* Left Side */}
    <div>
      <button className="px-5 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors mb-2">
        03. Tours
      </button>
      <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight ">
       Why book <br /> with Ekaiva?
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
        <div className="sspace-y- max-w-7xl mx-auto rounded-xl">
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

export default inq;
