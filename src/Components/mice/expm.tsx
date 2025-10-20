function Expm() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-12">
          05. About
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div>
            <h1 className="text-5xl font-light leading-tight lg:mb-8">
             Robust Features for Powerful Events<br />
             
            </h1>
          </div>
          <div>
            <p className="text-gray-600 lg:mt-5 leading-relaxed">
             Discover the Ekaiva advantage—every meeting, seminar, and conference is backed by solutions that ensure precision, comfort, and successful collaboration. From state-of-the-art venues and seamless tech to comprehensive logistics, detailed budgeting,

            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <span className="w-12 h-px bg-gray-300"></span>
              
            </div>
            <h2 className="text-4xl font-light mb-6">
              Venue Selection<br />
             
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
             We find venues that match your objectives, ensuring each space is accessible, well-equipped, and welcoming. You get optimal capacity, ambiance, and location—making every attendee feel valued and engaged.

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
           <div className="relative order-1 lg:order-2">
            <img
              src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Scenic bay with boats and mountains"
              className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
            />
          </div>
          <div>
            <div className="order-2 lg:order-1">
            <div className="text-sm text-gray-500 mb-4              flex items-center gap-2">
              <span className="w-12 h-px bg-gray-300"></span>
              
            </div>
            <h2 className="text-4xl font-light mb-6">
             Budget Planning<br />
             
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Smart budgeting gives you clarity and confidence. We itemize costs for venue, catering, transport, and more, sharing options and savings strategies so your resources go further without compromise.
            </p>
           
          </div>
         </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              
              <span className="w-12 h-px bg-gray-300"></span>
              
            </div>
            <h2 className="text-4xl font-light mb-6">
              Technology Integration<br />
             
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
            Upgrade your event with cutting-edge tech. From interactive apps and virtual networking to advanced AV and digital check-ins, we boost engagement for in-person and remote delegates alike.
            </p>
           
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Scenic bay with boats and mountains"
              className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-2">
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
          
          <div className="order-1 lg:order-1">
            <div className="text-sm text-gray-500 mb-4 flex items-center justify-end gap-2">
           
              <span className="w-12 h-px bg-gray-300"></span>
            </div>
            <h2 className="text-4xl font-light mb-6 text-right">
            Logistics & Transportation<br />
              
            </h2>
            <p className="text-gray-600 leading-relaxed text-right">
             Ekaiva handles all movement for your guests and staff—professional transport, easy coordination, and flexible schedules. We smooth every transition so your agenda flows, stress-free.

            </p>
          </div>
          </div>
          
      </div>
    </div>
  );
}

export default Expm;
