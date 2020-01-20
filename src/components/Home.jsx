import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RefconCarousell } from './Carousell';
import { RefconCard, RefconCard2, RefconCard3 } from './Card';
import { Quote, divStyle } from "./Quote"


function Home() {
    
    return(
        <div>
        <div class="sticky-top" style={divStyle}>
            <div class="row" style={{marginRight: 0}}>
                <div class="col-md-3 col-md-offset-0"></div>
                <div class="col-md-3 col-md-offset-0"></div>
                <div class="col-md-3 col-md-offset-0"></div>
                <div class="col-md-3 col-md-offset-0">
                    <Quote />
                </div>
            </div>
        </div>
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