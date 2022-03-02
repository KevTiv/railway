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
export const arrowAnimation = (isMouseOver, section)=>{
    gsap.registerPlugin(CSSRulePlugin);
    let arrowAfterElem,arrowBeforeElem;

    if(section === 'intro'){
        arrowAfterElem = CSSRulePlugin.getRule(".Home_intro_arrows__g3KCF::after");
        arrowBeforeElem = CSSRulePlugin.getRule(".Home_intro_arrows__g3KCF::before");
    };
    if(section === 'share'){
        arrowAfterElem = CSSRulePlugin.getRule(".Home_featured_share_arrows__1F0QZ::after");
        arrowBeforeElem = CSSRulePlugin.getRule(".Home_featured_share_arrows__1F0QZ::before");
    };
    if(section === 'spoton'){
        arrowAfterElem = CSSRulePlugin.getRule(".Home_featured_spoton_arrows__J_kM8::after");
        arrowBeforeElem = CSSRulePlugin.getRule(".Home_featured_spoton_arrows__J_kM8::before");
    };
    if(section === 'orbit'){
        arrowAfterElem = CSSRulePlugin.getRule(".Home_featured_orbit_arrows__KwFqM::after");
        arrowBeforeElem = CSSRulePlugin.getRule(".Home_featured_orbit_arrows__KwFqM::before");
    };

    const arrowsMoveRight = ()=>{
        gsap.to([arrowBeforeElem, arrowAfterElem],{
            left: '+=100%',
            duration: 0.4,
            ease: 'linear'
        })
    };
    const arrowsMoveLeft=()=>{
        gsap.to([arrowBeforeElem, arrowAfterElem],{
            left: '-=100%',
            duration: 0.4,
            ease: 'linear'
        });
    };
    isMouseOver? arrowsMoveRight() : arrowsMoveLeft();
};

// animation of nav elem
export const navArrowAnimation =(isMouseOver, navStartupsElemRef, navElemRef)=>{
    const tl = gsap.timeline({
        defaults:{
            duration: 0.6,
            ease: 'power2.out'
        }
    });

    isMouseOver ?
        tl
            .to(navStartupsElemRef.current,{
                width: 0,
            })
            .to(navElemRef.current,{
                width: '16.666667%',
            },'-=0.6')
        :
        tl
            .to(navElemRef.current,{
                width: 0,
            })
            .to(navStartupsElemRef.current,{
                width: '16.666667%',
            },'-=0.6')
};
//Zoom in and out of featured project img 
export const zoomFeaturedProject =(isMouseOver, elem)=>{
    console.log('here');
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