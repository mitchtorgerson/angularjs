import angular from 'angular';

import { FileWritesPageModule } from './file-writes-page.module';

describe('FileWritesPageModule', () => {
  beforeEach(angular.mock.module(FileWritesPageModule.name));

  it('should exist', () => {
    expect(FileWritesPageModule).toBeDefined();
  });

  describe('llFileWritesPage component', () => {
    let $componentController;
    let llApiClient;

    beforeEach(inject((_$componentController_, _llApiClient_) => {
      $componentController = _$componentController_;
      llApiClient = _llApiClient_;
    }));

    describe('$onInit', () => {
      beforeEach(() => {
        spyOn(llApiClient, 'getFileWrites').and.returnValue(Promise.resolve([1, 2, 3]));
      });

      it('should use the api client to load file writes', (done) => {
        const ctrl = $componentController('llFileWritesPage', null, {});
        ctrl.$onInit().then(() => {
          expect(ctrl.fileWrites).toEqual([1, 2, 3]);
          expect(ctrl.lastLoaded).toBeDefined();
          done();
        });
      });
    });
  });

});
