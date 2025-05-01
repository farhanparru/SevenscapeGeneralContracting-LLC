import React from 'react';
import logo1 from '../assets/logoImages/86.png'
import logo2 from '../assets/logoImages/89.png'
import logo3 from '../assets/logoImages/87.jpg'
import logo4 from '../assets/logoImages/3563ff9c4a653af87b76b9c89a843e84.png'
import logo5 from '../assets/logoImages/iso-45001-certified-medal-occupational-health-vector-11786217.png'

const QualityAssurance = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">QUALITY ASSURANCE</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Sevenscape quality management system spans all phases of the project life cycle, from preliminary planning through to final commissioning of the project.
          We are fully accredited to <span className="font-semibold text-gray-900">ISO 9001:2015, ISO 45001:2018 & ISO 14001</span> standard showcasing our commitment to maintaining quality of our operations, health and safety of our staff as well as the environment we work in.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our commitment to health and safety extends beyond words and into actions as reflected by our <span className="text-red-600 font-semibold">“Zero Accident HSE Record”</span>.
        </p>

        {/* Certification Logos */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <img src={logo1} alt="ARS Logo" className="h-20 w-auto object-contain" />
          <img src={logo2} alt="UAF Logo" className="h-20 w-auto object-contain" />
          <img src={logo3} alt="ISO 9001" className="h-20 w-auto object-contain" />
          <img src={logo4} alt="ISO 14001" className="h-20 w-auto object-contain" />
          <img src={logo5} alt="ISO 45001" className="h-20 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
