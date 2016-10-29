'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('newquestion', {
    url: '/new-question',
    template: require('./new-question.html'),
    controller: 'NewQuestionController',
    controllerAs: 'newquestion',
    authenticate: true
  });
}
