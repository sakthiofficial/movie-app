import { useState } from "react";
import { Movie } from './Movie';
import * as React from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { api } from "../api";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { blueGrey } from "@mui/material/colors";

export function Movies({ movieList, SetmovieList }) {
  let navigate2 = useNavigate();


  const getdata = (() => {

    fetch(`${api}/movies`).then((data) => data.json()).then((val) => SetmovieList(val));
  })
  let buttonBtn = (ele) => {

    fetch(`${api}/movies/${ele}`, {
      method: "DELETE",
    }).then(() => getdata());
    console.log(ele);

  };


  console.log(movieList);
  return (


    <div className='main'>


      <div className="Movie-cards">



        {/* {movieList ? movieList.map((val, index) => (<Movie _id={val._id} EditBtn={<span className="edit-btn" onClick={() => navigate2(`/movies/edit/${val._id}`)}><EditIcon /></span>} btn={<span className="delete-btn" onClick={() => buttonBtn(val._id)}><DeleteIcon /></span>} key={index} movie={val} />)) : <h1>No data</h1>} */}


      </div>
      {/* <Colors/> */}
    </div>



  );


}
