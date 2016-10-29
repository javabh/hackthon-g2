'use strict';

import angular from 'angular';

export default angular.module('hackthonG2App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
