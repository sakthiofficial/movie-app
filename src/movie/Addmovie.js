import { useState } from "react";
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Formik, useFormik, validateYupSchema } from "formik";
import * as yup from "yup";
import { api } from "../api";



export function Addmovie() {

  let navigate1 = useNavigate();

  const addMovieVali = yup.object({
    name: yup.string().min(2).required("Name"),
    summary: yup.string().min(5),
    poster: yup.string().min(4).url(),
    rating: yup.number().min(0).max(10),
    trailer: yup.string().min(4).url(),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      summary: "",
      rating: "",
      trailer: "",
    },

    validationSchema: addMovieVali,
    onSubmit: (values) => {

      fetch(`${api}/movies/add`, {
        method: "POST",
        headers: { "Content-type": "application/json" },

        body: JSON.stringify(values),
      }).then(() => navigate1("/movies"));
    },

  }
  )




  const styles = {
    "color": "red"
  }
  console.log(formik.errors.name);
  return (
    <div className="movie-form">
      <form onSubmit={formik.handleSubmit} className='add-btn'>
        <TextField type="text" id="standard-basic" value={formik.values.name} name="name" label={formik.errors.name ? formik.errors.name : "Name"} onChange={formik.handleChange} variant="standard" />

        <TextField id="standard-basic" value={formik.values.poster} name="poster" label={formik.errors.poster ? formik.errors.poster : "Poster"} onChange={formik.handleChange} variant="standard" />
        <TextField id="standard-basic" value={formik.values.rating} name="rating" label={formik.errors.rating ? formik.errors.rating : "Rating"} onChange={formik.handleChange} variant="standard" />
        <TextField id="standard-basic" value={formik.values.summary} name="summary" label={formik.errors.summary ? formik.errors.summary : "About Movie"} onChange={formik.handleChange} variant="standard" />
        <TextField id="standard-basic" value={formik.values.trailer} name="trailer" label={formik.errors.trailer ? formik.errors.trailer : "Trailer"} onChange={formik.handleChange} variant="standard" />





        <Button type="submit " variant="contained">Add Movie</Button>

        <Button onClick={() => navigate1(-1)} variant="contained">Back </Button>
      </form>
    </div>
  );
}

