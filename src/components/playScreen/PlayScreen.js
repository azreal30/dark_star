import React, { useEffect } from "react";
import Map from "../map/Map";
import Battle from "../battle/Battle";
import { useSelector, useDispatch } from "react-redux";
import { gameStarted } from "../../redux/actions/index";
import CharMenu from "../menus/CharMenu";

const PlayScreen = () => {
  const charMenuScreen = useSelector(state => state.charMenuScreen);
  const battleMode = useSelector(state => state.battleMode);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameStarted(true));
  }, [dispatch]);

  return (
    <div>
      <h2>Dark Star</h2>
      {battleMode && <Battle />}
      {!battleMode && charMenuScreen && <CharMenu />}
      {!battleMode && !charMenuScreen && <Map />}
    </div>
  );
};

export default PlayScreen;
