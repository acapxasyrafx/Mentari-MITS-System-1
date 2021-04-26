// Nurul
import axios from 'axios';
import * as servicesModule0 from '../module0/services';

//Consultant Alert
//1. Consultant alert record
export async function getAllConsultant(){
    await servicesModule0.header();
        return axios.get("/api/module2/consultant_records").then(response => {
        console.log("Consultant list :" + JSON.stringify(response.data.data));
        return response.data.data;
    }).catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status == 401) {
            logout();
          }else {
            return "error"
          }
        }
      });
  }

  export async function filterConsultantRecordList (data) {
    await servicesModule0.header();
    return axios.get('/api/module2/filter_consultant_record', { params: data }).then(response => {
      console.log('data :' + JSON.stringify(response.data.data));
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
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