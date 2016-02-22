import angular from 'angular';
import {appContainer} from './appContainer/appContainer';
import {home} from './home/home';

export const components = angular.module('components', [
    appContainer.name,
    home.name
]);
