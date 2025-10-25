
import micem from "../../assets/hrr.png";

const MiceSection = () => {
  return (
     <div className="hidden md:block relative h-[90vh] ">
        <img
          src={micem}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />


<div className="absolute inset-0 bg-gradient-to-b from-[#DFD7CE]/40 via-transparent to-black/60" />

        {/* Text content */}
       <div className="relative z-10 flex justify-between items-start px-10   pt-10">
  
  <div className="max-w-xl">
    <h1 className="text-5xl font-medium text-white leading-tight">
      Meet Our Team of Travel Architects
    </h1>
  </div>

  {/* Right Side - Paragraph */}
  <div className="max-w-xl text-right">
    <p className="text-white leading-relaxed text-sm">
      Ekaiva’s strength lies in our caring, experienced team advisors, planners,
      guides, and support staff who bring local knowledge and global standards
      to every project. We pride ourselves on open communication, creative
      planning, and a hands on approach from first idea to final farewell.
      Our experts believe in collaboration, bringing your vision to life while
      ensuring smooth execution at every stage.
    </p>
  </div>
</div>

        </div>
  );
};

export default MiceSection;
