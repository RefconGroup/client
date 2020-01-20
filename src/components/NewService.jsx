import React from "react"

const NewService = (props) => {

    const {addNewService} = props

    return (
		<form onSubmit={(event) => addNewService(event,props)}>
			<label className="label">Name</label>
			<input type="text" className="input" name="name" placeholder="Name of Service" required></input>
            <label className="label">Brief</label>
			<input type="text" className="input" name="brief" placeholder="Short explanation of service (optional)"></input>
			<label className="label">Content</label>
			<textarea className="input" name="description" placeholder="Description of " required></textarea>
			<input type="submit" value="Create Post" className="button is-info"></input>
		</form>
	)

}

export default NewBlogPost