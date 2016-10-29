'use strict';

import angular from 'angular';

export default angular.module('hg2App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
