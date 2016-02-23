import {HomeController as controller} from './home.controller';
import template from './home.html!text';

export default function homeDirective() {
    return {
        controller,
        template,
        controllerAs: 'vm',
        scope: {},
        replace: true,
        restrict: 'E'
    }
};
