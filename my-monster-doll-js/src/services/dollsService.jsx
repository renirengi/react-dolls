import React from 'react'
import axios from 'axios'

const url = 'http://localhost:3000/dolls/'
export const getDollsById= (id)=> {
    return axios.get(`${url}${id}`)
}
export const getDollsByParams= (params)=> {
    return axios.get(`${url}${params}`)
}