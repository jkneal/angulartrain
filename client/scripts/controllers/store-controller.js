angular.module('storeApp').controller('storeCrtl', function ($scope) {
    $scope.name = 'Joe\'s Sports Store';
    $scope.address = '5100 51st Chicago, IL';

    $scope.getStatus = function() {
        return 'Open';
    }
});