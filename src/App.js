import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import IntroPage from "./page/IntroPage";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>
        <Route path="" exact>
          <IntroPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
