import React, { Component } from "react";
import Api from "./Api.js";
import Devloper from "./Devloper.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path={"/"} component={Api} />
            <Route path={"/Devloper"} component={Devloper} />
            <Route path={"/Api"} component={Api} />
            {/* <Route path="/Cartnew" component={Cartnew} /> */}

          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
