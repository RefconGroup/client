import React from 'react';
import { Container, Row } from 'reactstrap';
import { RefconCarousell } from './Carousell';
import { RefconCard, RefconCard2, RefconCard3 } from './Card';
import Quote from "./Quote"


function Home() {
    
    return(
        <div>
        <RefconCarousell />
        <Container fluid>
            <div style={{paddingTop: 15}}>
            <Row style={{width: "125"}}>
                <div className="col-xs-6 col-sm-3" style={{padding: 15}}><RefconCard /></div>
                <div className="col-xs-6 col-sm-3" style={{padding: 15}}><RefconCard2 /></div>
                <div className="col-xs-6 col-sm-3" style={{padding: 15}}><RefconCard3 /></div>
                <div className="col-xs-6 col-sm-3" style={{padding: 15}}><Quote /></div>
            </Row>
            </div>
        </Container>
        </div>
    )
}

export default Home;