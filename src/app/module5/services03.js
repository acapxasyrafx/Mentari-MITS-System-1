// acap
import axios from 'axios'
import * as servicesModule0 from './services'

// 1. fund creation ( distributor )
export async function createFundProfile (data) {
  await servicesModule0.header()
  return axios.post('/api/module5/fund_profile_creation', data).then(response => {
    return response.data
  }).catch(function (error) {
    if (error.response) {
      console.log('error : ' + error.response)
      if (error.response.status == 500) {
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
// 2. fund creation get data ( fimm & distributor )
export async function getAllFundProfile () {
  return axios.get('/api/module5/fund_profile')
    .then(response => {
      console.log('data :' + JSON.stringify(response.data.data));
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 401) {
          logout()
        } else {
          return 'error';
        }
      }
    })
}

// 3.
