import React from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "./Container/HomePage"

function App() {
  return (
   <div> 
    
     
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/home" component={Home} /> */}
         {/* <Route path="/aboutus" component={About us} /> */}

        </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
