import { Star } from 'lucide-react';

const Gallery = () => {
  const faqData = [
    {
      id: '001',
      question: 'Airport/Hotel pick-up and Drop',
      answer: 'Ekaiva organized our trip perfectly. Every day was filled with surprises, and the price was truly unbeatable. We felt supported and welcomed the whole time.',
      author: 'Priya M',
      location: 'Local Specialist',
      image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '002',
      question: 'Private Air-Conditioned Car with Driver',
      answer: 'I compared lots of sites, but Ekaiva’s deal was the best. The local guide made history come alive, and booking was so easy. Will use Ekaiva again!',
      author: 'John L.',
      location: 'Booking Specialist',
      image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '003',
      question: 'Monuments Entrance Tickets to all places',
      answer: 'Visiting from overseas, Ekaiva’s team made our family feel special. The itinerary fit our needs perfectly, and the hotel was both safe and affordable.',
      author: 'Ashok S.',
      location: 'Professional Supervisor',
      image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '004',
      question: 'Rickshaw Ride in Old Delhi',
      answer: 'I highly recommend Floris. It has been so important for us as we continue to grow our company.',
      author: 'James Krogerman',
      location: 'Local Specialist',
      image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '005',
      question: 'Live Tour Guide Service',
      answer: 'Our Mumbai team event was a hit thanks to Ekaiva. Hotel, workshop space, and sightseeing blended smoothly—all at a price the boss loved.',
      author: 'Sarah B.',
      location: 'Booking Specialist',
      image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '006',
      question: '1-Night Hotel Accommodation with Breakfast',
      answer: 'If you are a small business owner and you don\'t have Floris in your closet yet, I highly recommend that you check it out.',
      author: 'Mark Hallen',
      location: 'Professional Supervisor',
      image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-24 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          {/* Left side - title & button */}
          <div>
            <button className="px-4 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition mb-4">
              02. Customer Gallery
            </button>
            <h1 className="text-4xl sm:text-5xl font-light leading-tight">
              Journey through the moments <br className="hidden sm:block" />
              captured in our gallery
            </h1>
          </div>

          {/* Right side - paragraph */}
          <div className="flex items-center lg:justify-end">
            <p className="text-gray-600 leading-relaxed max-w-md lg:text-right  lg:mt-8">
              We’ve blended boutique comfort with nature’s calm—panoramic views, private stays,
              and care that helps you breathe deeper. Each photo captures the heart of Ekaiva’s
              travel experience.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64">
                <img
                  src={faq.image}
                  alt={faq.question}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                  ))}
                </div>

                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  {faq.answer}
                </p>

                <div className="border-t border-gray-200 pt-3">
                  <p className="font-medium text-gray-900 text-sm">{faq.author}</p>
                  <p className="text-gray-500 text-xs mt-1">{faq.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
