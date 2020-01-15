import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"
import { RefconNav } from './Nav';

function App() {

return(
<div>
  <BrowserRouter>
    <RefconNav />
      <Switch>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact  path="/services" component={Services}></Route>
        <Route exact path="/about" component={About} />
      </Switch>
  </BrowserRouter>
</div>
  )
}

export default App;