import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeTrack, updateTrack } from "../../reducers/tracks/tracksSlice";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import "./Track.scss";
import { parseSecondsToTimeString } from "../../helpers/timeHelper";

const Track = ({ id, trackName, time, isActive }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    let updateTime = null;

    if (isActive) {
      updateTime = setTimeout(() => {
        dispatch(updateTrack({ id, trackName, time: time + 1, isActive }));
      }, 1000);
    } else {
      clearTimeout(updateTime);
    }

    return () => {
      clearTimeout(updateTime);
    };
  }, [time, isActive]);

  const handleTrackDelete = () => {
    dispatch(removeTrack(id));
  };

  const toggleTrackActive = () => {
    dispatch(
      updateTrack({ id, trackName, time, isActive: !isActive })
    );
  };

  return (
    <li className={`track ${isActive ? "active" : ""}`}>
      <div className="track-name">{trackName}</div>

      <div className="track-details">
        <div className="time">{parseSecondsToTimeString(time)}</div>
        <button className="active" onClick={toggleTrackActive}>
          {isActive ? <BsPauseCircle /> : <BsPlayCircle />}
        </button>
        <button className="delete-btn" onClick={handleTrackDelete}>
          <BiMinusCircle />
        </button>
      </div>
    </li>
  );
};

Track.propTypes = {
  id: PropTypes.string,
  trackName: PropTypes.string,
  time: PropTypes.number,
  isActive: PropTypes.bool,
  prevInteraction: PropTypes.object,
};

Track.defaultProps = {
  id: "",
  trackName: "",
  time: 0,
  isActive: false,
};

export default Track;
