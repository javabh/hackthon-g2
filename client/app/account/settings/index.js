'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('hackthonG2App.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
