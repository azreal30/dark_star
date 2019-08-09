import React from "react";
import { Route, Switch } from "react-router-dom";
import MainMenu from "./mainMenu/MainMenu";
import PlayScreen from "./playScreen/PlayScreen";
import Menu from "./common/Menu";
import WhatYouDoingBuddy from "./WhatYouDoingBuddy";

function App() {
  return (
    <div className="container-fluid">
      <Menu />
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/playscreen" component={PlayScreen} />
        <Route component={WhatYouDoingBuddy} />
      </Switch>
    </div>
  );
}

export default App;
