import axios from 'axios'

const host = 'http://localhost:3000/addresses'

//add bank account
export const addAddress = address => {
  return axios.post(host + '/new', address, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}