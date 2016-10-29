'use strict';

import angular from 'angular';
import routes from './new-question.routes';
import NewQuestionController from './new-question.controller';

export default angular.module('hg2App.newquestion', ['hg2App.auth', 'ui.router'])
  .config(routes)
  .controller('NewQuestionController', NewQuestionController)
  .name;
