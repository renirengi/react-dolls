
import axios from 'axios'

const url = 'http://localhost:3000/users/'
export const getUserById= (id)=> {
    return axios.get(`${url}${id}`)
}
export const getUsersByParams= (params)=> {
    return axios.get(`${url}${params}`)
}
export const getAvailable = () => {
    return axios.get('http://localhost:3000/users/')
}

export const addUser= (data) => {
    return axios.post('http://localhost:3000/users/', JSON.stringify(data),
    {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
}
