import angular from 'angular';

import { FileReadsPageController } from './file-reads-controller';
import { ApiClientModule } from '../api-client/api-client.module';
import { FileListModule } from '../file-list/file-list.module';

import templateUrl from './file-reads-page.html';

export const FileReadsPageModule = angular
  .module('llFileReadsPage', [
    ApiClientModule.name,
    FileListModule.name,
  ])
  .controller('llFileReadsPageController', FileReadsPageController)
  .component('llFileReadsPage', {
    templateUrl,
    controller: 'llFileReadsPageController',
  });
