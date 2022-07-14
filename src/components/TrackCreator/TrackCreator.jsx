import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTrack } from "../../reducers/tracks/tracksSlice";
import "./TrackCreator.scss";
import { FaPlayCircle } from "react-icons/fa";

const TrackCreator = () => {
    const [trackName, setTrackName] = useState('');
    const dispatch = useDispatch()

    const handleTrackChange = event => {
        setTrackName(event.target.value)
    }

    const handleNewTrack = () => {
      dispatch(addTrack({id: trackName, trackName, time: 0, isActive: true}))
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