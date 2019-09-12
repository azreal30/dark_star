import * as actions from "../constants/action-types";

export function updateCharacter(payload) {
  return { type: actions.UPDATE_CHARACTER, payload };
}

export function gameStarted(payload) {
  return { type: actions.SET_GAME_STARTED, payload };
}

export function battleMode(payload) {
  return { type: actions.SET_BATTLE_MODE, payload };
}

export function bossFight(payload) {
  return { type: actions.SET_BOSS, payload };
}

export function charMenuDisplay(payload) {
  return { type: actions.SET_CHAR_MENU, payload };
}

export function setMap(payload) {
  return { type: actions.SET_MAP, payload };
}
