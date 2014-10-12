angular.module('storeApp', []);

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