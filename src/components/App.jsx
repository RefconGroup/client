import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home"
import { RefconNav } from './Nav';
import { getAllServices } from '../services/serviceServices'

function App(){

  let [services, setServices] = useState([])

  useEffect( () => {
    getAllServices()
    .then(res => setServices(res))
    .catch((error) => {
      console.log(`Oops theres something wrong with this request. The error we got is : ${error}`)
    })
    console.log(services)
    return () => {}
  },[])


return(
  <BrowserRouter>
    <RefconNav />
      <Switch>
        <Route exact path="/" component={Home} />
          <div>
            <Route exact  path="/services" render={() => <Services services={services}/>}  /> 
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </div>
      </Switch>
  </BrowserRouter>
 )
}

export default App;