

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Projects from './components/Projects';


export default function Home() {
 
return (
    <div className='animated-bg h-screen w-full'>
    <Navbar/>
    <Homepage/>
    <About/>
    <Skills/>
    <Projects/>
    <Contacts/>

     </div>
);
}
