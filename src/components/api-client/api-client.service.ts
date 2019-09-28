
export class ApiClientService {
  private $http: ng.IHttpService;

  constructor($http: ng.IHttpService) {
    'ngInject';
    this.$http = $http;
  }

  public getFileReads(): ng.IPromise<any> {
    return this
      .$http
      .get('/api/files/reads')
      .then((response) => {
        return response.data;
      });
  }

  public getFileWrites(): ng.IPromise<any> {
      return this
          .$http
          .get('/api/files/writes')
          .then((response) => {
              return response.data;
          });
  }
}
