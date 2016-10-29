'use strict';

import angular from 'angular';
import routes from './gifts.routes';
import GiftsController from './gifts.controller';

export default angular.module('hg2App.gifts', ['hg2App.auth', 'ui.router'])
  .config(routes)
  .controller('GiftsController', GiftsController)
  .name;
