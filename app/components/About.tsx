"use client";
import { motion } from 'framer-motion';
import { Code, Palette, Coffee, Rocket } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="About Me" className="px-4 sm:px-8 lg:px-16 xl:px-32 shadow-green-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="font-bold text-4xl text-white text-center mb-12">
          About Me
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-32 items-start">
          {/* Text Section on the Left */}
          <div className="space-y-6 lg:w-[500px] lg:ml-[-100px] pt-12 mx-auto sm:ml-0">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white leading-relaxed"
            >
              Hi there! I am a passionate creator at the intersection of design and technology. With a keen eye for aesthetics and a love for clean code, I craft digital experiences that are both beautiful and functional.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white leading-relaxed"
            >
              My journey in the world of web development has been fueled by curiosity and a constant desire to learn. From responsive layouts to interactive interfaces, I love bringing ideas to life in the browser.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-white leading-relaxed"
            >
              When I am not coding or pushing pixels, you will find me exploring new design trends, tinkering with the latest web technologies, or seeking inspiration in the world around me. Let us create something amazing together!
            </motion.p>
          </div>

          {/* Icon Section on the Right */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg w-full lg:w-[500px] mx-auto lg:ml-[200px] sm:ml-0"
          >
            {/* Fully round circle image with explicit size */}
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden mx-auto mb-6 border-4 shadow-green-500 shadow-lg">
              <Image
                src="/images/about-me.png"
                alt="Susan Masaku"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">Susan Masaku</h2>
            <p className="text-lg text-gray-300 text-center mb-6">
              UX/UI Designer | Front-End Developer | Backend Developer | Product Manager
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="bg-green-500 shadow-green-500 p-3 rounded-full mb-2">
                  <Code size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">Code</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-500 p-3 rounded-full mb-2">
                  <Palette size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">Design</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-500 p-3 rounded-full mb-2">
                  <Coffee size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">Coffee</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-500 p-3 rounded-full mb-2">
                  <Rocket size={24} className="text-white" />
                </div>
                <span className="text-sm text-gray-300">Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
