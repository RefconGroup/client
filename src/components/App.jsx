import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './About';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Admin from './Admin';
import NewService from './NewService';
import { RefconNav } from './Nav';
import { getAllServices, addService } from '../services/serviceServices';
import { Footer } from './Footer';

function App(){

  let [services, setServices] = useState([])

  function addNewService(event, props) {
		event.preventDefault()
		const form = event.target
		const service = {
			name: form.name.value,
			brief: form.brief.value,
			description: form.description.value
		}
		// call to server to add blog post
		addService(service).then((response) => {			
      const NewService = response
      console.log(NewService)
      props.history.push(`/services`)
		}).catch((error) => {				
			console.log(`An error occurred adding the service: ${error}`)
			
		})
  }
  
  useEffect( () => {
    getAllServices()
    .then(res => setServices(res))
    .catch((error) => {
      console.log(`Oops theres something wrong with this request. The error we got is : ${error}`)
    })
    console.log(services)
    return () => {}
  },)


return(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <RefconNav />
      <Switch>
        <Route exact path="/" component={Home} />
          <div>
          <Route exact path="/services" render={() => <Services services={services}/>}  /> 
          <Route exact path="/admin/new" render={(props) => <NewService {...props} addNewService={addNewService} />} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/admin" render={() => <Admin services={services}/>}  />
          </div>
      </Switch>
      <Footer/>
  </BrowserRouter>
 )
}

export default App;