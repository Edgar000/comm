import angular from 'angular';
import voteModule from './votemodule/vote.module.js';

const MODULE_NAME = 'commentModule';
const commentModule = angular.module(MODULE_NAME, [voteModule]);
console.log('comment');

export {commentModule, MODULE_NAME as default};