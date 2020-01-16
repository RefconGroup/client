import React, { useState } from 'react';
import { Fade } from 'reactstrap';

const Services = props => {
  const { services } = props

  const [fadeIn] = useState(true);
  return(
    <div>
      <Fade in={fadeIn}>
        <h3>Our Services</h3>
          {services[0] ? services.map( service => <p>{service.name}</p>) : null}    
      </Fade>
    </div>
  );
}

// export default About;


// const Services = props => {
//   const { services } = props
  
//   // Checks that services are being sent by the server
//   console.log("services in services component", services)  

  
//   return (
//     <div>

//     </div>
//   ) 
// };

export default Services;