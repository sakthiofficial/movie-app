import { Likebtn } from "./Likebtn";
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import { ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ToggleButton from '@mui/material/ToggleButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';

/* components */

export function Movie({ movie, _id, btn, EditBtn }) {
  let [toggle, settoggle] = useState(true)
  let [btname, setbetname] = useState("hide")
  let navigate = useNavigate();
  const [formats, setFormats] = useState(() => ['italic', 'bold']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    settoggle(!toggle)
  };

  // console.log(id)



  return (
    <div className='movie-container'>
      <div className="movie-content">
        <div className='movie-pic'>
          <img src={movie.poster} alt="" />
        </div>
        <div className='movie-info'>
          <div className='movie-head'>
            <h4 className="movie-title">{movie.name}</h4>
            <p>{movie.rating}⭐</p>
          </div>
          <div className="movie-btn">
            <Likebtn />

            <div>
              <button className="url-btn" onClick={() => navigate(`${_id}`)}><SmartDisplayIcon className="video-label" /></button>
              <div className="toggle-btn">
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton value="italic" aria-label="bold">
                    <KeyboardArrowDownIcon className="arrow-label" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

            </div>
          </div>

          {toggle ? <p>{movie.summary}</p> : null}



          <div className="control-btn">
            <IconButton>
              {EditBtn}
            </IconButton>
            <IconButton>
              {btn}

            </IconButton>
          </div>

        </div>
      </div>

    </div>
  );
}
