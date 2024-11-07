
"use client"; 
import { motion } from 'framer-motion'; 
import { Code, Palette, Coffee, Rocket, Send, Mail, Phone, MapPin, Clock } from 'lucide-react'; 
import Image from 'next/image';

export default function Home() { 
    return ( 
        <main className="animated-bg h-screen w-full"> 
            <div> 
                <nav className="flex justify-center space-x-8 py-8 bg-black text-white"> 
                    <a href="#Home" className="nav-link">Home</a> 
                    <a href="#About Me" className="nav-link">About Me</a> 
                    <a href="#Skills" className="nav-link">Skills</a> 
                    <a href="#Projects" className="nav-link">Projects</a> 
                    <a href="#Contact" className="nav-link">Contact</a> 
                </nav> 
            </div> 

            <div className="flex items-center justify-center gap-52 w-full pb-32 mt-24"> 
                <Image src="/images/susanmasaku.jpg" alt="Susan Masaku" width={400} height={400} className="rounded-full mt-12" /> 
                <div className="pt-20"> 
                    <h1 className="text-white text-center font-sans text-4xl font-dejavu typed-out"> 
                        <span className="text-white">Hi</span> 
                        <span className="text-white"> I&apos;m</span> 
                        <span className="text-white"> Susan Masaku</span> 
                        <span className="text-yellow-500"> A Software Developer</span> 
                    </h1> 
                    <br /> 
                    <p className="text-left text-lg w-100 text-white"> I excel at crafting elegant digital experiences and<br /> I am proficient in various programming languages and<br /> technologies. </p> 
                    <br /> 

                    <div className="flex items-center gap-32"> 
                        <a href="/document/Susan Masaku CV.pdf" download className="border stroke-green-500 p-4 text-green-500 text-white rounded mr-4" > Download CV </a> 

                        <div className="flex"> 
                            <a href="https://www.linkedin.com/in/susan-masaku-5506362b4/" target="_blank" rel="noopener noreferrer"> 
                                <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} className="mx-2 glow" /> 
                            </a> 

                            <a href="https://github.com/Susanmwende" target="_blank" rel="noopener noreferrer"> 
                                <Image src="/images/github.png " alt="GitHub" width={32} height={32} className="mx-2 glow" /> 
                            </a> 

                            <a href="https://x.com/Susan_masaku" target="_blank" rel="noopener noreferrer"> 
                                <Image src="/images/twitter.png" alt="Twitter" width={32} height={32} className="mx-2 glow" /> 
                            </a> 
                        </div> 
                    </div> 
                </div> 
            </div>

            {/* About Me Section */} 
            <div id="About Me" className=''> 
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-64 " > 
                    <h1 className="font-bold text-4xl text-white text-center mb-12"> About Me </h1> 

                    <div className="grid lg:grid-cols-2 gap-48 items-start "> 

                        {/* Text Section on the Left */} 
                        <div className="space-y-6 w-[600px] mr-96 pt-12"> 
                            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white " > Hi there! I&apos;m a passionate creator at the intersection of design and technology. With a keen eye for aesthetics and a love for clean code, I craft digital experiences that are both beautiful and functional. </motion.p>

                            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg text-white" > My journey in the world of web development has been fueled by curiosity and a constant desire to learn. From responsive layouts to interactive interfaces, I love bringing ideas to life in the browser. </motion.p>

                            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-lg text-white" > When I&apos;m not coding or pushing pixels, you&apos;ll find me exploring new design trends, tinkering with the latest web technologies, or seeking inspiration in the world around me. Let&apos;s create something amazing together! </motion.p>
                        </div>

                        {/* Icon Section on the Right */} 
                        <motion.div whileHover={{ scale: 1.05 }} className=" bg-gray-900 p-6 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg ml-48 w-[500px] " > 
                            <Image src="/images/about-me.png" alt="Your Name" width={192} height={192} className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg" /> 

                            <h2 className="text-3xl font-bold text-white text-center mb-4">Susan Masaku</h2>
                            <p className="text-lg text-gray-300 text-center mb-6"> UX/UI Designer | Front-End Developer | Backend Developer | Product Manager </p>

                            <div className="flex justify-center space-x-4"> 

                                {/* Directly using icons */}  
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
                                        <Rocket size={24} className= "text-white"/>  
                                    </div>
                                    <span className= "text-sm text-gray-300 ">Innovation</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
{/* Experience Section */}
<div id="Skills" className="mt-48 pb-48">
  <h1 className="font-bold text-4xl text-white mb-12 text-center ">Skills</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-28 md:px-10 max-w-7xl mx-auto">
    
    {/* Frontend - JavaScript card */}
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-green-500 transition-all duration-300 shadow-green-500">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Frontend</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "JavaScript", icon: "images/js-icon.svg" },
          { title: "Next.js", icon: "images/nextjs-icon.svg" },
          { title: "React.js", icon: "images/react-icon.svg" },
          { title: "DOM Manipulation", icon: "images/dom-icon.svg" },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />
            <h3 className="text-white text-sm font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>

    {/* Backend - Django card */}
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-green-500 transition-all duration-300 shadow-green-500">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Backend</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Django", icon: "images/django-icon.svg"},
          { title: "Restful APIs", icon: "images/api-icon.svg" },
          { title: "HTTP Requests", icon: "images/http-icon.svg" },
          { title: "Forms & Templates", icon: "images/form-icon.svg" },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />
            <h3 className="text-white text-sm font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>

    {/* Product Management - Card */}
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-green-500 transition-all duration-300 shadow-green-500">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Product Management</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Prioritization", icon: "images/prioritize-icon.svg" },
          { title: "Jira", icon: "images/jira-icon.svg" },
          { title: "Coda", icon: "images/coda-icon.svg" },
          { title: "Agile", icon: "images/agile-icon.svg" },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />
            <h3 className="text-white text-sm font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>

    {/* Design - Card */}
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-green-500 transition-all duration-300 shadow-green-500">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Design</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Figma", icon: "images/figma-icon.svg" },
          { title: "FigJam", icon: "images/figma-icon.svg" },
          { title: "Adobe Illustrator", icon: "images/adobe-illustrator-icon.svg" },
          { title: "Adobe Photoshop", icon: "images/photoshop-icon.svg" },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />
            <h3 className="text-white text-sm font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      
  {/* Skills Section */}
