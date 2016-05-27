import angular from 'angular';
import inputModule from './inputmodule/input.module';
import  commentModule from './commentmodule/comment.module';

const MODULE_NAME = 'app';
const module = angular.module(MODULE_NAME, []);

export {module, MODULE_NAME as default};