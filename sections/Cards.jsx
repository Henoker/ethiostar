import React from 'react';
import { OurServices } from '../components';
import {ourServices } from '../constants';

const Cards = () => (
  <div className="relative bg-skin-fill max-w-7xl mx-auto overflow-hidden sm:rounded-2xl mb-10">
    <img className="absolute inset-0 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100" alt="People working on laptops" />
    <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
    <div className="relative max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
        <span className="block mb-4">Our Services.</span>
      </h2>
    </div>
    <div className=" relative grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 gap-2 md:mb-12 md:grid-cols-4">
    {ourServices.map((service) => (
            <OurServices key={service.title} {...service} />
          ))}
    </div>
    
  </div>    
      
      

    
 
);
export default Cards