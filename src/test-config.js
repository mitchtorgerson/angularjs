/**
 * test-config.js
 *
 * This file is used to configure karma at runtime to queue spec files for
 * preprocessing.
 */

import 'angular';
import 'angular-mocks';

// require all test files using special Webpack feature
// https://webpack.github.io/docs/context.html#require-context
const testsContext = require.context('.', true, /\.spec$/);
testsContext.keys().forEach(testsContext);
