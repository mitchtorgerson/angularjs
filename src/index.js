import angular from 'angular';

import { AppModule } from './components/app/app.module';

/**
 * Bootstrapping
 * see: https://docs.angularjs.org/guide/bootstrap
 *
 * tldr: manual bootstrapping gives us the flexibility to detach the application
 * from the index.html template.
 */
angular.element(() => {
  angular.bootstrap(document, [AppModule.name], { strictDi: true });
});