<h1  className="font-bold text-4xl text-white  text-center pb-12">Projects</h1>
<div id="Projects" className="flex gap-10 justify-center overflow-x-auto scroll-m-10 pb-72 ">
  {[
    {
      skill: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience.",
      icon: "/images/design-icon.svg",
      actions: [
       { label: "View Designs", link: "https://www.figma.com/design/iMNaty20G5i6aO8h0DImcL/Mwalimu-Sacco-Wireframes?node-id=60-2&node-type=canvas&t=yyDICJ9NUbqJUip2-0", style: "secondary" },
              { label: "Design Portfolio", link: "https://www.behance.net/susanmasaku", style: "outline" },
            ]      
    },
    {
      skill: "JavaScript",
      description: "Building interactive and dynamic web applications using modern JavaScript.",
      icon: "/images/js-icon.svg",
      actions: [
              { label: "GitHub Repo", link: "https://github.com/Susanmwende/quizproject.git", style: "secondary" },
              { label: "Vercel Link", link: "https://quizproject-ten.vercel.app/", style: "outline" }
            ]   
 },
    {
      skill: "Kotlin",
      description: "Developing robust and efficient Android applications.",
      icon: "/images/kotlin-icon.svg",
     actions: [
              { label: "GitHub Repo", link: "https://github.com/Susanmwende/Fibonacci.git", style: "secondary" },
              { label: "APK", link: "https://appetize.io/app/android/com.akirachix.fibonacciproject?device=pixel7&osVersion=13.0", style: "outline" }
            ]
    },
    {
      skill: "Python",
      description: "Creating scalable backend solutions and data analysis tools.",
      icon: "/images/python-icon.svg",
    actions: [
              { label: "GitHub Repo", link: "https://github.com/Susanmwende/Django_admin.git", style: "secondary" },
              { label: "Data Projects", link: "https://github.com/Susanmwende/Backend.git", style: "outline" },
            ]
    }
  ].map(item => (
    <div key={item.skill} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-green-500 shadow-green-500 p-6 flex flex-col items-center transition-transform hover:scale-105 ">
      <img src={item.icon} alt={item.skill} className="w-16 h-16 mb-4" />
      <div className="px-6 py-4 flex flex-col h-full">
        <div className="font-bold text-xl mb-2 text-center text-white">{item.skill}</div>
        <p className="text-gray-300 text-base mb-4 flex-grow">
          {item.description}
        </p>
        <div className="flex flex-col space-y-2">
          {item.actions.map((action, index) => (
            <a 
              key={index}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full px-4 py-2 rounded-full transition-colors ${
                action.style === 'primary' 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : action.style === 'secondary'
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
              }`}
            >
              {action.label}
            </a>
          ))}
          
        </div>
      </div>
    </div>
  ))}
</div>
      {/* Contact Section */}
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
            Have a project in mind? Let's work together to create something extraordinary.
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

    </main>
  );
}