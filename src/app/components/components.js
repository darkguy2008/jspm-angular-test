import angular from 'angular';
import appContainer from './appContainer/appContainer';
import home from './home/home';

var components = angular.module('components', [
    appContainer.name,
    home.name
]);

export default components;
