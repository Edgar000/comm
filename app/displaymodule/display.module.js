import angular from 'angular';
import  commentModule from './commentmodule/comment.module';

const MODULE_NAME = 'displayModule';
const displayModule = angular.module(MODULE_NAME, [commentModule]);
console.log('display');

export {displayModule, MODULE_NAME as default};