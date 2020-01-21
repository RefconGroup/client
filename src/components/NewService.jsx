import React from "react"

const NewService = (props) => {

    const {addNewService} = props

    return (
		<form onSubmit={(event) => addNewService(event,props)}>
			<label className="label">Name</label>
			<input type="text" className="input" name="name" placeholder="Name of serivce" required></input>
            <label className="label">Brief</label>
			<input type="text" className="input" name="brief" placeholder="Brief Summary of service"></input>
			<label className="label">Description</label>
			<textarea className="input" name="description" placeholder="Any information you wish to provide about the service" required></textarea>
				<input type="submit" value="Create Service" className="button is-info"></input>
			</form>
	)

}

export default NewService