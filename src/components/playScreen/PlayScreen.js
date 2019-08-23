import React, { useState, useEffect } from "react";
import Map from "../map/Map";
import Battle from "../battle/Battle";
import * as chars from "../characters/mainChar";
import CharMenu from "../menus/CharMenu";

const PlayScreen = ({ setGameStarted }) => {
  const [character, setCharacter] = useState({});
  const [battleMode, setBattleMode] = useState(false);
  const [bossBattle, setBossBattle] = useState(false);
  const [charMenuScreen, setCharMenuScreen] = useState(false);
  useEffect(() => {
    setCharacter(chars.mainChar);
    setGameStarted(true);
  }, [setGameStarted]);

  return (
    <div>
      <h2>Dark Star</h2>
      {(battleMode || bossBattle) && (
        <Battle
          character={character}
          bossBattle={bossBattle}
          setCharacter={setCharacter}
          setBattleMode={setBattleMode}
          setBossBattle={setBossBattle}
        />
      )}
      {!(battleMode || bossBattle) && charMenuScreen && (
        <CharMenu character={character} setCharMenuScreen={setCharMenuScreen} />
      )}
      <Map
        setCharacter={setCharacter}
        setBattleMode={setBattleMode}
        setBossBattle={setBossBattle}
        setCharMenuScreen={setCharMenuScreen}
      />
    </div>
  );
};

export default PlayScreen;
