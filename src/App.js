import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import IntroPage from "./page/IntroPage";
import GlobalStyle from "./components/GlobalStyle";
import ScrollText from "./components/ScrollText";
import SkillsPage from "./page/SkillsPage";
import ProjectsPage from "./page/ProjectsPage";
import ExamPage from "./page/ExamPage";
import DetailedSkillsPage from "./page/DetailedSkillsPage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>
        <Route>
          <IntroPage />
          <ScrollText />
          <SkillsPage />
          <ProjectsPage />
        </Route>
        <Route path="/Exam" exact>
          <ExamPage />
        </Route>
        <Route path="/StableMatch" exact>
          <ExamPage />
        </Route>
        <Route path="/CLNx" exact>
          <ExamPage />
        </Route>
        <Route path="/Pulsate" exact>
          <ExamPage />
        </Route>
        <Route path="/Mattify" exact>
          <ExamPage />
        </Route>
        <Route path="/Bot" exact>
          <ExamPage />
        </Route>
        <Route path="Skills" exact>
          <DetailedSkillsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
