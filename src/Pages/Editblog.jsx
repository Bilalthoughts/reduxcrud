import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { editUsers, getEditUser } from "../features/blogSlice";
import { useDispatch } from "react-redux";
import { getdata } from "../features/blogSlice"; 

const EditBlog = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    const viewData = useSelector(getdata);
    const filtered = viewData.filter((w)=>w.id === Number(id))

    const [title, setTitle] = useState(filtered[0].title);
    const [body, setBody] = useState(filtered[0].body);

  
   const handleChange=(e)=>{
    e.preventDefault();
    const payload={
      id,
      title,
      body
    }
    dispatch(editUsers(payload)).then(navigate('/'))
   }
    

   

    const navigate = useNavigate();
  return (
    <>





<div className="container mt-5 m-auto">
        <button
          onClick={() => navigate("/")}
          className="bg-transparent py-2 px-4 border border-black font-semibold rounded hover:bg-yellow-500 hover:border-0 m-2"
        >
          Back
        </button>

        <div className="text-center m-auto container rounded-xl p-9 mt-6 shadow-xl ">
         

        <form action="">
        <p className="font-bold text-lg ">Title</p>
        <input
          type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          className="w-60 h-10  my-2 shadow-xl rounded"
        />
        <p className="font-bold text-lg">Description</p>
        <textarea
          className="rounded-xl my-2 w-60  mx-auto shadow-xl "
          name=""
          id=""
          cols="80"
          rows="12"
          value={body}
          onChange={(e)=> setBody(e.target.value)}

        ></textarea>

        <br />
        <button
          onClick={handleChange}
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

export default EditBlog;
