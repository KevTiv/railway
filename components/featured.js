import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.scss'
import {useThemeContext } from '../context'

import img1 from '../public/img/hero_img_1.jpg'
import img2 from '../public/img/hero_img_2.jpg'
import img3 from '../public/img/hero_img_3.jpg'

import share from '../public/svg/share.svg'
import spoton from '../public/svg/spoton.svg'
import orbit from '../public/svg/orbit.svg'

import { arrowAnimation, zoomFeaturedProject } from '../animation'

const Featured = () => {
    // let isDarkMode = useThemeContext();
    let shareImgElem = useRef(null);
    let spotonImgElem = useRef(null);
    let orbitImgElem = useRef(null);

  return (
     <>
        <section id="featured">
            <div className="mt-8 lg:mt-[3vw] border-t-2 border-gray-900 dark:border-gray-400 ">
                <h2 className="my-2 font-bold text-xs md:text-base">Featured startups</h2>
                <div className="my-8" id="share" ref={shareImgElem} onMouseEnter={()=>{arrowAnimation(true, 'share'); zoomFeaturedProject(true, shareImgElem)}} onMouseLeave={()=>{arrowAnimation(false, 'share'); zoomFeaturedProject(false, shareImgElem)}}>
                    <Image src={img1} alt='Person infront of a Tesla' layout='responsive' />
                    <div className="mt-4 grid grid-cols-2 py-3 border-b-2 border-gray-100">
                        <div className="col-span-1 w-44 lg:w-[15vw]">
                            <Image src={share} alt='Person infront of a Tesla' layout='responsive' />
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <span className={`relative inline-block w-4 h-4 lg:w-6 lg:h-5 mr-3 overflow-hidden 
                                dark:before:bg-orange-600 dark:after:bg-orange-600 before:bg-blue-600 after:bg-blue-600
                                rotate-[-45deg] ${styles.featured_share_arrows}`}></span>
                        </div>
                        
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:gap-x-3">
                        <p className="col-span-1 text-sm leading-4 lg:text-[1.15vw] lg:leading-normal">
                            We want to share more, but many are skeptical about sharing their most valuable belongings with complete strangers.
                        </p>
                        <p className="col-span-1 text-sm leading-4 lg:text-[1.15vw] lg:leading-normal">
                            Share enables easy car sharing between friends and family. It's safe, cheap and good for the environment.
                        </p>
                    </div>
                </div>
                <div className="my-8" id="spoton" ref={spotonImgElem} onMouseEnter={()=>{arrowAnimation(true, 'spoton'); zoomFeaturedProject(true, spotonImgElem)}} onMouseLeave={()=>{arrowAnimation(false, 'spoton'); zoomFeaturedProject(false, spotonImgElem)}}>
                    <Image src={img2} alt='Person infront of a Tesla' layout='responsive' />
                    <div className="mt-4 grid grid-cols-2 py-3 border-b-2 border-gray-100">
                        <div className="col-span-1 w-44 lg:w-[15vw]">
                            <Image src={spoton} alt='Person infront of a Tesla' layout='responsive' />
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <span className={`relative inline-block w-4 h-4 mr-3 overflow-hidden 
                                dark:before:bg-orange-600 dark:after:bg-orange-600 before:bg-blue-600 after:bg-blue-600
                                rotate-[-45deg] ${styles.featured_spoton_arrows}`}></span>
                        </div>
                        
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:gap-x-3">
                        <p className="col-span-1 text-sm leading-4 lg:text-[1.15vw] lg:leading-normal">
                            We want to share more, but many are skeptical about sharing their most valuable belongings with complete strangers.
                        </p>
                        <p className="col-span-1 text-sm leading-4 lg:text-[1.15vw] lg:leading-normal">
                            Share enables easy car sharing between friends and family. It's safe, cheap and good for the environment.
                        </p>
                    </div>
                </div>
                <div className="my-8" id="orbit" ref={orbitImgElem} onMouseEnter={()=>{arrowAnimation(true, 'orbit'); zoomFeaturedProject(true, orbitImgElem)}} onMouseLeave={()=>{arrowAnimation(false, 'orbit'); zoomFeaturedProject(false, orbitImgElem)}}>
                    <Image src={img3} alt='Person infront of a Tesla' layout='responsive' />
                    <div className="mt-4 grid grid-cols-2 py-3 border-b-2 border-gray-100">
                        <div className="col-span-1 w-44 lg:w-[15vw]">
                            <Image src={orbit} alt='Person infront of a Tesla' layout='responsive' />
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <span className={`relative inline-block w-4 h-4 mr-3 overflow-hidden 
                                dark:before:bg-orange-600 dark:after:bg-orange-600 before:bg-blue-600 after:bg-blue-600
                                rotate-[-45deg] ${styles.featured_orbit_arrows}`}></span>
                        </div>
                        
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:gap-x-3">
                        <p className="col-span-1 text-sm leading-4 lg:text-[1.15vw] lg:leading-normal">
                            We want to share more, but many are skeptical about sharing their most valuable belongings with complete strangers.
                        </p>
                        <p className="col-span-1 text-sm leading-4 lg:text-[1.15vw] lg:leading-normal">
                            Share enables easy car sharing between friends and family. It's safe, cheap and good for the environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
     </>
  )
}

export default Featured