const apiUrl = 'http://localhost:5000';
const apiRoot = '/api/v1';

export const environment = {
  production: false,
  api: {
    public: {
      signin: apiUrl + apiRoot + '/public/signin'
    },
    user: {
      findAll: apiUrl + apiRoot + '/service/user',
      findById: apiUrl + apiRoot + '/service/user/{id}',
      save: apiUrl + apiRoot + '/service/user',
      update: apiUrl + apiRoot + '/service/user',
      delete: apiUrl + apiRoot + '/service/user/{id}',
    }
  }
};
