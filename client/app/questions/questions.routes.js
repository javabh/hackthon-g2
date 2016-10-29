'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('questions', {
    url: '/questions',
    template: require('./questions.html'),
    controller: 'QuestionsController',
    controllerAs: 'questions'
  });
}
