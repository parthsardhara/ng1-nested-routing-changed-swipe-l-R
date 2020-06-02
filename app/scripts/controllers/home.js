'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
    .controller('HomeCtrl', function ($scope, $state) {

        $scope.message = 'test';

        $scope.swipeLeft = (e) => {

            if ($state.current.name !== 'home.page5') {
                // statte valu joiye
                console.log('swipeLeft', e)
                console.log('$state', $state)
                console.log('$location PATH', $state.current.name)

                switch ($state.current.name) {
                    case 'home.page1':
                        console.log('page1')

                        $state.go('home.page2', { reload: true });
                        break;
                    case 'home.page2':
                        console.log('page2')
                        $state.go('home.page3', { reload: true });
                        break;
                    case 'home.page3':
                        console.log('page3')
                        $state.go('home.page4', { reload: true });
                        break;
                    case 'home.page4':
                        console.log('page4')
                        $state.go('home.page5', { reload: true });
                        break;
                    case 'home.page5':
                        console.log('page5')
                        $state.go('home.page5', { reload: true });
                        break;
                    default:
                        console.log('default')
                        $state.go('home.page1', { reload: true });
                        break;
                }
            }

        }

        $scope.swipeRight = (e) => {

            if ($state.current.name !== 'home.page1') {
                console.log('swipeRight', e)

                switch ($state.current.name) {
                    case 'home.page1':
                        console.log('page1')
                        $state.go('home.page1', { reload: true });
                        break;
                    case 'home.page2':
                        console.log('page2')
                        $state.go('home.page1', { reload: true });
                        break;
                    case 'home.page3':
                        console.log('page3')
                        $state.go('home.page2', { reload: true });
                        break;
                    case 'home.page4':
                        console.log('page4')
                        $state.go('home.page3', { reload: true });
                        break;
                    case 'home.page5':
                        console.log('page5')
                        $state.go('home.page4', { reload: true });
                        break;
                    default:
                        console.log('default')
                        $state.go('home.page1', { reload: true });
                        break;
                }
            }
        }
    });
