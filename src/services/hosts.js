import axios from 'axios'
import firebase from './firebase'

// const host = 'http://localhost:3000/hosts'
const host = 'https://ironpetbnb.herokuapp.com/hosts'

//add pet
export const addHost = hostData => {
  return axios.put(host + '/new', hostData, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//hosts data
export const getHosts = () => {
  return axios.get(host + '/all', {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}

export const uploadFile=(file)=>{
  console.log('uploading file')
  const task = firebase.storage().ref('hosts').child(file.name).put(file)

  return task
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>link)
}