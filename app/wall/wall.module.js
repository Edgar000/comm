import angular from 'angular';
import route from './wall.route';
import newCommentModule from './newComment/newComment.module';
import commentModule from './comment/comment.module';
import WallResource from './wall.resource';

const MODULE_NAME = 'app.wall';
const module = angular.module(MODULE_NAME, [
    newCommentModule,
    commentModule
]);

module
    .service('wallResource', WallResource)
    .config(route);

export {module, MODULE_NAME as default};
