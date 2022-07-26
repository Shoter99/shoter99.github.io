import React, { useEffect } from 'react';
import './App.css';
import ArrowUp from './utils/uparrow.svg';
import TitlePageBtn from './components/TitlePageBtn';
import ProjectCard from './components/ProjectCard';

function App() {
  
  const goToTop = () => {
    const element = document.querySelector(`#home`)
    element?.scrollIntoView({behavior: 'smooth', block: 'start'})

  }
  

  


  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <section id="home" className='snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen'>
        <div className='text-center md:text-left tracking-[.25rem]'>
          <span className='md:text-7xl text-4xl text-neutral-700'>Dawid</span>
          <br />
          <span className='text-orange-500 text-5xl md:text-8xl'>Roszman</span>
        </div>
        <div className="flex md:block p-3 md:p-0">
          <TitlePageBtn text="Resume" link='aboutme' />
          <div className='p-2'></div>
          <TitlePageBtn link="projects" text="Projects" />
        </div>
      </section>
      <section id="aboutme" className='snap-start h-screen bg-neutral-700 flex justify-center p-4 md:p-10'>
      <h1 className="text-neutral-200 font-bold text-3xl md:text-6xl">About me</h1>

      </section>
      <section id="projects" className='snap-start min-h-screen bg-neutral-200 p-4 md:p-10 flex flex-col items-center'>
          <h1 className="text-neutral-700 font-bold text-3xl md:text-6xl">My Projects</h1>
          <div className="grid grid-cols-1 gap-5 mt-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
      </section> 
          <button onClick={goToTop} className='transition duration-1000 absolute right-0 bottom-0 w-8 h-8 m-4 md:m-10 md:w-12 md:h-12 p-1 flex rounded-full justify-center items-center md:hover:w-14 md:hover:h-14'>
          <img src={ArrowUp} alt="Arrow Up"/>
          </button>
    </div>
  );
}

export default App;
