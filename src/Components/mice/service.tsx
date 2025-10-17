
import { Calendar, Users, Building2, Utensils, Wifi, MapPin } from 'lucide-react';

export default function Service() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Premium Conference Venues",
      description: "State-of-the-art meeting spaces with panoramic views, accommodating teams from 10 to 200 people with cutting-edge audiovisual technology."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Building Experiences",
      description: "Curated activities and workshops designed to strengthen bonds, from outdoor adventures to creative collaborative sessions in nature."
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Gourmet Catering Services",
      description: "Exceptional dining experiences with customizable menus, from working lunches to elegant banquets, all prepared by our expert culinary team."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Event Planning",
      description: "Dedicated event coordinators to manage every detail of your corporate retreat, incentive trip, or conference from start to finish."
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "High-Speed Connectivity",
      description: "Enterprise-grade WiFi and tech infrastructure throughout the property, ensuring seamless virtual meetings and presentations."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Secluded Natural Setting",
      description: "Escape the urban chaos to a tranquil environment where nature meets luxury, providing the perfect backdrop for focused work and relaxation."
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
            Journey through the moments<br />
            captured in our gallery
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We have combined the comforts of boutique hotel and the solitude of nature: separate houses, 
            panoramic views, caring services and an atmosphere where you want to breathe deeper.
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
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">200</div>
            <div className="text-gray-600 font-medium">Max Capacity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Meeting Rooms</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}