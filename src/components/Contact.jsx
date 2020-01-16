import React, { useState } from 'react';
import { Fade } from 'reactstrap';

const Contact = (props) => {

  const [fadeIn] = useState(true);
  return(
    <div>
      <Fade in={fadeIn}>
        <h3>Contact Us</h3>
          <p>Lorem Ipsum Dolor Sit Amet</p>
      </Fade>
    </div>
  );
}

export default Contact;