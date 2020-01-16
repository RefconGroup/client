import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { RefconNav } from './Nav';
import RefconCarousell from './Carousell';


const divStyle = {
  marginLeft: 30,
  marginRight: 30,
}

function App(){
return(
  <BrowserRouter>
    <RefconNav />
      <Switch>
        <Route exact path="/" component={RefconCarousell} />
        <div style={divStyle}>
          <Route exact  path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </div>
      </Switch>
  </BrowserRouter>
 )
}

export default App;