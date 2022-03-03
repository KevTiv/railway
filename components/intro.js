import {useRef} from 'react'
import styles from '../styles/Home.module.scss'

import { arrowAnimation } from '../animation'


const Intro = () => {
    let introArrowsRef = useRef(null);
  return (
    <>
        <section id="intro">
            <div className="grid grid-cols-6 pt-36 lg:pt-[9vw]">
                <h1 className="text-7xl font-bold col-span-4 md:text-8xl md:col-start-1 md:row-start-1 lg:text-[8vw] lg:leading-[6.5vw] ">
                    We build<br/>
                    <span onMouseEnter={()=>arrowAnimation(true, introArrowsRef)} onMouseLeave={()=>arrowAnimation(false, introArrowsRef)}>good
                    {/*  */}
                    <span className="inline-flex min-w-[5rem] min-h-[3rem] w-8 h-6 translate-x-4 md:h-10 md:w-16 lg:h-[3.75vw] lg:w-[5vw] overflow-hidden">
                        <span ref={introArrowsRef} className={`relative inline-block my-auto w-full h-full
                            before:bg-blue-600 after:bg-blue-600 dark:before:bg-orange-600 dark:after:bg-orange-600
                            ${styles.intro_arrows}`}></span>
                    </span>
                    <br/>
                    </span>
                    startups
                </h1>
                <p className="text-sm leading-4 col-span-4 col-start-3 row-start-2 mt-5 md:text-xl md:col-start-4 md:row-start-1 md:flex md:items-end lg:text-[1.5vw] lg:leading-tight lg:ml-3">
                    We are a close-knit team of makers, leveraging untapped assets in established industries to build new companies that are good for people and society.
                </p>
            </div>
        </section>
    </>
    
  )
}

export default Intro