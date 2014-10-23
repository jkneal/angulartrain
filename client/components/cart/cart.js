angular.module('storeApp').directive('cart', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            itemId: '@',
            checkoutPath: '@'
        },
        templateUrl: 'components/cart/cart.html',
        controller: function ($scope, $rootScope) {
            $scope.items = [];
            $scope.count = 0;
            $scope.total = 0;

            function updateTotals() {
                var count = 0;
                var total = 0;
                angular.forEach($scope.items, function (item) {
                    count++;
                    total += Number(item.price);
                });

                $scope.count = count;
                $scope.total = total;
            };

            $rootScope.addToCart = function (item) {
                $scope.items.push(item);
                item.inCart = true;
                updateTotals();
            };
        }
    };
});