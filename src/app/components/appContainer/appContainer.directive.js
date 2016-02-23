import {AppContainerController as controller} from './appContainer.controller';
import template from './appContainer.html!text';

export default function appContainerDirective() {
    return {
        controller,
        template,
        controllerAs: 'vm',
        scope: {},
        replace: true,
        restrict: 'E'
    }
};
