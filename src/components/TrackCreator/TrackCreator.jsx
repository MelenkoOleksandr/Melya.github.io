import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { addTrack } from "../../reducers/tracks/tracksSlice";
import "./TrackCreator.scss";

const TrackCreator = () => {
    const [trackName, setTrackName] = useState('');
    const dispatch = useDispatch()

    const handleTrackChange = event => {
        setTrackName(event.target.value)
    }

    const handleNewTrack = () => {
      dispatch(addTrack({id: trackName, trackName}))
      setTrackName('')
    }
    
  return (
    <div className="creator">
      <input placeholder="Enter track name" className='creator-input' type="text" value={trackName} onChange={handleTrackChange} />
      <button onClick={handleNewTrack}>add</button>
    </div>
  );
}

export default TrackCreator