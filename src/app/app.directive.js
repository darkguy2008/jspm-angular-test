import template from './app.html!text';

export default function appDirective() {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
