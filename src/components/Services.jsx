import React, { useState } from 'react';
import { Fade, Container, Row } from 'reactstrap';

import ServiceCard from './Service'

export const Services = props => {
  const { services } = props
  const [fadeIn] = useState(true);

  return(
    <div>
      <Fade in={fadeIn}>
        <h3>Our Services</h3>
        <Container fluid>
          <Row>
          {services[0] ? services.map( (service,i) => <div className="col-md-6" style={{padding: 15}}><ServiceCard key={i} service={service}/></div>) : null}  
          </Row>
        </Container>
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