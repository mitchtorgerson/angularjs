import angular from 'angular';

import { AppFooterComponent } from './app-footer.component';

export const AppFooterModule = angular
  .module('ngll.components.app-footer', [])
  .component('appFooter', AppFooterComponent);
