import angular from 'angular';
import NewComment from './newComment.component';

const MODULE_NAME = 'app.wall.newComment';
const module = angular.module(MODULE_NAME, []);

module.component('newComment', NewComment);

export {module, MODULE_NAME as default};
