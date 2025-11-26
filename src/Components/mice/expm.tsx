import micem from "../../assets/micw.png";

function Expm() {
  const sections = [
    {
      title: "Venue Selection",
      text: "We find venues that match your objectives, ensuring each space is accessible, well-equipped, and welcoming. You get optimal capacity, ambiance, and location—making every attendee feel valued and engaged.",
      img: micem,
    },
    {
      title: "Budget Planning",
      text: "Smart budgeting gives you clarity and confidence. We itemize costs for venue, catering, transport, and more, sharing options and savings strategies so your resources go further without compromise.",
      img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Technology Integration",
      text: "Upgrade your event with cutting-edge tech. From interactive apps and virtual networking to advanced AV and digital check-ins, we boost engagement for in-person and remote delegates alike.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Logistics & Transportation",
      text: "Ekaiva handles all movement for your guests and staff—professional transport, easy coordination, and flexible schedules. We smooth every transition so your agenda flows, stress-free.",
      img: "https://images.unsplash.com/photo-1758599670006-d7fe945b5966?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors mb-12">
          05. About
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h1 className="text-5xl font-light leading-tight mb-8">
              Robust Features for Powerful Events
            </h1>
          </div>
          <div>
            <p className="text-gray-600 lg:mt-5 leading-relaxed">
              Discover the Ekaiva advantage—every meeting, seminar, and
              conference is backed by solutions that ensure precision, comfort,
              and successful collaboration. From state-of-the-art venues and
              seamless tech to comprehensive logistics and detailed budgeting.
            </p>
          </div>
        </div>

        {/* Dynamic alternating sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text block */}
            <div
              className={`${
                index % 2 === 1
                  ? "order-1 lg:order-2 text-left lg:text-right"
                  : "order-1 text-left"
              }`}
            >
              <div
                className={`text-sm text-gray-500 mb-4 flex items-center ${
                  index % 2 === 1 ? "justify-end gap-2" : "gap-2"
                }`}
              >
                {index % 2 === 1 ? (
                  <span className="w-12 h-px bg-gray-300"></span>
                ) : (
                  <>
                    <span className="w-12 h-px bg-gray-300"></span>
                  </>
                )}
              </div>

              <h2
                className={`text-4xl font-light mb-6 ${
                  index % 2 === 1 ? "text-right" : ""
                }`}
              >
                {section.title}
              </h2>

              <p
                className={`text-gray-600 leading-relaxed ${
                  index % 2 === 1 ? "text-right" : ""
                }`}
              >
                {section.text}
              </p>
            </div>

            {/* Image block */}
            <div
              className={`relative ${
                index % 2 === 1
                  ? "order-2 lg:order-1"
                  : "order-2 lg:order-2"
              }`}
            >
              <img
                src={section.img}
                alt={section.title}
                className="rounded-3xl w-full h-[500px] object-cover shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expm;
