import {appContainer} from './appContainer'
import {AppContainerController} from './appContainer.controller';
import {appContainerDirective} from './appContainer.directive';
import template from './appContainer.html!text';

describe('AppContainer', ()=>{
    let $rootScope,
    makeController;

    beforeEach(window.module(appContainer.name));
    beforeEach(inject((_$rootScope_)=>{
        $rootScope = _$rootScope_;
        makeController = ()=>{
            return new AppContainerController();
        };
    }));

    describe('Module', ()=>{ });

    describe('Controller', ()=>{
        it('should have a name property [REMOVE]', ()=>{
            let controller = makeController();
            expect(controller).to.have.property('greeting');
        });
    });
    describe('Template', ()=>{
        it('should have name in template [REMOVE]', ()=>{
            expect(template).to.match(/{{\s?vm\.greeting\s?}}/g);
        });
    });

    describe('Directive', ()=>{
        let directive = appContainerDirective();

        it('should use the right template',()=>{
            expect(directive.template).to.equal(template);
        });

        it('should use controllerAs', ()=>{
            expect(directive).to.have.property('controllerAs');
        });

        it('should use the right controller', ()=>{
            expect(directive.controller).to.equal(AppContainerController);
        });
    });
});