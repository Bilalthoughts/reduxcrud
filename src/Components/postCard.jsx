import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../features/blogSlice";


const PostCard = ({ title, body,id }) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="rounded-xl shadow-xl max-h-48 overflow-hidden bg-yellow-500 text-center px-0 p-3 pt-0 md:w-1/4 m-5" >
        <h1 className="text-lg font-bold pb-3 pt-4 mb-4 bg-black text-white">
          {title}
        </h1>
        <p className="">{body}</p>
        <button
          onClick={() => navigate(`/editpost/${id}`)}
          className="bg-transparent text-sm font-bold py-2 px-4  shadow-xl rounded  m-2"
        >
          Edit
        </button>
        <Link to={`/postdetail/${id}`}>
        
        
        <button
          // onClick={() => navigate(`/postdetail/${id}`)}
          className="bg-transparent text-green-800 text-sm font-bold py-2 px-4  shadow-xl rounded  m-2"
        >
          View
        </button>
        </Link>
        <button
          onClick={()=> dispatch(deleteUser(id))}
          className="bg-transparent text-red-700 text-sm font-bold py-2 px-4  shadow-xl rounded  m-2"
        >
          Delete
        </button>
        
        
      </div>
    </>
  );
};

export default PostCard;
