import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appContainerDirective from './appContainer.directive';

var appContainer = angular.module('appContainer', [
    'ui.router',
    'angular-loading-bar'
]).config(($stateProvider, $urlRouterProvider) => {
    // Default landing page, set to home
    $urlRouterProvider.otherwise(function($injector) {
        const $state = $injector.get('$state');
        $state.go('app.home');
    });
    // Parent state for all other top level menu components - e.g app.home, app.portfolio, etc
    $stateProvider.state('app', {
        abstract: true,
        url: '/app',
        template: '<app-container></app-container>'
    })
})
.directive('appContainer', appContainerDirective);

export default appContainer;
