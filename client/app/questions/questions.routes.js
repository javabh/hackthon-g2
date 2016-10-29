'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('questions', {
    url: '/questions',
    template: require('./questions.html'),
    controller: 'QuestionsController',
    controllerAs: 'questions'
  })
  $stateProvider.state('myquestions', {
    url: '/my-questions',
    template: require('./my-questions.html'),
    controller: 'QuestionsController',
    controllerAs: 'questions'
  })
  $stateProvider.state('success', {
    url: '/success',
    template: require('./success.html'),
    controller: 'QuestionsController',
    controllerAs: 'questions'
  });
}
