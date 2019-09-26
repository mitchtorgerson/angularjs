import angular from 'angular';

import templateUrl from './file-writes-page.html';

export const FileWritesPageModule = angular
  .module('llFileWritesPage', [])
  .component('llFileWritesPage', {
    templateUrl,
  });
