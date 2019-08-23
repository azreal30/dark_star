import React, { useState, useEffect } from "react";
import * as dungeonMaps from "./dungeons/dungeonMaps";

const Map = ({ setBattleMode, setBoss, setCharMenuScreen }) => {
  const [map, setMap] = useState([]);
  useEffect(() => {
    setMap(dungeonMaps.DUNGEON0);
    document.getElementById("mapFrame").focus();
  }, []);

  const handleKeyDown = event => {
    let mapArr = map;
    let parsedMap = [];
    let updatedMap = [];
    mapArr.forEach(line => parsedMap.push(line.split("")));
    let x = 0;
    let y = 0;
    let randomBattle = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < parsedMap.length; i++) {
      for (let j = 0; j < parsedMap[i].length; j++) {
        if (parsedMap[i][j] === "@") {
          x = i;
          y = j;
        }
      }
    }

    if (event.keyCode === 27) {
      setCharMenuScreen(true);
    }
    if (event.keyCode === 38) {
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
    }
    if (event.keyCode === 40) {
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
    }
    if (event.keyCode === 37) {
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
    }
    if (event.keyCode === 39) {
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
    }
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