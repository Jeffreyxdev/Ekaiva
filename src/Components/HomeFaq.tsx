import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: '001',
      question: 'Airport/Hotel pick-up and Drop',
      answer: 'Step into history and culture as you travel from the bustling heart of Delhi to the timeless beauty of Agra. Whether you\'re seeking a romantic escape, a cultural adventure, or a family outing, our comfortable and reliable airport/hotel pick-up and drop service ensures a seamless journey. Our professional drivers will greet you at your location and transport you safely to your destination in a private air-conditioned vehicle.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop'
    },
    {
      id: '002',
      question: 'Private Air-Conditioned Car with Driver',
      answer: 'Experience the ultimate comfort with our premium private air-conditioned vehicles. Our experienced and courteous drivers are well-versed with all routes between Delhi and Agra, ensuring a smooth and pleasant journey. The vehicles are regularly maintained and sanitized for your safety and comfort. Enjoy complimentary WiFi, bottled water, and the flexibility to stop at points of interest along the way.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop'
    },
    {
      id: '003',
      question: 'Monuments Entrance Tickets to all places',
      answer: 'Your tour package includes entrance tickets to all major monuments and attractions. Visit the iconic Taj Mahal, explore the magnificent Agra Fort, discover the beautiful Itmad-ud-Daulah (Baby Taj), and experience other historical sites. We handle all ticketing arrangements in advance, so you can skip the queues and make the most of your time exploring these UNESCO World Heritage Sites.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=500&fit=crop'
    },
    {
      id: '004',
      question: 'Rickshaw Ride in Old Delhi',
      answer: 'Immerse yourself in the vibrant chaos and charm of Old Delhi with an authentic rickshaw ride through its narrow lanes. Navigate through the bustling bazaars of Chandni Chowk, witness the everyday life of locals, smell the aromatic spices, and experience the rich cultural heritage. This traditional mode of transport offers a unique perspective of Delhi\'s historic heart that you won\'t get from a car.',
      image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=800&h=500&fit=crop'
    },
    {
      id: '005',
      question: 'Live Tour Guide Service',
      answer: 'Enhance your journey with our expert live tour guides who bring history to life. Our knowledgeable guides are certified by the Government of India and speak multiple languages. They provide fascinating insights into the Mughal architecture, historical significance, and captivating stories behind each monument. Ask questions, learn about local customs, and get recommendations for authentic experiences and dining options.',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop'
    },
    {
      id: '006',
      question: '1-Night Hotel Accommodation with Breakfast',
      answer: 'Rest and rejuvenate in comfortable hotel accommodations in Agra. Your package includes one night stay in a carefully selected 3-star or 4-star hotel with modern amenities. Wake up to a delicious complimentary breakfast featuring both Indian and continental options. Hotels are centrally located, providing easy access to major attractions. Rooms feature air-conditioning, comfortable bedding, WiFi, and attached bathrooms.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop'
    },
    {
      id: '007',
      question: 'Mineral Water Bottles',
      answer: 'Stay hydrated throughout your journey with complimentary mineral water bottles provided in the vehicle. We ensure you have access to safe drinking water at all times during your tour. Additional bottles are available upon request. Your health and comfort are our top priorities, especially during the warmer months when staying hydrated is essential.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=500&fit=crop'
    },
     {
    id: '008',
    question: 'All applicable taxes/charges',
    answer: 'All government taxes, tolls, and service charges are included in your package price no hidden costs or extra fees.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop'
  },
  ];

const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? -1 : index);
};


  return (
    <div className="min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
  {/* Left side - title section */}
  <div className="text-center lg:text-left flex-1">
    <div className="inline-block px-5 py-2 bg-white rounded-full shadow-sm mb-4">
      <span className="text-sm font-medium text-gray-600">04. FAQ</span>
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
      Inclusion / Exclusion<br className="hidden lg:block" /> based on Graphic
    </h1>
  </div>

  {/* Right side - paragraph */}
  <div className="flex-1">
    <p className="text-gray-600 max-w-xl mt-10 mx-auto lg:mx-0 text-base lg:text-lg leading-relaxed">
      Step into history and culture as you travel from the bustling heart of Delhi to the timeless beauty of Agra. 
      Whether you're seeking a romantic escape, a cultural adventure, or a family outing.
    </p>
  </div>
</div>


        {/* FAQ Items */}
        <div className="space-y-6 lg:space-y-8">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-sm font-mono text-gray-400 flex-shrink-0">({faq.id})</span>
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900">{faq.question}</h3>
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
                      className="w-140 h-46 sm:h-64 lg:h-50 object-cover items-center rounded-lg"
                    />
                  </div>
                )}

                {/* Text */}
                <div className="flex-1 mt-4 lg:mt-0">
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

        {/* Additional Info */}
        
      </div>
    </div>
  );
};

export default FAQSection;
