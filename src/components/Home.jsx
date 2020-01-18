import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RefconCarousell } from './Carousell';
import { RefconCard, RefconCard2, RefconCard3 } from './Card';

function Home() {
    
    return(
        <div>
        <RefconCarousell />
        <Container>
            <Row>
            <Col> <RefconCard /> </Col>
            <Col> <RefconCard2 /> </Col>
            <Col> <RefconCard3 /> </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home;