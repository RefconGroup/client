import React from 'react'
import { Container, Row, Col, CardFooter } from 'reactstrap';
import { FooterTable } from './Table'

export function Footer() {
    
    return(
        <CardFooter>
        <Container>
            <Row>
                <Col></Col>
                <Col><FooterTable/></Col>
                <Col></Col>
            </Row>
        </Container>
    </CardFooter>
    )

}