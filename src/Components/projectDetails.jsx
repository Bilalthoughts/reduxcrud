import React from "react";
import { useSpring, animated } from '@react-spring/web'


const ProjectDetails = ()=>{


    const fade = useSpring({
        from:{opacity: 0},
        to: {opacity:1},
        config: {duration: 2000}
      })
    return(
        <>
        <animated.div style={fade} className="text-center container px-20 m-auto mt-10 ">
            <p className="text-center underline text-lg font-bold">About Project </p>
            <p className="text-lg">
            Redux Toolkit CRUD project using React Hooks working with Rest API, displaying and modifying data with Router, Axios, createAsyncThunk, and Tailwind CSS.
            </p>
        </animated.div>
        </>
    )
}
export default ProjectDetails;