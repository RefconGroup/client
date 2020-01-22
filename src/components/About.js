import React, { useState } from 'react';
import { Fade } from 'reactstrap';
import { AboutCard } from './Card'

const About = (props) => {

  const [fadeIn] = useState(true);
  return(
    <div>
      <Fade in={fadeIn}>
        <AboutCard/>
      </Fade>
    </div>
  );
}

export default About;