import React from 'react'
import styles from '../styles/Home.module.scss'

import { arrowAnimation } from '../animation'
import {useScreenSizeContext} from '../context'

const Intro = () => {
    let isMobileScreen = useScreenSizeContext();
  return (
    <>
        <section id="intro">
            <div className="grid grid-cols-6 pt-36 lg:pt-[9vw]">
                <h1 className="text-7xl font-bold col-span-5 md:text-8xl md:col-start-1 md:row-start-1 lg:text-[9vw] lg:leading-[7vw] ">
                    We build<br/>
                    <span onMouseEnter={()=>arrowAnimation(true, 'intro')} onMouseLeave={()=>arrowAnimation(false, 'intro')}>good
                    {/*  */}
                    <span className={`relative inline-block min-w-[5rem] min-h-[3rem]  translate-x-4  my-auto lg:h-16 lg:w-20 overflow-hidden
                        before:bg-blue-600 after:bg-blue-600 dark:before:bg-orange-600 dark:after:bg-orange-600
                        ${styles.intro_arrows}`}></span>
                    <br/>
                    </span>
                    startups
                </h1>
                <p className="text-sm leading-4 col-span-4 col-start-3 row-start-2 mt-5 md:text-xl md:col-start-4 md:row-start-1 md:flex md:items-end lg:text-[1.8vw] lg:leading-tight">
                    We are a close-knit team of makers, leveraging untapped assets in established industries to build new companies that are good for people and society.
                </p>
            </div>
        </section>
    </>
    
  )
}

export default Intro