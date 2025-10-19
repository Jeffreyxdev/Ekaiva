
import { Building2, Users, Presentation, Lightbulb, Coffee, Handshake } from "lucide-react";

export default function Service() {
  const features = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Boardroom Strategy Sessions",
    description: "Private, soundproof rooms for focused leadership meetings and executive planning."
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    title: "Conference & Seminar Halls",
    description: "Modern facilities, flexible seating, and multi-format AV support for inspirational talks or panel events."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Breakout & Training Workshops",
    description: "Modular rooms for skill development, brainstorming, and collaborative problem-solving."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Networking Lounges & Business Mixers",
    description: "Curated spaces for relaxed conversations, meaningful contacts, and post-session decompression."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Onsite Team-Building",
    description: "Icebreaking activities, business games, and short group challenges designed for synergy and creativity."
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Dedicated Event Support",
    description: "Expert facilitators and event staff ensuring your team can focus fully on connection and achievement."
  }
];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <button className="px-6 py-2 mb-8 border-2 border-gray-300 rounded-full text-gray-700 text-sm font-medium tracking-wide transition-all duration-300 hover:border-gray-400 hover:bg-white">
            03. Customer Gallery
          </button>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
           Focused on Meetings, <br />
           Seminars, and Team Synergy
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            MICE Event Experiences: Designed for Business Excellence
              Choose from a complete lineup of professional event formats, each crafted to foster productivity and engagement.

          </p>
        </div>

        {/* Features Grid */}
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => (
            <div 
            key={index}
            className="group flex flex-col items-center text-center md:items-start md:text-left"
            >
            {/* Icon */}
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gray-900 group-hover:scale-110 group-hover:rotate-3">
                <div className="text-white">
                {feature.icon}
                </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-300">
                {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
                {feature.description}
            </p>
            </div>
        ))}
        </div>


        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row gap-4">


                    

          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-2  gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"></div>
            <div className="text-gray-600 text-center font-medium">Each offering is led by expert facilitators and supported by dedicated event staff, so your team can focus fully on connection and achievement.</div>
          </div>
         
        </div>
      </div>
    </div>
  );
}