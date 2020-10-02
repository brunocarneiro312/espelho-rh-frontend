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
    },
    funcionario: {
      findAll: apiUrl + apiRoot + '/funcionario',
      findById: apiUrl + apiRoot + '/funcionario/{id}',
      save: apiUrl + apiRoot + '/funcionario',
      update: apiUrl + apiRoot + '/funcionario',
      delete: apiUrl + apiRoot + '/funcionario/{id}',
    },
    espelho: {
      findAll: apiUrl + apiRoot + '/espelho',
      findById: apiUrl + apiRoot + '/espelho/{id}',
      save: apiUrl + apiRoot + '/espelho',
      update: apiUrl + apiRoot + '/espelho',
      delete: apiUrl + apiRoot + '/espelho/{id}',
    },
    notificacao: {
      findAll: apiUrl + apiRoot + '/notificacao',
      findById: apiUrl + apiRoot + '/notificacao/{id}',
      save: apiUrl + apiRoot + '/notificacao',
      update: apiUrl + apiRoot + '/notificacao',
      delete: apiUrl + apiRoot + '/notificacao/{id}',
    },
  }
};
