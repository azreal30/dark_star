import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MainMenu = ({ setGameStarted }) => {
  useEffect(() => {
    setGameStarted(false);
  }, [setGameStarted]);
  return (
    <div className="jumbotron">
      <h1>Welcome to the void!</h1>
      <p>
        You are a retired adventurer. You have filled your existence since
        retiring with farming and filling out a peaceful, if boring, life. After
        a rough time sleeping one night, you awake in an unfamiliar place. It is
        a dark and gloomy place, not too dissimilar to places you used to visit
        when you were active. You decide to get up and investigate what has
        happened to you.
        <br />
        <br />
        <strong>
          <em>
            <u>Instructions:</u>
          </em>
        </strong>
        <br />
        Use the{" "}
        <font color="red">
          <strong>ARROW</strong>
        </font>{" "}
        keys on the map screen to navigate, you are the{" "}
        <font color="red">
          <strong>@</strong>
        </font>{" "}
        symbol. When in battle, use the "
        <font color="red">
          <strong>A</strong>
        </font>
        " key to attack, the "
        <font color="red">
          <strong>D</strong>
        </font>
        " key to defend, and the "
        <font color="red">
          <strong>P</strong>
        </font>
        " key to use a potion if you have any. Press the{" "}
        <font color="red">
          <strong>ESC</strong>
        </font>{" "}
        key on the map to diplay your stats.
        <br />
        <br />
        <font color="red">
          <strong>!</strong>
        </font>
        ,{" "}
        <font color="red">
          <strong>&</strong>
        </font>
        ,{" "}
        <font color="red">
          <strong>%</strong>
        </font>
        , and{" "}
        <font color="red">
          <strong>*</strong>
        </font>{" "}
        are all symbols for the bosses. They increase in difficulty in that
        order, but they boost your stats on defeat.
      </p>
      <Link to="playScreen" className="btn btn-primary btn-lg">
        Start Game
      </Link>
    </div>
  );
};

export default MainMenu;
