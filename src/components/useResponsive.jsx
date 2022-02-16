import {useState, useEffect} from 'react'

function useResponsive() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [screenType, setScreenType] = useState('INITIAL');


    useEffect(() => {
        window.addEventListener("resize", updateWindowWidth);

        return function cleanup() {
            window.removeEventListener("resize", updateWindowWidth);
        }

    }, []);


    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);

        if(window.innerWidth > 1024) {
            setScreenType("DESKTOP");
        } else if(window.innerWidth <= 1024 && window.innerWidth > 800) {
            setScreenType("TABLET");
        } else {
            setScreenType("MOBILE");
        }
    }


    return {
        windowWidth,
        screenType
    }
}



export default useResponsive;
