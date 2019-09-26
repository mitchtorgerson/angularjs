import angular from 'angular';

import { FileReadsPageController } from './file-reads-controller';
import { ApiClientModule } from '../api-client/api-client.module';

import templateUrl from './file-reads-page.html';

export const FileReadsPageModule = angular
  .module('llFileReadsPage', [
    ApiClientModule.name,
  ])
  .controller('llFileReadsPageController', FileReadsPageController)
  .component('llFileReadsPage', {
    templateUrl,
    controller: 'llFileReadsPageController',
  });
