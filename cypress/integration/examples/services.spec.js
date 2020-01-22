let fixtures = {}
beforeEach(() => {
	cy.viewport(1024, 768)
	cy.visit("/admin")
	// Start tests from home page
	// cy.fixture("registeredUser.json").then(user => {
	// 	cy.get("[data-cy=login]").click()
	// 	cy.get("[name=username]").type(user.username)
	// 	cy.get("[name=password]").type(user.password)
	// 	cy.get("[type=submit").click()
	// 	fixtures.registeredUser = user
	// })
	// cy.fixture("editBlogPost.json").then(post => {
	// 	fixtures.editedPost = post
	// })
	cy.fixture("newService.json").then(service => {
		fixtures.newService = service
		// If the test post already exists, delete it
		deleteService(service)
	})
})
function deleteService(service) {
	// If the service exists, delete it
	cy.root().then(root => {
		if (root.find(`[data-cy=${service.name}]`).length > 0) {
			cy.get(`[data-cy=${service.name})]`).click()
			cy.get("[data-cy=deleteButton").click()
		}
	})
}
describe("Add a Service", () => {
	it("should display add service", () => {
		cy.get("[data-cy=addService").click()
		cy.get("[data-cy=addServiceForm").should("be.visible")
	})
	it("should add and delete a service", () => {
		cy.get("[data-cy=addService").click()
		cy.get("[data-cy=addServiceForm").click()
		cy.get("[data-cy=title").type(fixtures.newService.title)
		cy.get("[data-cy=content").type(fixtures.newService.content)
		cy.get("[data-cy=addButton").click()
		// Verify new post was added
		cy.root().should("contain", fixtures.newPost.title)
		// If the post exists, delete it
		cy.get(`[data-cy=${fixtures.newService.title}]`).then(newService => {
			newService.click()
			cy.get("[data-cy=deleteButton").click()
		})
		// Verify post was deleted
		cy.root().should("not.contain", fixtures.newPost.title)
	})
})

// describe("Edit a post", () => {
// 	it("should display edit blog post form", () => {
// 		// First create a post to edit
// 		cy.get("[data-cy=addpost").click()
// 		cy.get("[data-cy=addPostForm").click()
// 		cy.get("[data-cy=title").type(fixtures.editedPost.title)
// 		cy.get("[data-cy=content").type(fixtures.editedPost.content)
// 		cy.get("[data-cy=addButton").click()
// 		// See if we can show the edit post form
// 		cy.contains(fixtures.editedPost.title).click({ force: true })
// 		cy.get("[data-cy=editButton").click()
// 		cy.get("[data-cy=editPostForm]").should("be.visible")
// 		cy.get("[data-cy=editButton").click()
// 		// delete the post
// 		deletePost(fixtures.editedPost)
// 	})
// })