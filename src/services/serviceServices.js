import api from "../config/api"

// Returns all Services
export const getAllServices = async () => {
    try {
        const response = await api.get("/services")
        return response.data
    } catch (error) {
        console.log("got an error from the server fetching services", error)
        throw(error)
    }  
  }

// Adds a new Service to the database
export const addService = async (serviceInfo) => {
    // Call to server to add new service
    // Will return the new service
    const NewService = {
        name: serviceInfo.name,
        brief: serviceInfo.brief,
        description: serviceInfo.description,
    };
    try {
        const response = await api.post("/services", NewService)
        return response.data
    }
    catch (error) {
        console.log("Error adding service:", error)
        throw(error)
    }
}

export const removeService = async (id) => {
    try {
        await api.delete(`/services/${id}`)
    }
    catch(error) {
        console.log("Error deleting serivce [serivce:", error)
        throw(error)
    }
}