// Original code line was:
// import libs from './external'

import $ from 'jquery';
import angular from 'angular';

import template from './app.html!text';
export const appDirective = ()=> {
  return {
  	template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};

var app = angular.module('myApp', []);
app.directive('dgapp', appDirective);
