import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header/Header';
import ProfitLossPage from "./ProfitLossPage/ProfitLossPage/ProfitLossPage";
import HomePage from "./HomePage/HomePage";
import FormsRouter from "./Forms/FormsRouter";
import LaborSchedule from './LaborSchedule/LaborSchedule/LaborSchedule'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="App">
        <Switch>
        <Route path="/form/direct-labor">
            <LaborSchedule />
          </Route>
          <Route path="/form">
            <FormsRouter />
          </Route>
          <Route path="/p&l">
            <ProfitLossPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
