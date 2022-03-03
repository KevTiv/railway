import gsap from 'gsap'
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin'

// animation of mobile navbar
export const navAnimation = (showNav, navElem)=>{
    // If user scroll up showNav is true, navbar appear
    showNav ? 
        gsap.to(navElem.current,{
            top: 0,
            duration: 0.2,
            ease: 'power2.out'
        })
    :
        gsap.to(navElem.current,{
            top: '-5.6rem',
            duration: 0.2,
            ease: 'power2.out'
        });
};

//animation of featured project arrows and intro arrows
export const arrowAnimation = (isMouseOver, arrowContainerRef)=>{
    
    const arrowsMoveRight = ()=>{
        gsap.to(arrowContainerRef.current,{
            x: arrowContainerRef.current.clientWidth + (arrowContainerRef.current.offsetWidth * 0.5),
            duration: 0.25,
            ease: 'linear'
        })
    };
    const arrowsMoveLeft=()=>{
        gsap.to(arrowContainerRef.current,{
            x: 0,
            duration: 0.25,
            ease: 'linear'
        });
    };
    isMouseOver? arrowsMoveRight() : arrowsMoveLeft();
};

// animation of nav elem
export const navArrowAnimation =(isMouseOver, isMobileScreen, navStartupsElemRef, navElemRef)=>{
    const tl = gsap.timeline({
        defaults:{
            duration: 0.6,
            ease: 'power2.out'
        }
    });
    if(!isMobileScreen){
        isMouseOver?
            tl
                .to(navStartupsElemRef.current,{
                    x: `-${ navStartupsElemRef.current.clientWidth * 0.25}`,
                })
                .to(navElemRef.current,{
                    x: 0,
                    
                },'-=0.6')
            :
            tl
                .to(navElemRef.current,{
                    x: `-${ navElemRef.current.clientWidth * 0.25}`,
                })
                .to(navStartupsElemRef.current,{
                    x: 0
                },'-=0.6')
    }
};

//Zoom in and out of featured project img 
export const zoomFeaturedProject =(isMouseOver, elem)=>{
    isMouseOver ?
        gsap.to(elem.current.querySelector('span img'),{
            scale: 1.05,
            duration: 0.6,
            ease: 'power2inOut'
        })
    :
        gsap.to(elem.current.querySelector('span img'),{
            scale: 1,
            duration: 0.6,
            ease: 'power2inOut'
        })
}