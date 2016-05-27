import angular from 'angular';

const MODULE_NAME = 'inputModule';
const inputModule = angular.module(MODULE_NAME, []);
console.log('input');

export {inputModule, MODULE_NAME as default};