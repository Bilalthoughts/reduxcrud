import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../features/blogSlice";


const AddPost = () => {

    const uid = useId();
    const [title, setTitle]= useState('')
    const [body, setBody]= useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

const submitHandler = (e)=>{
    e.preventDefault();

if(title && body){
let payload ={
  id: uid,
    title: title,
    body: body
};

 dispatch(addUsers(payload)).then(navigate('/'))



}

}

  return (
    <>
      <div className="container m-auto my-5">
        <button
          onClick={() => navigate("/")}
          className="bg-transparent py-2 px-4 border border-black font-semibold rounded hover:bg-yellow-500 hover:border-0 m-2"
        >
          Back
        </button>

        <div className="text-center m-auto container rounded-xl p-9 mt-6 shadow-xl ">
          <form action="">
            <p className="font-bold text-lg ">Title</p>
            <input value={title} type="text" onChange={(e)=> setTitle(e.target.value)} className="w-60 h-10 shadow-xl rounded my-2" />
            <p className="font-bold text-lg">Description</p>
            <textarea
              className="rounded-xl my-2 w-60  mx-auto shadow-xl "
              name=""
              id=""
              value={body}
              onChange={(e)=>setBody(e.target.value)}

              cols="80"
              rows="12"
            ></textarea>

<br />
<button
          onClick={submitHandler}
          className="bg-transparent py-2 px-4 border border-black font-semibold rounded hover:bg-yellow-500 hover:border-0 m-2"
        >
          submit
        </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPost;
