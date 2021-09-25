import React from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "./Container/HomePage"
import MoreInfo from "./Container/MoreInfo"
// import AboutMe from "./Container/AboutMe"
import NavBar from "./Layouts/NavBar";

function App() {
  return (
   <div> 
    
    
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/moreinfo" component={MoreInfo} />
          {/* <Route path="/aboutme" component={AboutMe} /> */}
          <a href="https://www.facebook.com/comatthon69/">About Me</a>

        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
