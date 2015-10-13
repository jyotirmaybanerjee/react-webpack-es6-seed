import request from 'superagent';
export default {

  getApplicationProperties() {
    return new Promise(function(resolve, reject) {
      let url = 'rest/App/commonPropertiesNew';
      request
        .get(url)
        .set('Accept', 'application/json')
        .end(function(err, result){
          if(err || !result || !result.text || !result.text.length){
            reject(Error(err.response.text));
          }
          else {
            result = JSON.parse(result.text);
            resolve(result);
          }
        });
    });
  },

  getApplicationConfigs() {
    return new Promise(function(resolve, reject) {
      let url = 'rest/App/Config';
      request
        .get(url)
        .set('Accept', 'application/json')
        .end(function(err, result){
          if(err || !result || !result.text || !result.text.length){
            reject(Error(err.response.text));
          }
          else {
            result = JSON.parse(result.text);
            resolve(result);
          }
        });
    });
  },

  getApplicationConfigDetails(config) {
    return new Promise(function(resolve, reject) {
      let url = 'rest/App/Config/' + config + '/Details';
      request
        .get(url)
        .set('Accept', 'application/json')
        .end(function(err, result){
          if(err || !result || !result.text || !result.text.length){
            reject(Error(err.response.text));
          }
          else {
            result = JSON.parse(result.text);
            resolve(result);
          }
        });
    });
  },

  saveApplicationConfigDetails(config) {
    return new Promise(function(resolve, reject) {
      let url = 'rest/App/Config/Save';
      request
        .post(url)
        .set('Accept', 'application/json')
        .send(config)
        .end(function(err, result){
          if(err || !result || !result.text || !result.text.length){
            reject(Error(err.response.text));
          }
          else {
            result = JSON.parse(result.text);
            resolve(result);
          }
        });
    });
  }
};
