// syasya
import axios from 'axios';
import * as servicesModule0 from "./services";
//* ***SMS Setting *************/

export async function getSmsSettingList () {
    await this.header();
    return axios.get('/api/module0/sms_setting').then(response => {
      console.log('sms list :' + JSON.stringify(response.data.data));
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
  
  export async function createSmsSetting () {
    console.log('data : ' + data);
    await this.header();
    return axios.post('/api/module0/sms_setting', data).then(response => {
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
  
  export async function updateSmsException(data){
    let jsonObject = {};
    
    for (const [key, value]  of data) {
        jsonObject[key] = value;
    }
    return axios
    .put("/api/module0/sms_setting", jsonObject)
    .then(response => {
      console.log("data :" + JSON.stringify(response.data));
     return response.data;
    }).catch(function(error) {
     if (error.response) {
       // The request was made and the server responded with a status code
       // that falls out of the range of 2xx
       if (error.response.status == 500) {
         // console.log(JSON.stringify(error.response.data.message));
         if (error.response.data.message == "Token expired.") {
           services.logout();
         } else {
           console.log(error.response.data.message);
         }
       } else if (error.response.status == 401) {
         services.logout();
       }
     }
    });
  }


  //* *** city Setting *************/
  export async function getAllCity(){
    await this.header();
        return axios.get("/api/module0/setting_city").then(response => {
        console.log("division list :" + JSON.stringify(response.data.data));
        return response.data.data;
    }).catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status == 401) {
            services.logout();
          }else {
            return "error"
          }
        }
      });
  }
  
  export async function getCityById(data){
  await this.header();
      return axios.get("/api/module0/setting_city", {params: {
        SETTING_CITY_ID: data
      }}).then(response => {
      console.log("data :" + JSON.stringify(response.data.data));
      return response.data.data;
  }).catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          services.logout();
        }else {
          return "error"
        }
      }
    });
  }
  
  export async function createCity(data){
  await this.header();
      return axios.post("/api/module0/setting_city", data).then(response => {
      // console.log("exception create :" + JSON.stringify(response.data));
      return response.data;
  }).catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          services.logout();
        }else {
          return "error"
        }
      }
    });
  }
  
  export async function deleteCity(data){
  return axios
  .delete("/api/module0/setting_city", {
    data: { SETTING_CITY_ID: data }
  })
  .then(response => {
    console.log("data :" + JSON.stringify(response.data));
   return response.data;
  }).catch(function(error) {
   if (error.response) {
     // The request was made and the server responded with a status code
     // that falls out of the range of 2xx
     if (error.response.status == 401) {
      services.logout();
    }else {
      return "error"
    }
   }
  });
  }
  
  export async function updateCity(data){
  let jsonObject = {};
  
  for (const [key, value]  of data) {
      jsonObject[key] = value;
  }
  return axios
  .put("/api/module0/setting_city", jsonObject)
  .then(response => {
    console.log("data :" + JSON.stringify(response.data));
   return response.data;
  }).catch(function(error) {
   if (error.response) {
     // The request was made and the server responded with a status code
     // that falls out of the range of 2xx
     if (error.response.status == 401) {
      services.logout();
    }else {
      return "error"
    }
   }
  });
  }

    //* *** postcode Setting *************/

  export async function getAllPostcode(){
    await this.header();
        return axios.get("/api/module0/setting_postcode").then(response => {
        console.log("division list :" + JSON.stringify(response.data.data));
        return response.data.data;
    }).catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status == 401) {
            services.logout();
          }else {
            return "error"
          }
        }
      });
  }
  
  export async function getPostcodeById(data){
  await this.header();
      return axios.get("/api/module0/setting_postcode", {params: {
        SETTING_CITY_ID: data
      }}).then(response => {
      console.log("data :" + JSON.stringify(response.data.data));
      return response.data.data;
  }).catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          services.logout();
        }else {
          return "error"
        }
      }
    });
  }
  
  export async function createPostcode(data){
  await this.header();
      return axios.post("/api/module0/setting_postcode", data).then(response => {
      // console.log("exception create :" + JSON.stringify(response.data));
      return response.data;
  }).catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          services.logout();
        }else {
          return "error"
        }
      }
    });
  }
  
  export async function deletePostcode(data){
  return axios
  .delete("/api/module0/setting_postcode", {
    data: { SETTING_CITY_ID: data }
  })
  .then(response => {
    console.log("data :" + JSON.stringify(response.data));
   return response.data;
  }).catch(function(error) {
   if (error.response) {
     // The request was made and the server responded with a status code
     // that falls out of the range of 2xx
     if (error.response.status == 401) {
      services.logout();
    }else {
      return "error"
    }
   }
  });
  }
  
  export async function updatePostcode(data){
  let jsonObject = {};
  
  for (const [key, value]  of data) {
      jsonObject[key] = value;
  }
  return axios
  .put("/api/module0/setting_postcode", jsonObject)
  .then(response => {
    console.log("data :" + JSON.stringify(response.data));
   return response.data;
  }).catch(function(error) {
   if (error.response) {
     // The request was made and the server responded with a status code
     // that falls out of the range of 2xx
     if (error.response.status == 401) {
      services.logout();
    }else {
      return "error"
    }
   }
  });
  }
  
