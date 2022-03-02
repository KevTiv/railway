import {useRef, useEffect} from 'react'
import { navAnimation, navArrowAnimation } from '../animation'
import { useScreenSizeContext } from '../context'
import styles from '../styles/Home.module.scss'

const Navbar = () => {
    let isMobileScreen = useScreenSizeContext();
    let navElemRef = useRef(null);
    let startUpsElemArrowRef = useRef(null);
    let ideologyElemArrowRef = useRef(null);
    let methodElemArrowRef = useRef(null);
    let joinUsElemArrowRef = useRef(null);

    useEffect(() => {
        let previousScrollPosition;
        
        const handleNavAnimation = ()=>{
            
            if(isMobileScreen.current){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                scrollTop > previousScrollPosition ? navAnimation(true, navElemRef) : navAnimation(false, navElemRef);

                previousScrollPosition = scrollTop;
            }
        }

        handleNavAnimation();
        window.addEventListener('scroll',handleNavAnimation);

        return()=>{
            window.removeEventListener('scroll',handleNavAnimation);
        }
    },[])
  return (

    <>
        <section id="navbar">
            <nav 
                className="fixed top-[0] left-0 flex justify-between items-center 
                min-h-[6rem] w-full border-b-4 border-gray-900 navAnimation bg-white dark:bg-black
                z-50 lg:top-[-5rem] lg:mx-auto"
                ref={navElemRef}
            >
                <ul className="flex justify-around items-center w-full px-5 lg:fixed lg:flex-col lg:left-0 lg:top-[35vh] lg:w-[25vw]
                    lg:h-[20vh] lg:items-start">
                    <li className="flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4">
                        <span ref={startUpsElemArrowRef} className={`relative inline-block my-auto w-1/6 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 ${styles.nav_startups_arrow}`}></span>
                        <span className={`w-3/4 ${styles.selected}`}>Startups</span>
                    </li>
                    <li className="flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4" onMouseEnter={()=>navArrowAnimation(true, startUpsElemArrowRef, ideologyElemArrowRef)} onMouseLeave={()=>navArrowAnimation(false, startUpsElemArrowRef, ideologyElemArrowRef)}>
                        <span ref={ideologyElemArrowRef} className={`relative inline-block my-auto w-0 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 ${styles.nav_ideology_arrow}`}></span>
                        <span className={`w-3/4`}>Ideology</span>
                    </li>
                    <li className="flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4" onMouseEnter={()=>navArrowAnimation(true, startUpsElemArrowRef, methodElemArrowRef)} onMouseLeave={()=>navArrowAnimation(false, startUpsElemArrowRef, methodElemArrowRef)}>
                        <span ref={methodElemArrowRef} className={`relative inline-block my-auto w-0 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 ${styles.nav_method_arrow}`}></span>
                        <span className={`w-3/4`}>Method</span>
                    </li>
                    <li className="flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4" onMouseEnter={()=>navArrowAnimation(true, startUpsElemArrowRef, joinUsElemArrowRef)} onMouseLeave={()=>navArrowAnimation(false, startUpsElemArrowRef, joinUsElemArrowRef)}>
                        <span ref={joinUsElemArrowRef} className={`relative inline-block my-auto w-0 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 ${styles.nav_join_us_arrow}`}></span>
                        <span className={`w-3/4`}>Join Us</span>
                    </li>
                </ul>
            </nav>
        </section>
    </>
  )
}

export default Navbar