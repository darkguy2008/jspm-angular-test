import {AppContainerController as controller} from './appContainer.controller';
import template from './appContainer.html!text';

export const appContainerDirective = ()=> {
    return {
        controller,
        template,
        controllerAs: 'vm',
        scope: {},
        replace: true,
        restrict: 'E'
    }
};
