import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";

const Footer = () => {
  return (
    <div className="bg-white-300  pb-20" style={{paddingTop:'4em'}}>
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="flex">
            <LogoVPN className="h-8 w-auto mb-6" /> <strong className="block ml-3 mt-1">Viaje con Mary</strong>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Derechos reservados</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
