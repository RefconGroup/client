import React from 'react';


const Services = props => {
  const { services } = props
  
  // Checks that services are being sent by the server
  console.log("services in services component", services)  

  
  return (
    <div>
      <h3>Our Services</h3>
      {services[0] ? services.map( service => <p>{service.name}</p>) : null};    
    </div>
  ) 
};

export default Services;