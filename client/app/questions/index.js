'use strict';

import angular from 'angular';
import routes from './questions.routes';
import QuestionsController from './questions.controller';

export default angular.module('hg2App.questions', ['hg2App.auth', 'ui.router'])
  .config(routes)
  .controller('QuestionsController', QuestionsController)
  .name;
