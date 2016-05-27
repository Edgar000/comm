import angular from 'angular';

const MODULE_NAME = 'voteModule';
const voteModule = angular.module(MODULE_NAME, []);
console.log('vote');

export {voteModule, MODULE_NAME as default};