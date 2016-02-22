import {HomeController as controller} from './home.controller';
import template from './home.html!text';

export const homeDirective = ()=> {
    return {
        controller,
        template,
        controllerAs: 'vm',
        scope: {},
        replace: true,
        restrict: 'E'
    }
};
