"use client";
import Image from 'next/image'; 



const Skills = () => {
    return (
        <div id="Skills" className="mt-48 pb-48 md:-ml-32"> {/* Added negative margin to shift left */}
            <h1 className="font-bold text-4xl text-white mb-12 text-center">Skills</h1>
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
                                <Image 
                                    src={item.icon} 
                                    alt={item.title} 
                                    width={48} 
                                    height={48} 
                                    className="mb-2" 
                                />
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
                            { title: "Django", icon: "/images/django-icon.svg" },
                            { title: "Restful APIs", icon: "/images/api-icon.svg" },
                            { title: "HTTP Requests", icon: "/images/http-icon.svg" },
                            { title: "Forms & Templates", icon: "/images/form-icon.svg" },
                        ].map((item) => (
                            <div key={item.title} className="flex flex-col items-center text-center p-2 hover:bg-gray-800 rounded-lg transition-colors">
                                <Image 
                                    src={item.icon} 
                                    alt={item.title} 
                                    width={48} 
                                    height={48} 
                                    className="mb-2" 
                                />
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
                            { title: "Prioritization", icon: "/images/prioritize-icon.svg" },
                            { title: "Jira", icon: "/images/jira-icon.svg" },
                            { title: "Coda", icon: "/images/coda-icon.svg" },
                            { title: "Agile", icon: "/images/agile-icon.svg" },
                        ].map((item) => (
                            <div key={item.title} className="flex flex-col items-center text-center p-2 hover:bg-gray-800 rounded-lg transition-colors">
                                <Image 
                                    src={item.icon} 
                                    alt={item.title} 
                                    width={48} 
                                    height={48} 
                                    className="mb-2" 
                                />
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
                            { title: "Figma", icon: "/images/figma-icon.svg" },
                            { title: "FigJam", icon: "/images/figma-icon.svg" }, // Ensure different icons for FigJam
                            { title: "Adobe Illustrator", icon: "/images/adobe-illustrator-icon.svg" },
                            { title: "Adobe Photoshop", icon: "/images/photoshop-icon.svg" },
                        ].map((item) => (
                            <div key={item.title} className="flex flex-col items-center text-center p-2 hover:bg-gray-800 rounded-lg transition-colors">
                                <Image 
                                    src={item.icon} 
                                    alt={item.title} 
                                    width={48} 
                                    height={48} 
                                    className="mb-2" 
                                />
                                <h3 className="text-white text-sm font-semibold">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
