import { Parallax, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Sample images - replace with your actual images
import constructionImg from '../assets/Images/silhouette-engineer-worker-building-site-construction-site-sunset-evening-time_1033579-182640.png';
import buildingImg from '../assets/Images/pexels-pixabay-302769.png';
import interiorImg from '../assets/Images/pexels-fotoaibe-1571460.png';
import electromechanicalImg from '../assets/Images/ELECTROMECHANICAL.png';
import telecomImg from '../assets/Images/Networks_Telecommunications.png';
import cablingImg from '../assets/Images/premium_photo-1682145181120-73cfdfc8a36d (1).png';

const activities = [
  {
    title: "Civil Construction",
    description: "Civil Works including infrastructure development",
    image: constructionImg
  },
  {
    title: "Building Projects",
    description: "Residential and Industrial Building construction",
    image: buildingImg
  },
  {
    title: "Interior Design",
    description: "Interior Design & Fit Out works",
    image: interiorImg
  },
  {
    title: "Electro-Mechanical",
    description: "Comprehensive electro-mechanical works",
    image: electromechanicalImg
  },
  {
    title: "Telecom Networks",
    description: "Telecom Infrastructure works",
    image: telecomImg
  },
  {
    title: "Structured Cabling",
    description: "Professional cabling solutions",
    image: cablingImg
  }
];

export default function ParallaxSlider() {
    return (
      <section className="pt-[7rem] pb-[5rem] bg-white">
        <div className="lg:mx-auto max-w-6xl mx-[1.5rem]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-[2rem] text-center text-[#003399] font-serif animate-fadeInUp">
            Activities Undertaken
          </h1>
          <Swiper
            modules={[Parallax, Pagination, Navigation]}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            className="h-[550px]"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <div
              slot="container-start"
              className="parallax-bg"
              data-swiper-parallax="-23%"
            ></div>
  
            {activities.map((activity, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-xl border border-[#003399]">
                  <div
                    className="h-64 overflow-hidden"
                    data-swiper-parallax="-100"
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6" data-swiper-parallax="-300">
                    <h3 className="text-2xl font-bold mb-3 text-[#003399]">
                      {activity.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{activity.description}</p>
                    <button className="bg-[#003399] hover:bg-[#CC0000] text-white py-3 px-6 rounded-lg transition-all transform hover:-translate-y-1">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
  