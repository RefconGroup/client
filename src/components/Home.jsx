import React from 'react';
import { Container, Row, Col, CardFooter } from 'reactstrap';
import { RefconCarousell } from './Carousell';
import { RefconCard, RefconCard2, RefconCard3 } from './Card';
import Quote from './Quote';
import { FooterTable } from './Table'



function Home() {
    
    return(
        <div>
        <Quote />
        <RefconCarousell />
        <Container>
            <Row>
            <Col> <RefconCard /> </Col>
            <Col> <RefconCard2 /> </Col>
            <Col> <RefconCard3 /> </Col>
            </Row>
        </Container>
        <CardFooter>
            <Container>
                <Row>
                    <Col></Col>
                    <Col><FooterTable/></Col>
                    <Col></Col>
                </Row>
            </Container>
        </CardFooter>
        </div>
    )
}

export default Home;