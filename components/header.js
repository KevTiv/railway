import React from 'react'
import { useThemeContext } from '../context'
const Header = () => {
    const isDarkMode = useThemeContext();
  return (
      <>
        <section id="header">
            <div className="absolute top-0 w-full mt-4 grid grid-cols-4 px-4 border-b-2 border-gray-400 dark:border-gray-700">
                <a className="w-16 col-span-1 col-start-1 flex justify-center items-center lg:fixed lg:top-7 lg:w-[8vw]"> 
                    <svg viewBox="0 0 392 112" xmlns="http://www.w3.org/2000/svg" aria-label="Railway">
                        <path fill={isDarkMode ? "white" : "black"} d="M59.85 61.832c.228 9.348.456 16.25.912 19.67.57 3.876 1.254 5.586 1.824 6.498H45.828c-1.71-6.612-.798-16.25-1.482-24.344-.456-5.814-4.104-9.348-10.602-9.348H15.732V88H0V4h36.024c16.872 0 25.308 11.46 25.308 22.974 0 8.208-3.306 15.39-12.54 19.38 6.84 1.824 10.83 7.498 11.058 15.478zM45.714 29.368c0-7.068-4.56-11.83-12.54-11.83H15.732v23.774h15.162c7.296 0 14.82-3.622 14.82-11.944zm40.32 21.468l21.546-3.306v-2.166c0-4.902-2.052-8.094-11.286-8.094-11.628 0-11.856 6.498-11.856 8.55h-14.82c0-9.234 3.876-21.09 27.132-21.09 22.116 0 26.22 11.058 26.22 20.064v34.428c0 4.788.798 8.778.798 8.778h-15.732v-6.27c-4.332 4.446-10.602 7.068-19.38 7.068-12.312 0-21.66-7.068-21.66-19.608 0-14.25 13.566-17.556 19.038-18.354zm21.546 11.742v-3.306s-10.83 1.596-15.732 2.508c-2.508.456-4.902 1.026-6.612 2.394-1.482 1.14-2.394 2.85-2.394 5.13 0 1.71.684 7.524 9.234 7.524 5.016 0 9.462-1.824 11.856-4.218 2.964-3.078 3.648-7.068 3.648-10.032zm40.32-43.89h-15.39V4h15.39v14.688zm0 69.312h-15.39V25.528h15.39V88zm24.93 0h-15.39V4h15.39v84zm59.56-62.472l11.856 44.916 11.97-44.916h16.074L254.506 88h-18.924L224.98 45.934 214.378 88h-18.924L177.67 25.528h16.074l11.97 44.916 11.856-44.916h14.82zm59.928 25.308l21.546-3.306v-2.166c0-4.902-2.052-8.094-11.286-8.094-11.628 0-11.856 6.498-11.856 8.55h-14.82c0-9.234 3.876-21.09 27.132-21.09 22.116 0 26.22 11.058 26.22 20.064v34.428c0 4.788.798 8.778.798 8.778H314.32v-6.27c-4.332 4.446-10.602 7.068-19.38 7.068-12.312 0-21.66-7.068-21.66-19.608 0-14.25 13.566-17.556 19.038-18.354zm21.546 11.742v-3.306s-10.83 1.596-15.732 2.508c-2.508.456-4.902 1.026-6.612 2.394-1.482 1.14-2.394 2.85-2.394 5.13 0 1.71.684 7.524 9.234 7.524 5.016 0 9.462-1.824 11.856-4.218 2.964-3.078 3.648-7.068 3.648-10.032zM336.11 110V96.436h9.234c3.306 0 5.13-.912 6.042-4.332l1.14-4.104-21.432-62.472h16.986l12.996 43.434 12.996-43.434h16.074l-23.484 69.654c-3.192 9.576-7.068 14.818-17.67 14.818H336.11z"></path>
                    </svg>
                </a>
                <h2 className="text-sm flex items-center col-span-2 col-start-1 row-start-2 mt-4 lg:mt-2 md:row-start-1 md:col-start-2 lg:text-[1.2vw] lg:leading-tight">
                    Design driven Startup <br/>Studio in Oslo, Norway
                </h2>
                <h2 className="text-sm flex items-center col-span-2 col-start-3 row-start-2 mt-4 lg:mt-2 md:row-start-1 lg:text-[1.2vw] lg:leading-tight">
                    Fully Operated by<br/>devoted makers
                </h2>
                <span className="col-span-1 col-start-4 flex justify-end items-center mr-4 md:row-start-1">
                    <svg className="w-8 lg:w-[4vw] lg:mt-2" 
                        viewBox="0 0 136 112" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path fill={isDarkMode ? "rgb(234 88 12)" : "#0029fe"} d="M27.653 3l15.173 5.077-26.653 79.659L1 82.659z"></path>
                        <path fill={isDarkMode ? "white" : "black"} d="M120 4h16v84h-16zM88 4h16v84H88zM56 4h16v84H56z"></path>
                    </svg>
                </span>
            </div>
        </section>
      </>
    
  )
}

export default Header