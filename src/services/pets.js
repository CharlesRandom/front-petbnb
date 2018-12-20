import axios from 'axios'

const host = 'http://localhost:3000/pets'

//add pet
export const addPet = pet => {
  return axios.post(host + '/new', pet, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//pets data
export const getUserPets = () => {
  return axios.get(host + '/all', {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}