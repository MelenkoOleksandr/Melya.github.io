import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTrack } from '../../reducers/tracks/tracksSlice';

const Track = ({id, trackName, time, isActive}) => {
  const dispatch = useDispatch()

  const handleTrackDelete = () => {
    dispatch(removeTrack(id))
  }
  return (
    <li className='track'>
      <div className="track-name">
        {trackName}
      </div>

      <div className="track-details">
        <div className="time">{time}</div>
        <div className="active">
          {isActive ? "active" : 'not active'}
        </div>
        <button onClick={handleTrackDelete}>Remove</button>
      </div>
    </li>
  )
}

Track.propTypes = {
  id: PropTypes.string,
  trackName: PropTypes.string,
  time: PropTypes.string,
};

Track.defaultProps = {
  id: "",
  trackName: "",
  time: "00:00:00",
  isActive: false,
};


export default Track