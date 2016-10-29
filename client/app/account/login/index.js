'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('hackthonG2App.login', [])
  .controller('LoginController', LoginController)
  .name;
