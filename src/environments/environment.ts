// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const apiUrl = 'http://localhost:5000';
const apiRoot = '/api/v1';


export const environment = {
  production: false,
  api: {
    user: {
      findAll: apiUrl + apiRoot + '/service/user',
      findById: apiUrl + apiRoot + '/service/user/{id}',
      save: apiUrl + apiRoot + '/service/user',
      update: apiUrl + apiRoot + '/service/user',
      delete: apiUrl + apiRoot + '/service/user/{id}',
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
