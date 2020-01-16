import api from "../config/api"

export const getAllServices = async () => {
    try {
        const response = await api.get("/")
        return response.data
    } catch (error) {
        console.log("got an error from the server fetching services", error)
        throw(error)
    }  
  }
