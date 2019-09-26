import angular from 'angular';

import { FileReadsPageModule } from './file-reads-page.module';

describe('FileReadsPageModule', () => {
  beforeEach(angular.mock.module(FileReadsPageModule.name));

  it('should exist', () => {
    expect(FileReadsPageModule).toBeDefined();
  });

  describe('llFileReadsPage component', () => {
    let $componentController;
    let llApiClient;

    beforeEach(inject((_$componentController_, _llApiClient_) => {
      $componentController = _$componentController_;
      llApiClient = _llApiClient_;
    }));

    describe('$onInit', () => {
      beforeEach(() => {
        spyOn(llApiClient, 'getFileReads').and.returnValue(Promise.resolve([1, 2, 3]));
      });

      it('should use the api client to load file reads', (done) => {
        const ctrl = $componentController('llFileReadsPage', null, {});
        ctrl.$onInit().then(() => {
          expect(ctrl.fileReads).toEqual([1, 2, 3]);
          expect(ctrl.lastLoaded).toBeDefined();
          done();
        });
      });
    });
  });

});
