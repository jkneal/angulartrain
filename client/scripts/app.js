angular.module('storeApp', ['ngRoute']);

angular.module('storeApp').config(function ($routeProvider) {
    $routeProvider .when('/home', {
        templateUrl: 'partials/home.html'
    }).when('/add', {
        templateUrl: 'partials/add-product.html'
    }).when('/checkout', {
        templateUrl: 'partials/checkout.html'
    }).otherwise({
        redirectTo: '/home'
    });
});

angular.module('storeApp').filter('categories', function () {
        return function (items) {
            var categories = [];
            var keys = {};

            for (var i = 0; i < items.length; i++) {
                var val = items[i].category;
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    categories.push(val);
                }
            }

            return categories;
        };
    }
);

angular.module('storeApp').constant('ProductServiceUrl', 'http://localhost:3000/products');