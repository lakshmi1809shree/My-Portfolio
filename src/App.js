import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Is from "./pages";
import About from "./pages/about";
import Art from "./pages/art";
import Contact from "./pages/contact";
import Fusion360 from "./pages/fusion360";
import Poetry from "./pages/poetry";
import Webdev from "./pages/webdev";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Is} />
        <Route path="/about" component={About} />
        <Route path="/webdev" component={Webdev} />
        <Route path="/fusion360" component={Fusion360} />
        <Route path="/poetry" component={Poetry} />
        <Route path="/art" component={Art} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </Router>
      </>
  );
}

export default App;
