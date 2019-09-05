import React, { useState, useEffect } from "react";
import * as dungeonMaps from "./dungeons/dungeonMaps";

const Map = ({ setBattleMode, setBoss, setCharMenuScreen }) => {
  const [map, setMap] = useState([]);
  useEffect(() => {
    setMap(dungeonMaps.DUNGEON0);
    document.getElementById("mapFrame").focus();
  }, []);

  const movementEngine = direction => {
    let mapArr = map;
    let parsedMap = [];
    let updatedMap = [];
    mapArr.forEach(line => parsedMap.push(line.split("")));
    let x = 0;
    let y = 0;
    let randomBattle = Math.floor(Math.random() * 20) + 1;

    for (let i = 0; i < parsedMap.length; i++) {
      for (let j = 0; j < parsedMap[i].length; j++) {
        if (parsedMap[i][j] === "@") {
          x = i;
          y = j;
        }
      }
    }

    const up = () => {
      if (parsedMap[x - 1][y] === " ") {
        parsedMap[x][y] = " ";
        x--;
        parsedMap[x][y] = "@";
        if (randomBattle === 1) setBattleMode(true);
      } else if (parsedMap[x - 1][y] === "*") {
        parsedMap[x][y] = " ";
        x--;
        parsedMap[x][y] = "@";
        setBoss("Death God");
        setBattleMode(true);
      } else if (parsedMap[x - 1][y] === "&") {
        parsedMap[x][y] = " ";
        x--;
        parsedMap[x][y] = "@";
        setBoss("Wraith");
        setBattleMode(true);
      } else if (parsedMap[x - 1][y] === "%") {
        parsedMap[x][y] = " ";
        x--;
        parsedMap[x][y] = "@";
        setBoss("Lich");
        setBattleMode(true);
      } else if (parsedMap[x - 1][y] === "!") {
        parsedMap[x][y] = " ";
        x--;
        parsedMap[x][y] = "@";
        setBoss("Ogre");
        setBattleMode(true);
      } else if (parsedMap[x - 1][y] === "^") {
        parsedMap[x][y] = " ";
        x--;
        parsedMap[x][y] = "@";
        alert("Congrats, you beat it!");
        window.location.href = "/";
      }
      parsedMap.forEach(line => updatedMap.push(line.join("")));
      setMap(updatedMap);
    };
    const down = () => {
      if (parsedMap[x + 1][y] === " ") {
        parsedMap[x][y] = " ";
        x++;
        parsedMap[x][y] = "@";
        if (randomBattle === 1) setBattleMode(true);
      } else if (parsedMap[x + 1][y] === "*") {
        parsedMap[x][y] = " ";
        x++;
        parsedMap[x][y] = "@";
        setBoss("Death God");
        setBattleMode(true);
      } else if (parsedMap[x + 1][y] === "&") {
        parsedMap[x][y] = " ";
        x++;
        parsedMap[x][y] = "@";
        setBoss("Wraith");
        setBattleMode(true);
      } else if (parsedMap[x + 1][y] === "%") {
        parsedMap[x][y] = " ";
        x++;
        parsedMap[x][y] = "@";
        setBoss("Lich");
        setBattleMode(true);
      } else if (parsedMap[x + 1][y] === "!") {
        parsedMap[x][y] = " ";
        x++;
        parsedMap[x][y] = "@";
        setBoss("Ogre");
        setBattleMode(true);
      } else if (parsedMap[x + 1][y] === "^") {
        parsedMap[x][y] = " ";
        x++;
        parsedMap[x][y] = "@";
        alert("Congrats, you beat it!");
        window.location.href = "/";
      }
      parsedMap.forEach(line => updatedMap.push(line.join("")));
      setMap(updatedMap);
    };
    const left = () => {
      if (parsedMap[x][y - 1] === " ") {
        parsedMap[x][y] = " ";
        y--;
        parsedMap[x][y] = "@";
        if (randomBattle === 1) setBattleMode(true);
      } else if (parsedMap[x][y - 1] === "*") {
        parsedMap[x][y] = " ";
        y--;
        parsedMap[x][y] = "@";
        setBoss("Death God");
        setBattleMode(true);
      } else if (parsedMap[x][y - 1] === "&") {
        parsedMap[x][y] = " ";
        y--;
        parsedMap[x][y] = "@";
        setBoss("Wraith");
        setBattleMode(true);
      } else if (parsedMap[x][y - 1] === "%") {
        parsedMap[x][y] = " ";
        y--;
        parsedMap[x][y] = "@";
        setBoss("Lich");
        setBattleMode(true);
      } else if (parsedMap[x][y - 1] === "!") {
        parsedMap[x][y] = " ";
        y--;
        parsedMap[x][y] = "@";
        setBoss("Ogre");
        setBattleMode(true);
      } else if (parsedMap[x][y - 1] === "^") {
        parsedMap[x][y] = " ";
        y--;
        parsedMap[x][y] = "@";
        alert("Congrats, you beat it!");
        window.location.href = "/";
      }
      parsedMap.forEach(line => updatedMap.push(line.join("")));
      setMap(updatedMap);
    };
    const right = () => {
      if (parsedMap[x][y + 1] === " ") {
        parsedMap[x][y] = " ";
        y++;
        parsedMap[x][y] = "@";
        if (randomBattle === 1) setBattleMode(true);
      } else if (parsedMap[x][y + 1] === "*") {
        parsedMap[x][y] = " ";
        y++;
        parsedMap[x][y] = "@";
        setBoss("Death God");
        setBattleMode(true);
      } else if (parsedMap[x][y + 1] === "&") {
        parsedMap[x][y] = " ";
        y++;
        parsedMap[x][y] = "@";
        setBoss("Wraith");
        setBattleMode(true);
      } else if (parsedMap[x][y + 1] === "%") {
        parsedMap[x][y] = " ";
        y++;
        parsedMap[x][y] = "@";
        setBoss("Lich");
        setBattleMode(true);
      } else if (parsedMap[x][y + 1] === "!") {
        parsedMap[x][y] = " ";
        y++;
        parsedMap[x][y] = "@";
        setBoss("Ogre");
        setBattleMode(true);
      } else if (parsedMap[x][y + 1] === "^") {
        parsedMap[x][y] = " ";
        y++;
        parsedMap[x][y] = "@";
        alert("Congrats, you beat it!");
        window.location.href = "/";
      }
      parsedMap.forEach(line => updatedMap.push(line.join("")));
      setMap(updatedMap);
    };

    if (direction === 38) {
      up();
    }
    if (direction === 40) {
      down();
    }
    if (direction === 37) {
      left();
    }
    if (direction === 39) {
      right();
    }
  };

  const handleKeyDown = event => {
    let keystroke = event.keyCode;

    // escape
    if (keystroke === 27) {
      setCharMenuScreen(true);
    } else movementEngine(keystroke);
  };

  const mapStyle = {
    background: "black",
    fontSize: "20px"
  };

  return (
    <div style={mapStyle} id="mapFrame" onKeyDown={handleKeyDown} tabIndex="0">
      {map.map(line => (
        <pre style={{ color: "white", margin: "0px" }}>{line}</pre>
      ))}
    </div>
  );
};

export default Map;
