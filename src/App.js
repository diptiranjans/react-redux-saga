import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./container/Header";
import MainContent from "./container/MainContent";
import Footer from "./container/Footer";

import Enterprise from "./components/Enterprise";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import SignUp from "./components/SignUp";
import NoMatch from "./components/NoMatch";

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/enterprise">
          <Enterprise />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

      {/* <MainContent /> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
