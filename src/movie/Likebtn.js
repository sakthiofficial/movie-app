import { useState } from "react";
import * as React from 'react';
import { Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// hooks

export function Likebtn() {
  let [disLike, setdisLike] = useState(0);
  let [like, setLike] = useState(0);
  let colors = {
    color: disLike > 10 ? "#a02020" : "",
  };
  let likeclr = {
    color: like > 10 ? "#7986cb" : ""
  }

  return (
    <div className="btn">
      <IconButton className="like-btn">
        <button style={likeclr} onClick={() => setLike(like + 1)}>👍{like}</button>
      </IconButton>
      <IconButton className="like-btn" aria-label="delete" size="small">
        <button style={colors} onClick={() => setdisLike(disLike + 1)}>👎{disLike}</button>
      </IconButton>

    </div>
  );
}
