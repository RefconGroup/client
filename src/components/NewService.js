import React from "react"
import { Form, FormGroup, Label, Input } from 'reactstrap';


const NewService = (props) => {

    const {addNewService} = props

    return (
		<Form onSubmit={(event) => addNewService(event,props)}>
			<FormGroup>
				<Label className="Label">Name</Label>
				<Input type="text" className="Input" name="name" placeholder="Name of serivce" required></Input>
				<Label className="Label">Brief</Label>
				<Input type="text" className="Input" name="brief" placeholder="Brief Summary of service"></Input>
				<Label className="Label">Description</Label>
				<Input className="Input" name="description" placeholder="Any information you wish to provide about the service" required></Input>
					<Input type="submit" value="Create Service" className="button is-info"></Input>
					</FormGroup>
			</Form>
	)

}

export default NewService