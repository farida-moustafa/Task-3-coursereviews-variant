import axios from 'axios'

//use to send requests to the backend server
export const api = axios.create({
  baseURL: 'http://localhost:4000/api'
})

// Attach token if present
api.interceptors.request.use((config) => { //intercept request before going to the backend server, and add the token to the request headers if it exists in local storage
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
