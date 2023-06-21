import React, { useEffect, useState } from "react";
import PostCard from "./postCard";
import { fetchUsers } from "../features/blogSlice";
import { useDispatch } from "react-redux";
import { getloading, getdata } from "../features/blogSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'

const DisplayPost = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getloading);
  let blog = useSelector(getdata);
  const [search, setSearch]= useState("")

  const bottomUP = useSpring({
    from:{y: 500},
    to: {y:0},
    config: {duration: 1000}
  })
  
  const handleSearch=()=>{

    
    if(search){
      blog = blog.filter((e)=> e.title.includes(search))
    }
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <>
      <div className="container max-h-100   text-center mt-8 m-auto">

        <div className="flex flex-nowrap m-auto  justify-around">
       <div >
       <input
       onChange={(e)=>setSearch(e.target.value) }
       value={search}
          placeholder="Search..."
          type="text"
          className="bg-transparent placeholder:text-black border py-2 rounded px-4 m-2 border-black"
        />
       </div>
        <div >
        
        <p className="text-lg font-bold"> <button
          onClick={() => navigate("/addPost")}
          className="bg-transparent m-2 hover:bg-yellow-500  text-black font-semibold hover:text-white text-sm  py-2 px-4 border border-black hover:border-transparent rounded "
        >
          Create Post
        </button> </p><div>Total: {blog.length} </div>
        
        
        </div>

        </div>


        <animated.div style={bottomUP} className="flex justify-center flex-wrap  " >
         


          {(blog.length > 0 ?  blog.filter((payload)=> payload.title.includes(search) || payload.body.includes(search)).slice(0, 20).map((payload) => {
            return <PostCard key={payload.id} id={payload.id}  title={payload.title.substring(0, 20)} 
            body={payload.body.substring(0,28)}
            />;
          }) : <p>no post found</p>)}
        </animated.div>
      </div>
    </>
  );
};

export default DisplayPost;
