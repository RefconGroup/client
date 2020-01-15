import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./About"

function App() {

return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
