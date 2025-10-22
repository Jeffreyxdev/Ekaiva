const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div
          className=" text-left sm:text-center lg:text-left"
          id="gallery"
        >
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-8">
            02. Customer Gallery
          </button>

          <h2 className="text-5xl font-light  mb-7">
            Memorable Journeys <br /> Captured
          </h2>

          {/* Paragraph aligned to the right on large screens */}
          <p className="text-gray-600 max-w-2xl mx-auto lg:ml-auto lg:mr-0 mb-16 leading-relaxed">
            Take a peek at real photos from Ekaiva travelers  smiling families,
            happy solo guests, and exotic locations all enjoyed at budget
            prices. Our gallery highlights authentic Indian experiences, MICE
            events, and international tours made memorable by value and care.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Eiffel Tower in Paris"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-light mb-3">European Jewel</h3>

                <p className="text-gray-600 text-sm mb-4">
                  13 Days · 8 Locations · Food Included · Airport Pickup/Drop ·
                  Accommodation{" "}
                  <button className="text-gray-900 underline hover:no-underline">
                    more
                  </button>
                </p>

                <button className="bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm hover:bg-gray-800 transition-colors">
                  Know more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
