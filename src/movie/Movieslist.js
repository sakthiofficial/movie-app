import { useState } from "react";
import { Movie } from './Movie';
import * as React from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { api } from "../api";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { blueGrey } from "@mui/material/colors";

export function Movies() {
  let navigate2 = useNavigate();
  let getdata = () => {

    fetch(`${api}/movies`).then((data) => data.json()).then((val) => SetmovieList(val));

  };
  useEffect(() => getdata, [])
  const [movieList, SetmovieList] = useState([]);


  let buttonBtn = (ele) => {

    fetch(`${api}/movies/${ele}`, {
      method: "DELETE",
    }).then(() => getdata());
    console.log(ele);

  };

  const [user, setuser] = useState()
  const getdata1 = (() => {

    fetch(`${api}/movies`).then((data) => data.json()).then((val) => SetmovieList(val));
  })
  useEffect(() => getdata1, [])
  return (


    <div className='main'>


      <div className="Movie-cards">




        {movieList.map((val, index) => (<Movie _id={val._id} EditBtn={<span className="edit-btn" onClick={() => navigate2(`/movies/edit/${val._id}`)}><EditIcon /></span>} btn={<span className="delete-btn" onClick={() => buttonBtn(val._id)}><DeleteIcon /></span>} key={index} movie={val} />))}


      </div>
      {/* <Colors/> */}
    </div>



  );


}
