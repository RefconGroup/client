import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RefconCarousell } from './Carousell';
import { RefconCard } from './Card';
import { RefconMediaPanel } from './Media'

function Home() {
    
    return(
        <div>
        <RefconCarousell />
        <Container>
            <Row>
            <Col> <RefconCard /> </Col>
            <Col> <RefconCard /> </Col>
            <Col> <RefconCard /> </Col>
            </Row>
            <Row>
            <Col> <RefconMediaPanel /> </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home;