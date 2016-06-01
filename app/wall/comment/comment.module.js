import angular from 'angular';
import comment from './comment.component';
import voteModule from './vote/vote.module';

const MODULE_NAME = 'app.wall.comment';
const module = angular.module(MODULE_NAME, [voteModule]);

module.component('comment', comment);

export {module, MODULE_NAME as default};
