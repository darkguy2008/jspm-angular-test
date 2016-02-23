import $ from 'jquery';
import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import angularAnimate from 'angular-animate';
import angularMocks from 'angular-mocks';
import angularBootstrap from 'angular-bootstrap';
import uiRouter from 'angular-ui-router';
import normalize from 'normalize.css';
import angularLoadingBar from 'angular-loading-bar';

import components from './components/components';
import appDirective from './app.directive';

var app =
	angular.module('omApp', [
		'ui.router',
		'ngSanitize',
		'ngAnimate',
		'ui.bootstrap'
		,components.name
	])
	.directive('appDirective', appDirective);

angular.element(document).ready(function() {
	angular.bootstrap(document, [app.name]);
	console.log("Thanks Chris! :D");
});
