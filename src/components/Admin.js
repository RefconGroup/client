import React, { useState } from 'react'
import { Fade, Container, Row, CardBody, Card, Button } from 'reactstrap'
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
                    <Button href="/admin/new" data-cy="addService">Create a new Service</Button>
                </CardBody>
            </Card>
        <h3 style={{paddingLeft: 15}}>Our Services</h3>
        <Container>
            <Row>
            {services[0] ? services.map(
                (service,i) =>
                    <div className="col-md-6" style={{padding: 15}} key={i}>
                        <AdminTable service={service}/>
                    </div>
                ) : null}  
            </Row>
        </Container>
      </Fade>
    </div>
    )
}

export default AdminPage;