import axios from "axios";

const BaseUrl = "http://localhost:8000";

interface registerProps {
     name: string;
     email: string;
     password: string
}

export const register = async (userData: registerProps ) => {
     return await axios.post(`${BaseUrl}/api/register`, userData)
}
export const login = async (userData: { email: string, password: string }) => {
     return await axios.post(`${BaseUrl}/api/login`, userData, { withCredentials: true} )
}
export const getUser = async () => {
     return await axios.get(`${BaseUrl}/api/user`, { withCredentials: true})
}
export const logout = async () => {
     return await axios.post(`${BaseUrl}/api/logout`, {} , {withCredentials: true})
}