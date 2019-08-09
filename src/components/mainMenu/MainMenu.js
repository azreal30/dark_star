import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="jumbotron">
      <h1>Welcome to the void!</h1>
      <p>
        You are a retired adventurer. You have filled your existence since
        retiring with farming and filling out a peaceful, if boring, life. After
        a rought time sleeping one night, you awake in an unfamiliar place. It
        is a dark and gloomy place, not too dissimilar to places you used to
        visit when you were active. You decide to get up and investigate what
        has happened to you.
      </p>
      <Link to="playScreen" className="btn btn-primary btn-lg">
        Start Game
      </Link>
    </div>
  );
};

export default MainMenu;
