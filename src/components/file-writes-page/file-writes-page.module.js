import angular from 'angular';

import { FileWritesPageController } from './file-writes-controller';
import { ApiClientModule } from '../api-client/api-client.module';
import { FileListModule } from "../file-list/file-list.module";

import templateUrl from './file-writes-page.html';

export const FileWritesPageModule = angular
    .module('llFileWritesPage', [
        ApiClientModule.name,
        FileListModule.name,
    ])
    .controller('llFileWritesPageController', FileWritesPageController)
    .component('llFileWritesPage', {
        templateUrl,
        controller: 'llFileWritesPageController',
    });
