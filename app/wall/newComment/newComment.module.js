import angular from 'angular';
import NewComment from './newComment.component';

const MODULE_NAME = 'app.wall.newComment';
const module = angular.module(MODULE_NAME, []);

module.controller('newCommentController', ['$scope', function($scope) {
    $scope.saved = {};
    $scope.save = function(comment) {
        $scope.saved = angular.copy($scope.comment);
        $scope.saved = angular.copy()
    };
}]);

module.component('newComment', NewComment);

export {module, MODULE_NAME as default};
