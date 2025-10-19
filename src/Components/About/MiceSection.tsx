
import micem from "../../assets/hrr.png";

const MiceSection = () => {
  return (
     <div className="hidden md:block relative h-[90vh] mt-27">
        <img
          src={micem}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFF] via-white/60 to-transparent" />

        {/* Text content */}
        <div className="relative z-10 flex items-center justify-between h-full max-w-6xl mx-auto px-12">
          <div className="max-w-lg">
 

            <h1 className="text-5xl font-bold text-gray-900 leading-tight ">
              Meet Our Team of Travel Architects<br />
              
            </h1>
          </div>

          <div className="max-w-lg">
            <h3 className="text-gray-800 font-semibold "></h3>
            <p className="text-gray-900 leading-relaxed  text-lg">
            Ekaiva’s strength lies in our caring, experienced team—advisors, planners, guides, and support staff—who bring local knowledge and global standards to every project.
              We pride ourselves on open communication, creative planning, and a hands-on approach from first idea to final farewell.
              Our experts believe in collaboration, bringing your vision to life while ensuring smooth execution at every stage.

            </p>
          </div>
          
        </div>
        </div>
  );
};

export default MiceSection;
