import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { FaPlayCircle } from "react-icons/fa";
import { addTrack } from "../../reducers/tracks/tracksSlice";
import { getCurrentDate } from "../../helpers/timeHelper";
import "./TrackCreator.scss";

const TrackCreator = () => {
    const [trackName, setTrackName] = useState('');
    const dispatch = useDispatch()
    
    const handleTrackChange = event => {
        setTrackName(event.target.value)
    }

    const handleNewTrack = () => {
      let validatedTrackName = trackName;
      if (!validatedTrackName) {
        validatedTrackName = getCurrentDate();
      }
     
      dispatch(
        addTrack({
          id: nanoid(),
          trackName: validatedTrackName,
          time: 0,
          isActive: true,
        })
      );
      setTrackName('')
    }
    
  return (
    <div className="creator">
        <input
          placeholder="Enter track name"
          className="creator-input"
          type="text"
          value={trackName}
          onChange={handleTrackChange}
        />
        <button className="creator-btn" onClick={handleNewTrack}>
          <FaPlayCircle />
        </button>
    </div>
  );
}

export default TrackCreator