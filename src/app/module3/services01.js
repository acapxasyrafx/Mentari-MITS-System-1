// Nurul
import axios from 'axios';
import Vue from 'vue' 
import * as servicesModule0 from '../module0/services';

//Consultant Alert
//1. Consultant alert record
export async function getAllClassification(){
    await servicesModule0.header();
        return axios.get("/api/module3/ca_classification").then(response => {
        console.log("Classification list :" + JSON.stringify(response.data.data));
        return response.data.data;
    }).catch(function(error) {
        if (error.response) {
          Vue.$toast.open({
            message: error.response.data.message,
            type: 'error',
          });
          if (error.response.status == 401) {
            logout();
          }else {
            return "error"
          }
        }
      });
  }
export async function getAllRecordList(){
    await servicesModule0.header();
        return axios.get("/api/module3/ca_records").then(response => {
        console.log("Record list :" + JSON.stringify(response.data.data));
        return response.data.data;
    }).catch(function(error) {
        if (error.response) {
          Vue.$toast.open({
            message: error.response.data.message,
            type: 'error',
          });
          if (error.response.status == 401) {
            logout();
          }else {
            return "error"
          }
        }
      });
}

export async function getCaRecordById (data) {
  await servicesModule0.header();
  return axios.get("/api/module3/ca_record", {
    params: {
      CONSULTANT_ID: data,
    },
  }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      
      Vue.$toast.open({
        message: error.response.data.message,
        type: 'error',
      });
      if (error.response.status == 401) {
        logout();
      } else {
        return 'error'
      }
    }
  });
}

export async function filterCaRecordList (data) {
  await servicesModule0.header();
  return axios.get('/api/module3/filter_ca_record', { params: data }).then(response => {
    console.log('data :' + JSON.stringify(response.data.data));
    return response.data.data;
  }).catch(function (error) {
    if (error.response) {
      Vue.$toast.open({
        message: error.response.data.message,
        type: 'error',
      });
      if (error.response.status == 500) {
        // console.log(JSON.stringify(error.response.data.message));
        if (error.response.data.message == 'Token expired.') {
          console.log('logout');
          logout();
        } else {
          console.log(error.response.data.message);
        }
      } else if (error.response.status == 401) {
        logout();
      }
      return 'error';
    }
  });
}

export async function createExistingCase(data){
  await servicesModule0.header();
      return axios.post("/api/module3/create_existingCase", data).then(response => {
      // console.log("exception create :" + JSON.stringify(response.data));
      return response.data;
  }).catch(function(error) {
      if (error.response) {
        Vue.$toast.open({
          message: error.response.data.message,
          type: 'error',
        });
        if (error.response.status == 401) {
          logout();
        }else {
          return "error"
        }
      }
    });
}
export async function createNewCase(data){
  await servicesModule0.header();
      return axios.post("/api/module3/create_newCase", data).then(response => {
      // console.log("exception create :" + JSON.stringify(response.data));
      return response.data;
  }).catch(function(error) {
      if (error.response) {
        Vue.$toast.open({
          message: error.response.data.message,
          type: 'error',
        });
        if (error.response.status == 401) {
          logout();
        }else {
          return "error"
        }
      }
    });
}