import angular from 'angular';

import { ApiClientService } from './api-client.service';

export const ApiClientModule = angular
  .module('ngll.components.api-client', [])
  .service('llApiClient', ApiClientService);
