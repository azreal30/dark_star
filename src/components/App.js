import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import MainMenu from "./mainMenu/MainMenu";
import PlayScreen from "./playScreen/PlayScreen";
import Menu from "./common/Menu";
import WhatYouDoingBuddy from "./WhatYouDoingBuddy";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <div className="container-fluid">
      {gameStarted && <Menu setGameStarted={setGameStarted} />}
      <Switch>
        <Route
          exact
          path="/"
          render={() => <MainMenu setGameStarted={setGameStarted} />}
        />
        <Route
          path="/playscreen"
          render={() => <PlayScreen setGameStarted={setGameStarted} />}
        />
        <Route component={WhatYouDoingBuddy} />
      </Switch>
    </div>
  );
}

export default App;
