import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./About";
import Services from "./Services";
import { RefconNav } from './Nav';
import RefconCarousell from './Carousell';

function App(){
return(
<div>
  <BrowserRouter>
    <RefconNav />
      <Switch>
        <Route exact path="/" component={RefconCarousell} />
        <Route exact  path="/services" component={Services} />
        <Route exact path="/about" component={About} />
      </Switch>
  </BrowserRouter>
</div>
)
}

export default App;