'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('hackthonG2App.signup', [])
  .controller('SignupController', SignupController)
  .name;
