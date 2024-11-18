"use client";
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:gap-52 w-full pb-36 mt-24
      sm:gap-8 sm:pb-24 sm:mt-16
      lg:pb-28 lg:gap-40">

      <Image 
        src="/images/susanmasaku.jpg" 
        alt="Susan Masaku" 
        width={400} 
        height={400} 
        className="profile-image rounded-full mt-12
          sm:w-[250px] sm:h-[250px] sm:mt-8
          md:w-[300px] md:h-[300px]
          lg:w-[350px] lg:h-[350px]
          xl:w-[400px] xl:h-[400px]"
      />
      
      <div className="pt-20 text-center md:text-left
        sm:pt-16
        lg:pt-20">
        <h1 className="text-white font-sans text-4xl font-dejavu typed-out">
          <span className="text-white">Hi</span> 
          <span className="text-white"> I am</span> 
          <span className="text-white"> Susan Masaku</span> 
          <span className="text-yellow-500"> A Software Developer</span>
        </h1>
        <br />
        <p className="text-left text-lg w-full text-white
          sm:text-base
          lg:text-lg">
          I excel at crafting elegant digital experiences and<br />
          I am proficient in various programming languages and<br />
          technologies.
        </p>
        <br />
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="/document/Susan Masaku CV.pdf" download className="border stroke-green-500 p-4 text-green-500 text-white rounded mr-4">
            Download CV
          </a>
          <div className="flex space-x-4 justify-center md:justify-start mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/susan-masaku-5506362b4/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} className="mx-2 glow" />
            </a>
            <a href="https://github.com/Susanmwende" target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.png" alt="GitHub" width={32} height={32} className="mx-2 glow" />
            </a>
            <a href="https://x.com/Susan_masaku" target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.png" alt="Twitter" width={32} height={32} className="mx-2 glow" />
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Homepage;