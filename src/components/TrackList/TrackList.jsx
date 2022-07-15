import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTracks } from "../../reducers/tracks/tracksSlice";
import { getUpdatedTracksAfterClosing, saveTracksOnClosing } from "../../helpers/trackHelper";
import Track from "../Track/Track";

const TrackList = () => {
  const dispatch = useDispatch();
  const { tracks } = useSelector((state) => state.tracks);

  useEffect(() => {
    const storedTracks = JSON.parse(localStorage.getItem("tracks"));
    if (storedTracks) {
      const modifiedTracks = getUpdatedTracksAfterClosing(storedTracks)
      dispatch(setTracks(modifiedTracks));
    }
  }, []);

  useEffect(() => {
    const closeBrowserTab = window.addEventListener("beforeunload", () => saveTracksOnClosing(tracks));

    return () => {
      window.removeEventListener("beforeunload", closeBrowserTab);
    };
  }, [tracks]);
  
  return (
    <ul className="track-list">
      {tracks.map(({ id, trackName, isActive, time }) => (
        <Track key={id} id={id} trackName={trackName} isActive={isActive} time={time} />
      ))}
    </ul>
  );
};

export default TrackList;
