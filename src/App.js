import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header/Header";
import LaborSchedule from "./LaborSchedule/LaborSchedule/LaborSchedule";
import FormsRouter from "./Forms/FormsRouter";
import ProfitLossPage from "./ProfitLossPage/ProfitLossPage/ProfitLossPage";
import Departments from "./Departments/Departments";
import Roles from "./Roles/Roles";
import HomePage from "./HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/schedule">
            <LaborSchedule />
          </Route>
          <Route path="/form">
            <FormsRouter />
          </Route>
          <Route path="/p&l">
            <ProfitLossPage />
          </Route>
          <Route path="/departments">
            <Departments />
          </Route>
          <Route path="/roles">
            <Roles />
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
