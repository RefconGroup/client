import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RefconCarousell } from './Carousell';
import { RefconCard, RefconCard2, RefconCard3 } from './Card';
import {Quote, divStyle} from "./Quote"


function Home() {
    
    return(
        <div>
            <div className="sticky-top" style={divStyle}><Quote /></div>
        <RefconCarousell />
        <Container>
            <div style={{paddingTop: 15}}>
            <Row>
            <Col> <RefconCard /> </Col>
            <Col> <RefconCard2 /> </Col>
            <Col> <RefconCard3 /> </Col>
            </Row>
            </div>
        </Container>
        </div>
    )
}

export default Home;