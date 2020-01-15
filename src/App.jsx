import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./About"
import Services from "./Services"

function App() {

return(
  <BrowserRouter>
    <Switch>
      <Route exact  path="/services" component={Services}></Route>
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
