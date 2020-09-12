import React from "react";
// import Auth from "./components/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OtpScreen from "./components/OtpScreen";
import Sign from "./components/Sign";
import Success from "./components/Success";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        
        <Route exact path="/" component={Sign} />
        <Route exact path="/verify" component={OtpScreen} />
        <Route exact path="/success" component={Success} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
