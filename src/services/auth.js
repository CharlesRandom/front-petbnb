import axios from 'axios'

// const host = 'http://localhost:3000/auth'
const host = 'https://ironpetbnb.herokuapp.com/auth'

//signup
export const signup = user => {
  return axios.post(host + '/signup', user, {})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//login
export const login = user => {
  return axios.post(host + '/login', user, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//logout



//profile
export const getProfile = user => {
  return axios.get(host + '/profile/' + user, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}