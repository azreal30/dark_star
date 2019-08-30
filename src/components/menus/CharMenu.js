import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { charMenuDisplay } from "../../redux/actions/index";

const CharMenu = () => {
  const character = useSelector(state => state.character);
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementById("charMenuFrame").focus();
  }, []);

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      dispatch(charMenuDisplay(false));
    }
  };

  return (
    <div id="charMenuFrame" onKeyDown={handleKeyDown} tabIndex="0">
      <div>Character Stats</div>
      <ul>
        <li>Health: {character.hp}</li>
        <li>Level: {character.level}</li>
        <li>XP: {character.xp}</li>
        <li>To Level Up: {character.lvlUp}</li>
        <li>Strength: {character.str}</li>
        <li>Dexterity: {character.dex}</li>
        <li>Constitution: {character.con}</li>
        <li>Endurance: {character.end}</li>
        <li>Potions: {character.potions}</li>
        <li>Weapon: {character.equipment.weapon.name}</li>
        <li>Armor: {character.equipment.armor.name}</li>
      </ul>
    </div>
  );
};

export default CharMenu;
