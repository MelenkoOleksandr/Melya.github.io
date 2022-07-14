import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTracks } from "../../reducers/tracks/tracksSlice";
import Track from "../Track/Track";

const TrackList = () => {
  const dispatch = useDispatch();
  const { tracks } = useSelector((state) => state.tracks);

  useEffect(() => {
    const storedTracks = JSON.parse(localStorage.getItem("tracks"));

    if (storedTracks) {
      const modifiedTracks = storedTracks.map( (track) => {
        if (track.isActive) {
          const additionalTime = dayjs().diff(track.previousInteraction, "s")
          return { ...track, time: track.time + additionalTime, previousInteraction: null };
        } 
        return track
      })
      dispatch(setTracks(modifiedTracks));
    }
  }, []);

  useEffect(() => {
    const closeBrowserTab = window.addEventListener("beforeunload", () => {
      localStorage.setItem("tracks", JSON.stringify(tracks.map( track => ({...track, previousInteraction: new Date()}))));
    });

    return () => {
      window.removeEventListener("beforeunload", closeBrowserTab);
    };
  }, [tracks]);
  
  return (
    <ul className="track-list">
      {tracks.map(({ id, trackName, isActive, time }) => (
        <Track id={id} trackName={trackName} isActive={isActive} time={time} />
      ))}
    </ul>
  );
};

export default TrackList;
