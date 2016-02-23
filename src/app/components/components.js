import angular from 'angular';
import {appContainer} from './appContainer/appContainer';
import {home} from './home/home';

var components = angular.module('components', [
    appContainer,
    home
]);

export default components.name;
