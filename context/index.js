import { useEffect, createContext, useContext, useState, useRef } from 'react'

const ThemeContext = createContext();
const ScreenSizeContext = createContext();

export const ContextProvider = ({children})=>{
    // let isDarkMode = useRef(null);
    const [isDarkMode, setDarkMode] = useState(false);

    let isMobileScreen = useRef(null);

    useEffect(()=>{
        //Set default theme from browser information at mount time and theme changed
        window.matchMedia("(prefers-color-scheme: dark)").matches ? setDarkMode(true): setDarkMode(false);
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            event.matches ? setDarkMode(true) : setDarkMode(false);
        });

        return()=>{
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', event => {
                event.matches ? setDarkMode(true) : setDarkMode(false);
            });
        }
    },[]);
    useEffect(()=>{
        //Set default screen size from browser information at mount time and resize
        const handleScreenSize =()=>{
            window.innerWidth && window.innerWidth <= 1024 ? isMobileScreen.current = true : isMobileScreen.current =false;
        }

        handleScreenSize();
        window.addEventListener('resize', handleScreenSize);
        return()=>{
            window.removeEventListener('resize', handleScreenSize);
        }
    },[])
    return(
        <ScreenSizeContext.Provider value={isMobileScreen}>
            <ThemeContext.Provider value={isDarkMode}>
                {children}
            </ThemeContext.Provider>
        </ScreenSizeContext.Provider>
    )
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
export function useScreenSizeContext() {
  return useContext(ScreenSizeContext);
}