/* eslint-disable no-unused-vars */
// acap
import axios from 'axios'

export function getUser () {
  const user = localStorage.getItem('user')
  // this.$store.commit("change", user);
  // console.log("user store :" + this.$store.getters.userDetail);
  return user
}

function getToken () {
  const user = localStorage.getItem('user')
  console.log('access token :' + JSON.parse(user).access_token)
  return JSON.parse(user).access_token
}

export function isLoggedIn () {
  const user = localStorage.getItem('user')
  return user != null
}

export function setUser (user) {
  localStorage.setItem('user', user)
}

export async function checkTokenValidation () {
  await this.header()
  return axios.get('/api/module0/checkTokenValidation').then(response => {
    console.log('response :' + JSON.stringify(response.data))
    return response.data
  }).catch(function (error) {
    console.log('error response :' + JSON.stringify(error.response))
    if (error.response) {
      if (error.response.status == 500) {
        if (error.response.data.message.includes('Expired token')) {
          // logout();
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        // logout();
      }
      return 'not valid'
    }
  })
}

export function logout () {
 localStorage.removeItem('user')
 localStorage.removeItem('realmName');
}

// roles assign

export async function getMemberRoles () {
  await this.header()
  return axios.get('/api/module1/setting_postal').then(response => {
    console.log('data :' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout')
          logout()
        } else {
          console.log(error.response.data.message)
        }
      } else if (error.response.status == 401) {
        logout()
      }
      return 'error'
    }
  })
}
