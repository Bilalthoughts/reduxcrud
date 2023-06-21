import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getdata } from "../features/blogSlice";
import { useSelector } from "react-redux";


const Popup = () => {
  const { id } = useParams(); // Destructure the id from useParams

  const userdata = useSelector(getdata);

  const filtered = userdata.filter((e) => e.id === Number(id)); // Use filter() to get matching objects

  const navigate = useNavigate();

  return (
    <>
      <div className="container my-5 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="bg-transparent py-2 px-4 border border-black font-semibold rounded hover:bg-yellow-500 hover:border-0 m-2"
        >
          Back
        </button>
        {filtered.length > 0 ? (
          <div>
            <p className="font-bold text-5xl mt-6">TITLE:</p>
            <h1 className="font-bold text-3xl mt-2 mb-10">{filtered[0].title}</h1>
            <hr className="border-black" />
            <p className="font-bold text-5xl mt-6">DESCRIPTION:</p>
            <p className="font-medium text-lg my-5 mx-auto">
            {filtered[0].body}
            </p>
          </div>
        ) : (
          <p>No matching data found.</p>
        )}
      </div>
    </>
  );
};

export default Popup;
