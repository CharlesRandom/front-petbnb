import axios from 'axios'

// const host = 'http://localhost:3000/banks'
const host = 'https://ironpetbnb.herokuapp.com/banks'

//add bank account
export const addBank = bank => {
  return axios.post(host + '/new', bank, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}