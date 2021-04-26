/* eslint-disable semi */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
//
import axios from 'axios';
import * as servicesModule1 from "./services";

//**Self Register distributor**/
export async function selfRegister (data) {
    return axios.post('/api/module1/user', data).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
             servicesModule1.logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
           servicesModule1.logout();
        }
        return 'error';
      }
    });
  }

  export async function updateSelfReg (data) {
    return axios.post('/api/module1/user', data).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
             servicesModule1.logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
           servicesModule1.logout();
        }
        return 'error';
      }
    });
  }

  export async function verifyUser (data) {
    return axios.get('/api/module1/verify_user', {
      params: {
        USER_EMAIL: data.USER_EMAIL,
        USER_PASS_NUM: data.USER_PASS_NUM
    },
    }).then(response => {

      localStorage.setItem('realmName', 'realm1');
      
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
             servicesModule1.logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
           servicesModule1.logout();
        }
        return 'error';
      }
    });
  }

  export async function checkDuplicateIC (data) {
    return axios.get('/api/module1/user_check_ic', {
      params: {
        USER_NRIC: data,
    },
    }).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
             servicesModule1.logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
           servicesModule1.logout();
        }
        return 'error';
      }
    });
  }

  export async function checkDuplicateEmail (data) {
    return axios.get('/api/module1/user_check_email', {
      params: {
        USER_EMAIL: data,
    },
    }).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
             servicesModule1.logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
           servicesModule1.logout();
        }
        return 'error';
      }
    });
  }

  export async function checkDuplicateUserID (data) {
    return axios.get('/api/module1/user_check_userID', {
      params: {
        USER_USER_ID: data,
    },
    }).then(response => {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
             servicesModule1.logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
           servicesModule1.logout();
        }
        return 'error';
      }
    });
  }

  export async function securityQuestion () {
    return axios.get('/api/module1/user_security_quest').then(response => {
      console.log(response.data.data);
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
             servicesModule1.logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
           servicesModule1.logout();
        }
        return 'error';
      }
    });
  }

  export async function createDistributorProfile (data) {
    await servicesModule1.header();
    return axios.post('/api/module1/distributor', data).then(response => {
      console.log(JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
            //logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          //logout();
        }
        return 'error';
      }
    });
  }

  export async function updateDistributorProfile (data) {
    await servicesModule1.header();
    return axios.post('/api/module1/distributor', data).then(response => {
      console.log(JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
            //logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          //logout();
        }
        return 'error';
      }
    });
  }

  export async function createDistributorInfo (data) {
    await servicesModule1.header();
    return axios.post('/api/module1/distributor_info', data).then(response => {
      console.log(JSON.stringify(response.data));
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
            //logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          //logout();
        }
        return 'error';
      }
    });
  }

  export async function getUserSalutation () {
    await servicesModule1.header();
    return axios.get('/api/module1/user_salutation').then(response => {
      console.log(JSON.stringify(response.data.data));
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
            //logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          //logout();
        }
        return 'error';
      }
    });
  }

  export async function getDistributorById (data) {
    await servicesModule1.header();
    return axios.get('/api/module1/distributor', {
      params: {
        USER_ID: data,
    },
    }).then(response => {
      console.log(JSON.stringify(response.data.data));
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
            //logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          //logout();
        }
        return 'error';
      }
    });
  }

  export async function getDistributorByIdAppr (data) {
    alert('ee');
    await servicesModule1.header();
    return axios.get('/api/module1/distributor_application_detail', {
      params: {
        DIST_ID: data,
    },
    }).then(response => {
      console.log(JSON.stringify(response.data.data));
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 500) {
          // console.log(JSON.stringify(error.response.data.message));
          if (error.response.data.message == 'Token expired.') {
            console.log('logout');
            //logout();
          } else {
            console.log(error.response.data.message);
          }
        } else if (error.response.status == 401) {
          //logout();
        }
        return 'error';
      }
    });
  }

  export async function deleteDirector (data) {
    await servicesModule1.header();
    return axios
      .delete('/api/module1/distributor_director', {
        data: { DIST_DIR_ID: data },
      })
      .then(response => {
        console.log('data :' + JSON.stringify(response.data));
        return response.data;
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status == 500) {
            // console.log(JSON.stringify(error.response.data.message));
            if (error.response.data.message == 'Token expired.') {
              logout();
            } else {
              console.log(error.response.data.message);
            }
          } else if (error.response.status == 401) {
            logout();
          }
        }
      });
  }





  
