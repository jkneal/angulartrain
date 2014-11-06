angular.module('storeApp').service('CartService', function ($rootScope) {
      var items = [];

      this.addToCart = function(item) {
         if (angular.isDefined(item)) {
           item.inCart = true;
           items.push(item);
           
           $rootScope.$broadcast('cartItemAdded', items);
         }
      };

      this.inCart = function(item) {
          if (angular.isDefined(item.inCart) && item.inCart) {
            return true;
          }
          return false;
      }

      this.getItems = function() {
        return items;
      }
});
