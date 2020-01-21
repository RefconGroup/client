import React, { useState } from 'react'
import { Fade, Container, Row, Col, CardText, CardBody, Card, Button } from 'reactstrap'
import { AdminTable } from './Table'

const AdminPage = props => {
    const { services } = props
    const [fadeIn] = useState(true);

    return(
        <div>
        <Fade in={fadeIn}>
            <Card>
                <CardBody>
                    <h1>Welcome Admin!</h1>
                    <Button>Create a new Service</Button>
                </CardBody>
            </Card>
        <h3>Our Services</h3>
        <Container>
          <Row>
          {services[0] ? services.map( (service,i) => <Col   xs="6"><AdminTable key={i} service={service}/></Col>) : null}  
          </Row>
        </Container>
      </Fade>
    </div>
    )
}

export default AdminPage;