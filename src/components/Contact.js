import React, { useState } from 'react';
import { Fade } from 'reactstrap';
import Quote from "./Quote"

const Contact = (props) => {

  const [fadeIn] = useState(true);
  return(
    <div>
      <Fade in={fadeIn}>
        <h3>Contact Us</h3>
      <Quote/>
      </Fade>
    </div>
  );
}

export default Contact;