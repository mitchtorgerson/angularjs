import angular from 'angular';

import { AppHeaderComponent } from './app-header.component';
import './app-header.css';

export const AppHeaderModule = angular
  .module('ngll.components.app-header', [])
  .component('appHeader', AppHeaderComponent);
