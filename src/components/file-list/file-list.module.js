import angular from 'angular';

import FileListDirective from "./file-list-directive";

export const FileListModule = angular
  .module('llFileListModule', [])
  .directive('llFileList', FileListDirective);
