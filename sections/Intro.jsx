import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Intro = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
  <div className="theme-black-pearl relative bg-skin-fill max-w-6xl overflow-hidden sm:rounded-2xl">
        <img className="absolute inset-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="People working on laptops" />
    <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
    <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
    <div class="flex items-center">
        <div class="text-gray-100 text-1xl font-bold mr-4">Our Track Record</div>
        <div class="border-l border-gray-400 h-8"></div>
      </div>
    <div class="text-gray-100 text-3xl font-bold ml-0 mt-4 mb-6">Trusted by Many Organizations Throughout the World</div>
    <div class="text-gray-100 text-lg mb-8 max-w-md text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna id turpis suscipit, eget rutrum augue consectetur. Ut tincidunt quam vel tempor consequat. Donec pulvinar vestibulum eros, quis consectetur felis ultrices vel.</div>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div class="bg-[#94E958] rounded-lg p-6">
        <div class="text-gray-900">More than</div>
          <div class="text-4xl font-bold text-gray-900">80</div>
          <div class="text-gray-900">Languages Served</div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div class="bg-[#F1A321] rounded-lg p-6">
          <div class="text-gray-900">More than</div>
          <div class="text-4xl font-bold text-gray-900">500</div>
          <div class="text-gray-900">Projects Completed</div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div class="bg-[#D15D42] rounded-lg p-6">
          <div class="text-gray-900">More than</div>
          <div class="text-4xl font-bold text-gray-900">200</div>
          <div class="text-gray-900">MM Words Translated </div>
        </div>
      </div>
    </div>
    </div>

  </div> 
      
  
  </section>
);

export default Intro;
