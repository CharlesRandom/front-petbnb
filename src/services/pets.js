import axios from 'axios'
import firebase from './firebase'

// const host = 'http://localhost:3000/pets'
const host = 'https://ironpetbnb.herokuapp.com/pets'

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

export const uploadFile=(file)=>{
  console.log('uploading pet image')
  const task = firebase.storage().ref('pets').child(file.name).put(file)

  return task
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>link)
}