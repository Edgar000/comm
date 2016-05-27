import angular from 'angular';
import inputModule from './inputmodule/input.module';
import  displayModule from 'displaymodule/display.module';

const MODULE_NAME = 'app';
const module = angular.module(MODULE_NAME, []);

export {module, MODULE_NAME as default};