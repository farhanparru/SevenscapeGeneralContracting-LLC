import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Updated import statement:
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import project1 from '../assets/ProjectsImage/18.png';
import project2 from '../assets/ProjectsImage/19.png'
import project3 from '../assets/ProjectsImage/26.jpg'
import project4 from '../assets/ProjectsImage/30.jpg'
import project5 from '../assets/ProjectsImage/35.jpg'
import project6 from '../assets/ProjectsImage/39.jpg'
import project7 from '../assets/ProjectsImage/42.jpg'
import project8 from  '../assets/ProjectsImage/46.jpg'
import project9 from '../assets/ProjectsImage/52.jpg'


const projectData = [
    {
        location: 'Abu Dhabi International Airport',
        title: 'Various Construction Works for ADAC',
        description: 'Multiple projects executed including turnkey civil construction, jet blast fencing, kiosks for parking areas, interior fit-out works, and many fabrication works.',
        image: project2, // You may want to import/create a specific image for this project
      },
  {
    location: 'ADAC Head Office',
    title: 'Construction of Masjid',
    description: 'A beautiful mosque construction project completed for the ADAC Head Office with traditional architectural elements.',
    totalArea: '850m²',
    image: project1,
  },

  {
    location: 'Al Bateen Executive Airport',
    title: 'Supply & Installation of High Mast Lights',
    description: 'Completed the full turnkey solution for high mast lighting infrastructure including foundation works, electrical connections, and commissioning of energy-efficient lighting systems.',
    image: project3,
  },

  
  {
   location: 'Al Ain International Airport',
    title: 'Workshop & Equipment Rooms Renovation',
    description: 'Comprehensive renovation of aircraft maintenance workshops and specialized equipment rooms, including structural upgrades, MEP systems modernization, and aviation-grade finishes.',
    image: project4,
  },

  {
    location: 'Multiple Sites Across UAE',
    title: 'Civil Construction Works Portfolio',
    description: 'Delivered end-to-end civil construction solutions including earthworks, structural concrete, underground utilities, and roadworks for various commercial and infrastructure projects.',
    image: project6,
  
  },

  {
    location: 'ETISALAT Headquarters',
    title: 'Telecom Room Electrical Infrastructure Upgrade',
    description: 'Complete electrical system overhaul for critical telecommunications equipment rooms, including main power distribution, backup systems, and precision cooling solutions.',
    duration: '3 months',
   
    image: project5,
    challenge: "Migrating legacy systems to new infrastructure without service interruption"
  },

  {
    location: 'Multiple Sites Across UAE',
    title: 'Civil Construction Works Portfolio',
    description: 'Delivered end-to-end civil construction solutions including earthworks, structural concrete, underground utilities, and roadworks for various commercial and infrastructure projects.',
    image: project7,
  
  },

  {
    location: 'Plot E20/01-C6, Abu Dhabi',
    client: 'Mr. Ghaith Hassan Ghaith Al Zaabi',
    title: 'Custom Luxury Villa Construction',
    description: 'Complete turnkey construction of a premium residential villa including architectural works, MEP installations, interior finishing, and landscape architecture.',
    image:project8,
  },
  {
    location: 'Mussafah Industrial Area M9, Plot 9, Abu Dhabi',
    title: 'Warehouse & Commercial Complex Construction',
    description: 'Turnkey construction of a mixed-use industrial facility comprising warehouse storage, retail showroom space, and administrative office areas with complete MEP installations.',
    image:project9,
  }
];

const Projects = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Projects</h2>
        
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          className="project-swiper"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-stretch bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-blue-600 text-lg font-semibold mb-2">{project.location}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.note && (
                    <p className="text-gray-500 italic mb-6">{project.note}</p>
                  )}
                  <div className="mt-auto flex items-center text-gray-700">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full mr-3 text-sm font-medium">
                      ✓ Completed
                    </span>
                    <span className="text-sm font-medium">
                      Total Area: <span className="font-bold">{project.totalArea}</span>
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;