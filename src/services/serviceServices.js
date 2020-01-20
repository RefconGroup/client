import api from "../config/api"


//   // Returns a single blog post with the specified id
// export const getService = (services, id) => {
//     return services.filter(service => service._id === id)
// }

// Returns all Services
export const getAllServices = async () => {
    try {
        const response = await api.get("/")
        return response.data
    } catch (error) {
        console.log("got an error from the server fetching services", error)
        throw(error)
    }  
  }

// Adds a new blog post to the database
export const addService = async (serviceInfo) => {
    // call to server to add new post
    // will return the new post
    const newService = {
        name: serviceInfo.name,
        brief: serviceInfo.brief,
        description: serviceInfo.description
    };
    try {
        const response = await api.post("/services", newService)
        return response.data
    }
    catch (error) {
        console.log("Error adding a Service:", error)
        throw(error)
    }
}

// export const removeBlogPost = async (id) => {
//     try {
//         await api.delete(`/posts/${id}`)
//     }
//     catch(error) {
//         console.log("Error deleting blog [post:", error)
//         throw(error)
//     }
// }