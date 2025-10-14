import { Star } from 'lucide-react';

function Gallery() {
  const testimonials = [
    {
      stars: 5,
      text: "I highly recommend them. It has been so important for us as we continue to grow our company",
      author: "James Krogerman MD",
      location: "Local Specialist"
    },
    {
      stars: 5,
      text: "I have been using Adiras shoes for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
      author: "Tom Francis",
      location: "Booking Specialist"
    },
    {
      stars: 5,
      text: "If you are a small owner and you don't have floris in your closet just yet, I highly recommend that you check it out.",
      author: "Mark Hall",
      location: "Professional Supervisor"
    },
    {
      stars: 5,
      text: "I highly recommend them. It has been so important for us as we continue to grow our company",
      author: "James Krogerman MD",
      location: "Local Specialist"
    },
    {
      stars: 5,
      text: "I have been using Adiras shoes for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
      author: "Tom Francis",
      location: "Booking Specialist"
    },
    {
      stars: 5,
      text: "If you are a business owner, and you don't have floris in your closet just yet, I highly recommend that you check it out.",
      author: "Mark Hall",
      location: "Professional Supervisor"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-6">
            07. Customer Gallery
          </button>

          <h1 className="text-5xl font-light leading-tight mb-6">
            Journey through the moments<br />
            captured in our gallery
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We have combined the comfort of boutique hotel  and the solitude of nature: separate houses,
            panoramic views, caring service and an  atmosphere where you want to breathe deeper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ha Long Bay scenic view"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gray-900 text-gray-900"
                    />
                  ))}
                </div>

                <p className="text-gray-900 text-sm leading-relaxed mb-4">
                  {testimonial.text}
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium text-gray-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
