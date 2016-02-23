import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeDirective from './home.directive';
import appContainer from '../appContainer/appContainer';

var home = angular.module('home', [
    uiRouter,
    appContainer
]).config(($stateProvider) => {
    $stateProvider.state('app.home', {
        url: '/home',
        template: '<home></home>'
    })
})
.directive('home', homeDirective);

export default home.name;
