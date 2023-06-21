import React from "react";
import headerImage from '../images/headerimg.jpg'
import { animated,useSpring  } from '@react-spring/web'



const Header = ()=>{
    const headerimg = {
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
        
    }
    const springs = useSpring({
        from: { fontSize: '0rem' },
        to: { fontSize: '5rem' },
        config: { duration: 1000 }
      })
    return(
        <>
       <div style={headerimg} className="    w-100 m-0 h-48  md:h-56 ">

<animated.h1 style={springs} className="md:text-9xl text-5xl drop-shadow-lg text-center m-auto pt-5 font-extrabold text-yellow-500 ">Blog App</animated.h1>
<p className="bg-black md:text-lg w-fit text-center m-auto mt-7 px-10 rounded text-white">By Bilal</p>
       </div>
        </>
    )
}

export default Header;