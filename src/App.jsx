import React from "react";
import TrackCreator from "./components/TrackCreator/TrackCreator";
import "./App.scss";
import TrackList from "./components/TrackList/TrackList";

const App = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>tracker</h1>
        <TrackCreator />
        <TrackList />
      </div>
    </div>
  );
};

export default App;
