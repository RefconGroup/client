import React from "react"
import InfoCard from "./InfoCard"
import { Card } from 'reactstrap';


export const RefconCard = (props) => {
  return (
    <InfoCard
      img="https://workiz.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-13-at-21.36.23.png"
      cap="Card image cap"
      title="Why us?"
      subtitle="We are a very COOL company aha"
      body="please buy our airconditioners im going to lose the house"
      button="Button"
      />
  );
};

export const RefconCard2 = (props) => {
    return (
      <InfoCard
        img="https://moula.com.au/wp-content/uploads/2017/06/Tradie-Business-Loans-Moula-Feature.jpg"
        cap="Card image cap"
        title="Not sure?"
        subtitle="Not sure? Contact us for a free quote, whats the harm?"
        body="Click here for your free quote!"
        button="Quote!"
        />
    );
  };

  export const RefconCard3 = (props) => {
    return (
      <InfoCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-8h6dXDypByKfrEkNo1fVGCgJHsbufXqFweayqaKT1-aT7Nlrw&s"
        cap="Card image cap"
        title="Our Promise."
        subtitle="As a small business we pride our selves on our quality of service"
        body="Come give us a call or an email."
        button="Contact us"
        />
    );
  };

  export const AboutCard = (props) => {
    return (
      <InfoCard
      img="http://refcon.com.au/images/asc_logo.png"
      cap="Card image cap"
      title="REFCON Group"
      subtitle="The affordable specialists in commercial and residential air-conditioning solutions. We are specialised in all type of commercial and residential air-conditioning including cold rooms, freezer rooms, cold display cabinets, drink fridges, related electrical works and much more. We will guarantee high quality service with affordable solutions that keep our clients coming back. We offer regular and general maintenance and repair work on most common makes and models including but not limited to Carrier, Daikin, Toshiba, Fujitsu, Mitsubishi, Samsung, and LG etc. System types include ducted unit, high-wall split systems, room air conditioners and much more."
      body="Come give us a call or an email."
      button="Contact us"
       />
    );
  };

export default Card;