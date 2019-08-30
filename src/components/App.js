import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import MainMenu from "./mainMenu/MainMenu";
import PlayScreen from "./playScreen/PlayScreen";
import Menu from "./common/Menu";
import WhatYouDoingBuddy from "./WhatYouDoingBuddy";

function App() {
  const gameStarted = useSelector(state => state.gameStarted);
  return (
    <div className="container-fluid">
      {gameStarted && <Menu />}
      <Switch>
        <Route exact path="/" render={() => <MainMenu />} />
        <Route path="/playscreen" render={() => <PlayScreen />} />
        <Route component={WhatYouDoingBuddy} />
      </Switch>
    </div>
  );
}

export default App;
