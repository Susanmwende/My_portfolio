"use client";
import Image from 'next/image'; 

const Projects = () => {
    return (
        <div id="Projects" className="flex flex-col gap-10 justify-center overflow-x-auto scroll-m-10 pb-72">
            {/* Title above the cards */}
            <h1 className="font-bold text-4xl text-white text-center pb-12">Projects</h1>

            {/* Map through projects */}
            <div className="flex gap-10 justify-center overflow-x-auto flex-wrap">
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
                    <div key={item.skill} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-green-500 shadow-green-500 p-6 flex flex-col items-center transition-transform hover:scale-105">
                        <Image 
                            src={item.icon} 
                            alt={item.skill} 
                            width={64} // Specify width
                            height={64} // Specify height
                            className="mb-4" 
                        />
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
        </div>
    );
};

export default Projects;
