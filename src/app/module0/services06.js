/* eslint-disable semi */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
//
import axios from 'axios';
import * as servicesModule0 from "./services";

export async function getTAC (data) {
  return axios.post('/api/module0/get_sms_TAC', data).then(response => {
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

export async function verifyTAC (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.get('/api/module0/sms_verify_TAC', {
        params: {
            SMS_TAC_NUMBER: data,
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

  export async function setPasswordSetting (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.post('/api/module0/setting_password', data).then(response => {
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

  export async function updatePasswordSetting (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.post('/api/module0/setting_userId', data).then(response => {
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

  export async function getPasswordSetting (isLogin) {
    isLogin == 1 ? await servicesModule0.header() : '';
    return axios.get('/api/module0/setting_password').then(response => {
      console.log(response.data);
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

  export async function getUserIdSetting (isLogin) {
    isLogin == 1 ? await servicesModule0.header() : '';
    return axios.get('/api/module0/setting_userId').then(response => {
      console.log(response.data);
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

  export async function setUserIdSetting (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.post('/api/module0/setting_userId', data).then(response => {
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

  export async function updateUseridSetting (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.post('/api/module0/setting_userId', data).then(response => {
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

  export async function getSettingGeneral (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.get('/api/module0/setting_generals', {
      params: {
        SET_TYPE: data,
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

  export async function getPostcode (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.get('/api/module0/setting_postal', {
      params: {
        SETTING_CITY_ID: data,
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

  export async function getCity (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.get('/api/module0/setting_city', {
      params: {
        SETTING_CITY_ID: data,
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

  export async function getStateById (data) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.get('/api/module0/setting_generals', {
      params: data
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

  export async function getApplicationType () {
    await servicesModule0.header();
    return axios.get('/api/module0/distributor_type').then(response => {
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

  export async function getDefaultCountry () {
    await servicesModule0.header();
    return axios.get('/api/module0/default_country').then(response => {
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

  export async function getApprovalLevel (data, index) {
    console.log('data : ' + data);
    await servicesModule0.header();
    return axios.get('/api/module0/approval_level_byindex', {
      params: {
        APPR_PROCESSFLOW_NAME: data,
        APPR_INDEX: index
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

  export async function getDistributorApplicationList (data) {
    await servicesModule0.header();
    return axios.get('/api/module0/distributor_new_application', {
      params: {
        APPR_GROUP_ID: data,
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


