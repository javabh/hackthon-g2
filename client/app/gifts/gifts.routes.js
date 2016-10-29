'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('gifts', {
    url: '/gifts',
    template: require('./gifts.html'),
    controller: 'GiftsController',
    controllerAs: 'gifts',
    authenticate: true
  });
}
