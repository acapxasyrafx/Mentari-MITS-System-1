// ros
import axios from 'axios'
import * as servicesModule0 from '../module0/services'
// ** Cessation
export async function filterRecordList (data) {
  await this.header()
  return axios.get('/api/module1/filter_record', { params: data }).then(response => {
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

export async function filterdistributorList (data) {
  await servicesModule0.header()
  return axios.get('/api/module1/filter_distributor', { params: data }).then(response => {
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

export async function getAllRecordList () {
  await servicesModule0.header()
  return axios.get('/api/module1/cessation_records').then(response => {
    console.log('Record list :' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout()
      } else {
        return 'error'
      }
    }
  })
}

// end Cessation

// Suspension

export async function getAllDistributor () {
  await servicesModule0.header()
  return axios.get('/api/module1/distributor_records').then(response => {
    console.log('Record list :' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout()
      } else {
        return 'error'
      }
    }
  })
}

export async function getAllSuspensionRecordList () {
  await servicesModule0.header()
  return axios.get('/api/module1/suspension_records').then(response => {
    console.log('Record list :' + JSON.stringify(response.data.data))
    return response.data.data
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status == 401) {
        logout()
      } else {
        return 'error'
      }
    }
  })
}

// end Suspension
