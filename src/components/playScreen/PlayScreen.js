import React, { useState, useEffect } from "react";
import Map from "../map/Map";
import Battle from "../battle/Battle";
import * as chars from "../characters/mainChar";

const PlayScreen = () => {
  const [character, setCharacter] = useState({});
  const [battleMode, setBattleMode] = useState(false);
  const [bossBattle, setBossBattle] = useState(false);
  useEffect(() => {
    setCharacter(chars.mainChar);
  }, []);

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
      <Map
        setCharacter={setCharacter}
        setBattleMode={setBattleMode}
        setBossBattle={setBossBattle}
      />
    </div>
  );
};

export default PlayScreen;
