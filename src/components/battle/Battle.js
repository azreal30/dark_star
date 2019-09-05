import React, { useState, useEffect } from "react";
import * as enemies from "./enemies/randos";
import * as bosses from "./enemies/bosses";

const Battle = ({ character, boss, setCharacter, setBattleMode, setBoss }) => {
  const [art, setArt] = useState([]);
  const [enemy, setEnemy] = useState({});
  const [characterInstance, setCharacterInstance] = useState(character);

  useEffect(() => {
    let enemyInstance;
    let enemyArtInstance;
    if (boss === "") {
      const r1 = Math.floor(Math.random() * 10) + 1;
      if (r1 >= 2 && r1 <= 4) {
        enemyArtInstance = enemies.GHOULART;
        enemyInstance = enemies.GHOUL;
      } else if (r1 === 1) {
        enemyArtInstance = enemies.SKELETONART;
        enemyInstance = enemies.SKELETON;
      } else {
        enemyArtInstance = enemies.RATART;
        enemyInstance = enemies.RAT;
      }
    } else {
      if (boss === "Ogre") {
        enemyArtInstance = bosses.OGREART;
        enemyInstance = bosses.OGRE;
      }
      if (boss === "Wraith") {
        enemyArtInstance = bosses.WRAITHART;
        enemyInstance = bosses.WRAITH;
      }
      if (boss === "Lich") {
        enemyArtInstance = bosses.LICHART;
        enemyInstance = bosses.LICH;
      }
      if (boss === "Death God") {
        enemyArtInstance = bosses.DEATHGODART;
        enemyInstance = bosses.DEATHGOD;
      }
    }
    setArt(enemyArtInstance);
    setEnemy(enemyInstance);
    document.getElementById("battleFrame").focus();
  }, [boss]);

  const battleStyle = {
    background: "black",
    fontSize: "20px"
  };

  const handleBattleInput = event => {
    let command = event.keyCode;
    battleEngine(command);
  };

  const lvlUp = characterObj => {
    characterObj.level++;
    characterObj.maxHp += characterObj.con * 2;
    characterObj.hp = characterObj.maxHp;
    characterObj.str += 4;
    characterObj.dex += 2;
    characterObj.con += 4;
    characterObj.end += 3;
    characterObj.lvlUp += Math.floor(characterObj.lvlUp * 1.25);
  };

  const battleEngine = command => {
    let characterObj = { ...characterInstance };
    let enemyObj = { ...enemy };
    let randDmg = Math.floor(Math.random() * 10) + 1;
    let characterDmg = characterObj.str * 2 + randDmg - enemyObj.end;
    let enemyDmg = enemyObj.str * 2 + randDmg - characterObj.end;
    if (characterDmg < 0) characterDmg = randDmg;
    if (enemyDmg < 0) enemyDmg = randDmg;

    const attack = () => {
      enemyObj.hp -= characterDmg;

      if (enemyObj.hp <= 0) {
        if (Math.random() >= 0.5) {
          characterObj.potions++;
          characterObj.xp += enemyObj.xp;
          alert("You won and got a potion!");
          if (characterObj.xp >= characterObj.lvlUp) {
            lvlUp(characterObj);
            alert(
              `Congrats, you've leveled up! You're now level: ${characterObj.level}`
            );
          }
          setCharacterInstance(characterObj);
          setCharacter(characterObj);
        } else {
          alert("You won!");
          characterObj.xp += enemyObj.xp;
          if (characterObj.xp >= characterObj.lvlUp) {
            lvlUp(characterObj);
            alert(
              `Congrats, you've leveled up! You're now level: ${characterObj.level}`
            );
          }
          setCharacterInstance(characterObj);
          setCharacter(characterObj);
        }
        if (boss === "Ogre") {
          characterObj.str += 20;
          characterObj.end += 20;
          alert(
            "After felling the ogre, a bright light surrounds and engulfs you. You now feel stronger and more durable!"
          );
        }
        if (boss === "Wraith") {
          characterObj.dex += 20;
          characterObj.con += 20;
          alert(
            "After dispatching the wraith, a spark of the magic running through it resolves and passes into you. You feel more nimble and hearty!"
          );
        }
        if (boss === "Lich") {
          characterObj.str += 20;
          characterObj.dex += 20;
          characterObj.con += 20;
          characterObj.end += 20;
          alert(
            "After weakinging the Lich and destroying its philactery, the souls used to keeps his corpse animated are finally released. As a reward, they cast a boon on you. You feeling amazing overall!"
          );
        }
        setBoss("");
        setBattleMode(false);
        document.getElementById("mapFrame").focus();
      } else {
        characterObj.hp -= enemyDmg;
        if (characterObj.hp <= 0) {
          alert("You died!");
          window.location.href = "/";
        }
        setEnemy(enemyObj);
        setCharacterInstance(characterObj);
        setCharacter(characterObj);
      }
    };
    const defend = () => {
      characterObj.hp -= Math.floor(enemyDmg / 2);

      if (characterObj.hp <= 0) {
        alert("You died!");
        window.location.href = "/";
      }
      setCharacterInstance(characterObj);
      setCharacter(characterObj);
    };
    const potion = () => {
      if (characterObj.potions <= 0) {
        alert("No Potions!");
        characterObj.hp -= enemyDmg;

        if (characterObj.hp <= 0) {
          alert("You died!");
          window.location.href = "/";
        }
        setCharacterInstance(characterObj);
        setCharacter(characterObj);
      } else {
        characterObj.potions--;
        characterObj.hp = characterObj.maxHp;
        characterObj.hp -= enemyDmg;
        if (characterObj.hp <= 0) {
          alert("You died!");
          window.location.href = "/";
        }
        setCharacterInstance(characterObj);
        setCharacter(characterObj);
      }
    };

    if (command === 65) attack();
    if (command === 68) defend();
    if (command === 80) potion();
  };

  return (
    <div
      style={battleStyle}
      id="battleFrame"
      onKeyDown={handleBattleInput}
      tabIndex="0"
    >
      <div>
        <p style={{ color: "white", margin: "0px" }}>{enemy.desc}</p>
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
          Character Health: {characterInstance.hp}
        </span>
      </div>
      <div>
        <span style={{ color: "white", margin: "0px" }}>
          Potions: {characterInstance.potions}
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
