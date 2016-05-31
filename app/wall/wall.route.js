import templateUrl from 'ngtemplate!html!./wall.html';
import WallController from './wall.controller';

export default function ($stateProvider) {
    $stateProvider
        .state('wall', {
            url: "/wall",
            templateUrl: templateUrl,
            controller: WallController,
            controllerAs: 'wallCtrl'
        })
}