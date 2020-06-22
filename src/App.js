import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Step1 from "./pages/step1";
import Step2 from "./pages/step2";
import Step3 from "./pages/step3";
import Step4 from "./pages/step4";
import Step5 from "./pages/step5";
import StepButtons from "./components/step-buttons";
import Header from "./components/header";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Step1 />
        </Route>
        <Route path="/step2">
          <Step2 />
        </Route>
        <Route path="/step3">
          <Step3 />
        </Route>
        <Route path="/step4">
          <Step4 />
        </Route>
        <Route path="/step5">
          <Step5 />
        </Route>
      </Switch>
      {location.pathname !== "/step5" && <StepButtons />}
    </>
  );
}

export default App;