//* ***Approval Level *************/
  
export async function getAllApprovalList(data) {
  await servicesModule0.header();
  return axios.get('/api/module0/approval_level', {
    params: {
      APPR_PROCESSFLOW_NAME: data,
      APPR_INDEX: data,
      APPR_LEVEL_NAME: data,
    },

  }).then(response => {
      console.log('data :' + JSON.stringify(response.data.data));
      return response.data.data;
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status == 401) {
          logout();
        } else {
          return 'error'
        }
      }
    });
}

// export async function getAllApprovalList () {
//   await this.header();
//   return axios.get('/api/module0/approval_list').then(response => {
//     console.log('exception list :' + JSON.stringify(response.data.data));
//     return response.data.data;
//   }).catch(function (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       if (error.response.status == 500) {
//       } else if (error.response.status == 401) {
//         logout();
//       }
//       return 'error';
//     }
//   });
// }





export async function createApprovalList(data) {
  await servicesModule0.header();
  return axios.post('/api/module0/approval_level', data).then(response => {
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('error : ' + error.response);
      if (error.response.status == 500) {
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


//Create CPD Point Module

export async function createCPDPoint(data) {
  await servicesModule0.header();
  return axios.post('/api/module0/cpd_point', data).then(response => {
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log('error : ' + error.response);
      if (error.response.status == 500) {
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

export async function getAllModulePointList(data) {
  await servicesModule0.header();
  return axios.get('/api/module0/cpd_point', {
    params: {
      CPD_HOURS_ID: data,
      // MOD_NAME: data,
      // MOD_POINT_MIN: data,
      // MOD_POINT_MAC: data,
    },
  }).then(response => {
    console.log('CPD Point list :' + JSON.stringify(response.data.data));
    return response.data.data;
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
  
export async function updateCPDPoint(data){
  let jsonObject = {};
  
  for (const [key, value]  of data) {
      jsonObject[key] = value;
  }
  return axios
  .put("/api/module0/cpd_point", jsonObject)
  .then(response => {
    console.log("data :" + JSON.stringify(response.data));
   return response.data;
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
export async function deleteCPDPoint (data) {
  return axios
    .delete('/api/module0/cpd_point', {
      data: { CPD_MODULE_POINT_ID: data },
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
  export async function getCPDPointById(data){
    await servicesModule0.header();
        return axios.get("/api/module0/cpd_point", {params: {
         CPD_HOURS_ID: data
        }}).then(response => {
        console.log("data :" + JSON.stringify(response.data.data));
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
  

  // WAIVER REASON

  export async function createWaiverReason(data) {
    await servicesModule0.header();
    return axios.post('/api/module0/cpd_waiver', data).then(response => {
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        console.log('error : ' + error.response);
        if (error.response.status == 500) {
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
  
  export async function getAllWaiverReasonList(data) {
    await servicesModule0.header();
    return axios.get('/api/module0/cpd_waiver', {
      params: {
        CPD_WAIVER_REASON_ID	: data,
        // MOD_NAME: data,
        // MOD_POINT_MIN: data,
        // MOD_POINT_MAC: data,
      },
    }).then(response => {
      console.log('CPD Point list :' + JSON.stringify(response.data.data));
      return response.data.data;
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

  export async function updateWaiverReason(data){
    let jsonObject = {};
    
    for (const [key, value]  of data) {
        jsonObject[key] = value;
    }
    return axios
    .put("/api/module0/cpd_waiver", jsonObject)
    .then(response => {
      console.log("data :" + JSON.stringify(response.data));
     return response.data;
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


  export async function deleteWaiverReason (data) {
    return axios
      .delete('/api/module0/cpd_waiver', {
        data: { CPD_WAIVER_REASON_ID: data },
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

    export async function getWaiverReasonById(data){
      await servicesModule0.header();
          return axios.get("/api/module0/cpd_waiver", {params: {
            CPD_WAIVER_REASON_ID: data
          }}).then(response => {
          console.log("data :" + JSON.stringify(response.data.data));
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

  // RENEWAL CPD CALCULATION
  export async function createRenewalCPD(data) {
    await servicesModule0.header();
    return axios.post('/api/module0/cpd_renewal', data).then(response => {
      return response.data;
    }).catch(function (error) {
      if (error.response) {
        console.log('error : ' + error.response);
        if (error.response.status == 500) {
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

  export async function getAllRenewalCPDList(data) {
    await servicesModule0.header();
    return axios.get('/api/module0/cpd_renewal', {
      params: {
        CPD_RENEWAL_CALC_ID	: data,
        // MOD_NAME: data,
        // MOD_POINT_MIN: data,
        // MOD_POINT_MAC: data,
      },
    }).then(response => {
      console.log('CPD Renewal list :' + JSON.stringify(response.data.data));
      return response.data.data;
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

  export async function updateCPDRenewal (data) {
    const jsonObject = {};
  
    for (const [key, value] of data) {
      jsonObject[key] = value;
    }
    return axios
      .put('/api/module0/cpd_renewal', jsonObject)
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

  export async function deleteCPDRenewal (data) {
    return axios
      .delete('/api/module0/cpd_renewal', {
        data: { CPD_RENEWAL_CALC_ID: data },
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

    export async function getCPDRenewalById(data){
      await servicesModule0.header();
          return axios.get("/api/module0/cpd_renewal", {params: {
            CPD_RENEWAL_CALC_ID: data
          }}).then(response => {
          console.log("data :" + JSON.stringify(response.data.data));
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


      //----------------- CPD Rule ---------------------

      export async function getAllCPDRuleList(data) {
        await servicesModule0.header();
        return axios.get('/api/module0/cpd_rule', {
          params: {
            CPD_RULE_CALC_ID	: data,
            // MOD_NAME: data,
            // MOD_POINT_MIN: data,
            // MOD_POINT_MAC: data,
          },
        }).then(response => {
          console.log('CPD Rule list :' + JSON.stringify(response.data.data));
          return response.data.data;
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

      export async function getCPDRuleById(data){
        await servicesModule0.header();
            return axios.get("/api/module0/cpd_rule", {params: {
              CPD_RULE_CALC_ID: data
            }}).then(response => {
            console.log("data :" + JSON.stringify(response.data.data));
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
      export async function updateCPDRule(data){
        let jsonObject = {};
        
        for (const [key, value]  of data) {
            jsonObject[key] = value;
        }
        return axios
        .put("/api/module0/cpd_rule", jsonObject)
        .then(response => {
          console.log("data :" + JSON.stringify(response.data));
         return response.data;
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
        export async function deleteCPDRule (data) {
          return axios
            .delete('/api/module0/cpd_rule', {
              data: { CPD_RULE_CALC_ID: data },
            })
            .then(response => {
              console.log('data :' + JSON.stringify(response.data));
              return response.data;
            }).catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (error.response.status == 401) {
                  logout();
                } else {
                  return 'error';
                }
              }
            });
        }
 // ---------------------------------------TR MODE-------------------------------
        export async function getAllTRModeList (data) {
          await servicesModule0.header();
          return axios.get('/api/module0/cpd_setting', {
            params: {
              CPD_SETTING_TYPE: data,
            },
          }).then(response => {
            console.log('cpd setting  list :' + JSON.stringify(response.data.data));
            return response.data.data;
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

        export async function createTRMode (data) {
          await servicesModule0.header();
          return axios.post('/api/module0/cpd_setting', data).then(response => {
            // console.log("exception create :" + JSON.stringify(response.data));
            return response.data;
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
        export async function getTRModeById(data){
          await servicesModule0.header();
              return axios.get("/api/module0/cpd_setting", {params: {
                CPD_SETTING_ID: data
              }}).then(response => {
              console.log("data :" + JSON.stringify(response.data.data));
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

          export async function updateTRMode(data) {
            const jsonObject = {};
          
            for (const [key, value] of data) {
              jsonObject[key] = value;
            }
            return axios
              .put('/api/module0/cpd_setting', jsonObject)
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
          export async function deleteTRMode(data){
            return axios
            .delete("/api/module0/cpd_setting", {
              data: { CPD_SETTING_ID: data }
            })
            .then(response => {
              console.log("data :" + JSON.stringify(response.data));
             return response.data;
            }).catch(function(error) {
             if (error.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               if (error.response.status == 401) {
                services.logout();
              }else {
                return "error"
              }
             }
            });
            }
// --------------------------------TR Program Type --------------------------

export async function getAllTRTypeList (data) {
  await servicesModule0.header();
  return axios.get('/api/module0/cpd_setting', {
    params: {
      CPD_SETTING_TYPE: data,
    },
  }).then(response => {
    console.log('cpd setting  list :' + JSON.stringify(response.data.data));
    return response.data.data;
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

export async function createTRType (data) {
  await servicesModule0.header();
  return axios.post('/api/module0/cpd_setting', data).then(response => {
    // console.log("exception create :" + JSON.stringify(response.data));
    return response.data;
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
export async function getTRTypeById(data){
  await servicesModule0.header();
      return axios.get("/api/module0/cpd_setting", {params: {
        CPD_SETTING_ID: data
      }}).then(response => {
      console.log("data :" + JSON.stringify(response.data.data));
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
  export async function deleteTRType(data){
    return axios
    .delete("/api/module0/cpd_setting", {
      data: { CPD_SETTING_ID: data }
    })
    .then(response => {
      console.log("data :" + JSON.stringify(response.data));
     return response.data;
    }).catch(function(error) {
     if (error.response) {
       // The request was made and the server responded with a status code
       // that falls out of the range of 2xx
       if (error.response.status == 401) {
        services.logout();
      }else {
        return "error"
      }
     }
    });
    }

  export async function updateTRType(data) {
    const jsonObject = {};
  
    for (const [key, value] of data) {
      jsonObject[key] = value;
    }
    return axios
      .put('/api/module0/cpd_setting', jsonObject)
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


  // --------------------- Module Code -------------------
  export async function getAllModuleCodeList (data) {
    await servicesModule0.header();
    return axios.get('/api/module0/cpd_setting', {
      params: {
        CPD_SETTING_TYPE: data,
      },
    }).then(response => {
      console.log('cpd setting  list :' + JSON.stringify(response.data.data));
      return response.data.data;
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
  
  export async function createModuleCode (data) {
    await servicesModule0.header();
    return axios.post('/api/module0/cpd_setting', data).then(response => {
      // console.log("exception create :" + JSON.stringify(response.data));
      return response.data;
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
  export async function getModuleCodeById(data){
    await servicesModule0.header();
        return axios.get("/api/module0/cpd_setting", {params: {
          CPD_SETTING_ID: data
        }}).then(response => {
        console.log("data :" + JSON.stringify(response.data.data));
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
    export async function deleteModuleCode(data){
      return axios
      .delete("/api/module0/cpd_setting", {
        data: { CPD_SETTING_ID: data }
      })
      .then(response => {
        console.log("data :" + JSON.stringify(response.data));
       return response.data;
      }).catch(function(error) {
       if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
         if (error.response.status == 401) {
          services.logout();
        }else {
          return "error"
        }
       }
      });
      }
  
    export async function updateModuleCode(data) {
      const jsonObject = {};
    
      for (const [key, value] of data) {
        jsonObject[key] = value;
      }
      return axios
        .put('/api/module0/cpd_setting', jsonObject)
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

    // ------------------ Financial Planner --------------------

    export async function getAllFinancialPlannerList (data) {
      await servicesModule0.header();
      return axios.get('/api/module0/cpd_setting', {
        params: {
          CPD_SETTING_TYPE: data,
        },
      }).then(response => {
        console.log('cpd setting  list :' + JSON.stringify(response.data.data));
        return response.data.data;
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
    
    export async function createFinancialPlanner (data) {
      await servicesModule0.header();
      return axios.post('/api/module0/cpd_setting', data).then(response => {
        // console.log("exception create :" + JSON.stringify(response.data));
        return response.data;
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
    export async function getFinancialPlannerById(data){
      await servicesModule0.header();
          return axios.get("/api/module0/cpd_setting", {params: {
            CPD_SETTING_ID: data
          }}).then(response => {
          console.log("data :" + JSON.stringify(response.data.data));
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
      export async function deleteFinancialPlanner(data){
        return axios
        .delete("/api/module0/cpd_setting", {
          data: { CPD_SETTING_ID: data }
        })
        .then(response => {
          console.log("data :" + JSON.stringify(response.data));
         return response.data;
        }).catch(function(error) {
         if (error.response) {
           // The request was made and the server responded with a status code
           // that falls out of the range of 2xx
           if (error.response.status == 401) {
            services.logout();
          }else {
            return "error"
          }
         }
        });
        }
    
      export async function updateFinancialPlanner(data) {
        const jsonObject = {};
      
        for (const [key, value] of data) {
          jsonObject[key] = value;
        }
        return axios
          .put('/api/module0/cpd_setting', jsonObject)
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

    // ----------------- QR MODE --------------
    export async function getAllQRModeList (data) {
      await servicesModule0.header();
      return axios.get('/api/module0/cpd_setting', {
        params: {
          CPD_SETTING_TYPE: data,
        },
      }).then(response => {
        console.log('cpd setting  list :' + JSON.stringify(response.data.data));
        return response.data.data;
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
    
    export async function createQRMode (data) {
      await servicesModule0.header();
      return axios.post('/api/module0/cpd_setting', data).then(response => {
        // console.log("exception create :" + JSON.stringify(response.data));
        return response.data;
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
    export async function getQRModeById(data){
      await servicesModule0.header();
          return axios.get("/api/module0/cpd_setting", {params: {
            CPD_SETTING_ID: data
          }}).then(response => {
          console.log("data :" + JSON.stringify(response.data.data));
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
    
      export async function updateQRMode(data) {
        const jsonObject = {};
      
        for (const [key, value] of data) {
          jsonObject[key] = value;
        }
        return axios
          .put('/api/module0/cpd_setting', jsonObject)
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
      export async function deleteQR(data){
        return axios
        .delete("/api/module0/cpd_setting", {
          data: { CPD_SETTING_ID: data }
        })
        .then(response => {
          console.log("data :" + JSON.stringify(response.data));
         return response.data;
        }).catch(function(error) {
         if (error.response) {
           // The request was made and the server responded with a status code
           // that falls out of the range of 2xx
           if (error.response.status == 401) {
            services.logout();
          }else {
            return "error"
          }
         }
        });
        }

    /// -------- CPD CUT OFF DATE --------
    export async function getAllCutOffList () {
      await servicesModule0.header();
      return axios.get('/api/module0/cpd_date').then(response => {
        console.log('Cut off date list :' + JSON.stringify(response.data.data));
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
    export async function createCutOffDate (data) {
      console.log('data : ' + data);
      await servicesModule0.header();
      return axios.post('/api/module0/cpd_date', data).then(response => {
        console.log(response.data);
        return response.data;
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.status == 500) {
            // console.log(JSON.stringify(error.response.data.message));
            if (error.response.data.message.includes('Expired token')) {
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
//  ---------------------------- Account Code --------------
export async function getAllAccCodeList (data) {
  await servicesModule0.header();
  return axios.get('/api/module0/finance_account_code', {
    params: {
    },
  }).then(response => {
    console.log('account code list :' + JSON.stringify(response.data.data));
    return response.data.data;
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
export async function createAccCode (data) {
  await servicesModule0.header();
  return axios.post('/api/module0/finance_account_code', data).then(response => {
    // console.log("exception create :" + JSON.stringify(response.data));
    return response.data;
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
export async function updateAccCode (data) {
  const jsonObject = {};

  for (const [key, value] of data) {
    jsonObject[key] = value;
  }
  return axios
    .put('/api/module0/finance_account_code', jsonObject)
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

export async function deleteAccCode(data){
  return axios
  .delete("/api/module0/finance_account_code", {
    data: { FINANCE_ACC_CODE_ID: data }
  })
  .then(response => {
    console.log("data :" + JSON.stringify(response.data));
   return response.data;
  }).catch(function(error) {
   if (error.response) {
     // The request was made and the server responded with a status code
     // that falls out of the range of 2xx
     if (error.response.status == 401) {
      services.logout();
    }else {
      return "error"
    }
   }
  });
  }


  // ------------------------- SETTING CODE ----------------------------
  export async function getAllGlCodeList (data) {
    await servicesModule0.header();
    return axios.get('/api/module0/finance_setting_code', {
      params: {
      },
    }).then(response => {
      console.log('account code list :' + JSON.stringify(response.data.data));
      return response.data.data;
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
  export async function createGLCode (data) {
    await servicesModule0.header();
    return axios.post('/api/module0/finance_setting_code', data).then(response => {
      // console.log("exception create :" + JSON.stringify(response.data));
      return response.data;
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
  export async function updateGLCode (data) {
    const jsonObject = {};
  
    for (const [key, value] of data) {
      jsonObject[key] = value;
    }
    return axios
      .put('/api/module0/finance_setting_code', jsonObject)
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
  
  export async function deleteGLCode(data){
    return axios
    .delete("/api/module0/finance_setting_code", {
      data: { FINANCE_ACC_CODE_ID: data }
    })
    .then(response => {
      console.log("data :" + JSON.stringify(response.data));
     return response.data;
    }).catch(function(error) {
     if (error.response) {
       // The request was made and the server responded with a status code
       // that falls out of the range of 2xx
       if (error.response.status == 401) {
        services.logout();
      }else {
        return "error"
      }
     }
    });
    }

