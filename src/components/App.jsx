import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home"
import { RefconNav } from './Nav';
import { RefconCarousell } from './Carousell';
import { RefconCard } from './Card';

function App(){
return(
<div>
  <BrowserRouter>
    <RefconNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact  path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
  </BrowserRouter>
</div>
)
}

export default App;