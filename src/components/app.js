import React from "react";
import Events from "./events";
import Header from "./header";
import SpotifyPlayer from "./spotify-player";
import Weather from "./weather";
import "./app.css";

function App() {
  return (
    <div className="topContainer">
      <div className="container">
        <Header />
        <Weather />
        
        <SpotifyPlayer />
      </div>
    </div>
  );
}

export default App;
