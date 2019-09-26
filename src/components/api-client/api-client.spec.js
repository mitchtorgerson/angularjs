import angular from 'angular';

import { ApiClientModule } from './api-client.module';

/**
 * Quick function to dig the args out of the first arg of a call to a spy
 * @param {object} x spy
 */
const firstCallArgs = (x) => x.calls.first().args;

describe('ApiClientModule', () => {
  beforeEach(angular.mock.module(ApiClientModule.name));

  it('should exist', () => {
    expect(ApiClientModule).toBeDefined();
  });

  describe('ApiClient service', () => {
    let instance;
    let httpBackend;
    let responseSpy;

    beforeEach(inject(($httpBackend, llApiClient) => {
      instance = llApiClient;
      httpBackend = $httpBackend;
      responseSpy = jasmine.createSpy('onFulfilled');
    }));

    afterEach(() => {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('getFileReads should invoke the basic api route', () => {
      httpBackend.expectGET('/api/files/reads').respond({ data: [] });
      instance.getFileReads().then(responseSpy);
      httpBackend.flush();
      expect(firstCallArgs(responseSpy)[0].data).toEqual([]);
    });
  });

});
