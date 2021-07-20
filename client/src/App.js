import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CreateDog from "./components/CreateDog";
import DogDetail from "./components/DogDetail";
import PageError from "./components/PageError";
import * as actions from "./actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getDogs());
    dispatch(actions.getTemperaments());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route
          exact
          path="/home/:id"
          render={({ match }) => <DogDetail match={match.params.id} />}
        />
        <Route path="/create" component={CreateDog} />
        <Route component={PageError} />
      </Switch>
    </>
  );
}

export default App;
