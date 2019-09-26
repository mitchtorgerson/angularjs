import '@uirouter/angularjs';
import 'angular-animate';
import 'angular-cookies';
import 'angular-resource';
import 'angular-route';
import 'angular-sanitize';
import 'angular-touch';
import 'bootstrap';
import 'jquery';
import 'popper.js';
import angular from 'angular';

import { FileReadsPageModule } from '../file-reads-page/file-reads-page.module';
import { FileWritesPageModule } from '../file-writes-page/file-writes-page.module';

import { AppComponent } from './app.component';
import { AppFooterModule } from "./app-footer/app-footer.module";
import { AppHeaderModule } from './app-header/app-header.module';
import { ApiClientModule } from '../api-client/api-client.module';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export const AppModule = angular
  .module('ngll.components.app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    ApiClientModule.name,
    AppFooterModule.name,
    AppHeaderModule.name,
    FileReadsPageModule.name,
    FileWritesPageModule.name,
  ])
  .component('llApp', AppComponent)
  .config(($urlServiceProvider, $stateProvider) => {
    $urlServiceProvider.rules.otherwise({ state: 'root' });

    $stateProvider
      .state({
        name: 'root',
        url: '',
        component: 'llApp',
      })
      .state({
        name: 'root.fileReads',
        url: '/reads',
        component: 'llFileReadsPage',
      })
      .state({
        name: 'root.fileWrites',
        url: '/writes',
        component: 'llFileWritesPage',
      })
  })
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  });
