import angular from 'angular';
import uiRouter from 'angular-ui-router';
import wallModule from './wall/wall.module';
import route from './app.route';

const MODULE_NAME = 'app';
const module = angular.module(MODULE_NAME, [
    uiRouter,
    wallModule
]);

module.config(route);

export {module, MODULE_NAME as default};
