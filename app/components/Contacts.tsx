"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Coffee, Rocket,Send,Mail,Phone,MapPin,Clock,Menu } from 'lucide-react';
import Image from 'next/image'; 


const Contacts = () => {
    return (
        <div id="Contact" className="bg-gradient-to-b from-gray-900 to-gray-800 pt-4">
        <div className="container mx-auto mt-14 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-bold text-5xl text-white mb-4">Get In Touch</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let us work together to create something extraordinary.
            </p>
          </motion.div>
  
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <form className="space-y-6 bg-gray-800/50 p-8 rounded-2xl backdrop-blur-lg border border-gray-700">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-white mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Your name"
                    className="bg-gray-900/50 border-2 border-green-500/30 text-white p-4 rounded-xl 
                             focus:outline-none focus:border-green-500 transition-colors duration-300
                             placeholder:text-gray-500" 
                    required 
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-900/50 border-2 border-green-500/30 text-white p-4 rounded-xl 
                             focus:outline-none focus:border-green-500 transition-colors duration-300
                             placeholder:text-gray-500" 
                    required 
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-white mb-2 font-medium">Message</label>
                  <textarea 
                    id="message"
                    placeholder="Your message"
                    className="bg-gray-900/50 border-2 border-green-500/30 text-white p-4 rounded-xl h-40 
                             focus:outline-none focus:border-green-500 transition-colors duration-300
                             placeholder:text-gray-500 resize-none" 
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl
                           flex items-center justify-center gap-2 font-semibold text-lg shadow-lg
                           hover:from-green-600 hover:to-green-700 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
  
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-1/3"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-lg border border-gray-700">
                <h2 className="text-2xl font-bold mb-8 text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">mwendezmasaku@gmail.com</p>
                    </div>
                  </motion.div>
  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">+254 707071167</p>
                    </div>
                  </motion.div>
  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Nairobi, Kenya</p>
                    </div>
                  </motion.div>
  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Working Hours</p>
                      <p className="text-white">09:00 - 18:00</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  
    );
};

export default Contacts;