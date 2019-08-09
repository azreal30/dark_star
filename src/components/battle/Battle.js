import React, { useState, useEffect } from "react";
import * as enemies from "./enemies/randos";
import * as bosses from "./enemies/bosses";

const Battle = ({
  character,
  bossBattle,
  setCharacter,
  setBattleMode,
  setBossBattle
}) => {
  const [art, setArt] = useState([]);
  const [enemy, setEnemy] = useState({});

  useEffect(() => {
    if (!bossBattle) {
      setArt(enemies.RATART);
      setEnemy(enemies.RAT);
    } else {
      setArt(bosses.LICHART);
      setEnemy(bosses.LICH);
    }
    document.getElementById("battleFrame").focus();
  }, [bossBattle]);

  const battleStyle = {
    background: "black",
    fontSize: "20px"
  };

  const handleBattleInput = event => {
    let enemyHp = enemy.hp;
    let characterHp = character.hp;
    let potionCount = character.potions;

    if (event.keyCode === 65) {
      // attack
      enemyHp -= character.equipment.weapon.dmg;

      if (enemyHp <= 0) {
        if (Math.random() >= 0.5) {
          potionCount++;
          setCharacter({ ...character, potions: potionCount });
          alert("You won and got a potion!");
        } else alert("You won!");
        setBattleMode(false);
        setBossBattle(false);
        document.getElementById("mapFrame").focus();
      } else {
        characterHp -= enemy.str;
        if (characterHp <= 0) {
          alert("You died!");
          window.location.href = "/";
        }
      }
      setEnemy({ ...enemy, hp: enemyHp });
      setCharacter({ ...character, hp: characterHp });
    } else if (event.keyCode === 68) {
      // defend
      characterHp -= enemy.str;

      if (characterHp <= 0) {
        alert("You died!");
        window.location.href = "/";
      }
      setCharacter({ ...character, hp: characterHp });
    } else if (event.keyCode === 80) {
      // potion
      if (character.potions <= 0) {
        alert("No Potions!");
        characterHp -= enemy.str;
        setCharacter({ ...character, hp: characterHp });

        if (characterHp <= 0) {
          alert("You died!");
          window.location.href = "/";
        }
      } else {
        potionCount--;
        characterHp = character.maxHp;
        characterHp -= enemy.str;
        setCharacter({ ...character, hp: characterHp, potions: potionCount });
      }
    }
  };

  return (
    <div
      style={battleStyle}
      id="battleFrame"
      onKeyDown={handleBattleInput}
      tabIndex="0"
    >
      <div>
        <p style={{ color: "white", margin: "0px" }}>
          A vicious {enemy.name} attacks you!
        </p>
      </div>
      {art.map(line => (
        <pre style={{ color: "white", margin: "0px" }}>{line}</pre>
      ))}
      <div>
        <span style={{ color: "white", margin: "0px" }}>
          Enemy Health: {enemy.hp}
        </span>
      </div>
      <div>
        <span style={{ color: "white", margin: "0px" }}>
          Character Health: {character.hp}
        </span>
      </div>
      <div>
        <span style={{ color: "white", margin: "0px" }}>
          Potions: {character.potions}
        </span>
      </div>
      <div>
        <div style={{ color: "white", margin: "0px" }}>
          What would you like to do?
        </div>
        <ul style={{ color: "white", margin: "0px" }}>
          <li>Attack (A)</li>
          <li>Defend (D)</li>
          <li>Potion (P)</li>
        </ul>
      </div>
    </div>
  );
};

export default Battle;
