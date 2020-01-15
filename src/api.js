import axios from 'axios'

// Create an axios instance
export default axios.create({
// Connection to depolyed heroku Server 
  baseURL: "https://refcongroupsite.herokuapp.com/services",
// Connection to Local Server   
// baseURL:'http://localhost:3000/services/',
  timeout: 5000
})