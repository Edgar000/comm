import templateUrl from 'ngtemplate!html!./wall.html';

export default function ($stateProvider) {
    $stateProvider
        .state('wall', {
            url: "/wall",
            templateUrl: templateUrl
        })
}