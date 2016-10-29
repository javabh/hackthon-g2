'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('hackthonG2App.admin', ['hackthonG2App.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
