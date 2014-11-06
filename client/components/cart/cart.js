angular.module('storeApp').directive('cart', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            checkoutPath: '@'
        },
        templateUrl: 'components/cart/cart.html',
        controller: function ($scope) {
            $scope.count = 0;
            $scope.total = 0;

            function updateTotals(event, items) {
                var count = 0;
                var total = 0;
                angular.forEach(items, function (item) {
                    count++;
                    total += Number(item.price);
                });

                $scope.count = count;
                $scope.total = total;
            };

            $scope.$on('cartItemAdded', updateTotals);
        }
    };
});
