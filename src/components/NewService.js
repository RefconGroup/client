import React from "react"
import { Form, FormGroup, Label, Input } from 'reactstrap';


const NewService = (props) => {

    const {addNewService} = props

    return (
		<Form onSubmit={(event) => addNewService(event,props)}>
			<FormGroup>
				<Label className="Label">Name</Label>
				<Input type="text" className="Input" name="name" placeholder="Name of serivce" data-cy="title" required></Input>
				<Label className="Label">Brief</Label>
				<Input type="text" className="Input" name="brief" placeholder="Brief Summary of service" data-cy="content" ></Input>
				<Label className="Label">Description</Label>
				<Input className="Input" name="description" placeholder="Any information you wish to provide about the service" data-cy="content" required></Input>
					<Input type="submit" value="Create Service" className="button is-info" data-cy="addButton"></Input>
					</FormGroup>
			</Form>
	)

}

export default NewService