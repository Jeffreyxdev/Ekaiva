function exp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-12">
          05. About
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h1 className="text-5xl font-light leading-tight mb-8">
              Exceptional Stays for<br />
              Memorable MICE experience
            </h1>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              We have combined the comfort of boutique hotel and the solitude of nature: seperate houses, panoramic views, caring service and an atmosphere where you
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <span className="w-12 h-px bg-gray-300"></span>
              GET STARTED
            </div>
            <h2 className="text-4xl font-light mb-6">
              Picking the right Hiking<br />
              Gear!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The nice thing about beginning hiking is that you don't really need any special gear; you can probably get away with things you already have.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Let's start with clothing. A typical mistake hiking beginners make is wearing jeans or regular clothes, which will get heavy and chafe wif they get sweaty or wet.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Scenic bay with boats and mountains"
              className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Scenic bay with boats and mountains"
              className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm text-gray-500 mb-4 flex items-center justify-end gap-2">
              GET STARTED
              <span className="w-12 h-px bg-gray-300"></span>
            </div>
            <h2 className="text-4xl font-light mb-6 text-right">
              Picking the right Hiking<br />
              Gear!
            </h2>
            <p className="text-gray-600 leading-relaxed text-right">
              The nice thing about beginning hiking is that you don't really need any special gear; you can probably get away with things you already have.
            </p>
          </div>
          </div>
          <div className="mt-32 text-center">
          <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-8">
            02. Customer Gallery
          </button>

          <h2 className="text-5xl font-light mb-6">
            Journey through the moments<br />
            captured in our gallery
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
            We have combined the comfort of boutique hotel and the solitude of nature: seperate houses, panoramic views, caring service and an atmosphere where you want to escape together
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Eiffel Tower in Paris"
                    className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-light mb-3 text-left">European Jewel</h3>
                <p className="text-gray-600 text-sm text-left mb-4">
                  13 Days · 8 Locations · Food Included · Airport Pickup/drop · Accommodation{' '}
                  <button className="text-gray-900 underline hover:no-underline">more</button>
                </p>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                  Know more
                </button>
              </div>
            ))}
          </div>
          </div>
       
      </div>
    </div>
  );
}

export default exp;
