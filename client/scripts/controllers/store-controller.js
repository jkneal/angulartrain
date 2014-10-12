angular.module('storeApp').controller('storeCrtl', function ($scope, ProductService) {
    $scope.name = 'Joe\'s Sports Store';
    $scope.address = '5100 51st Chicago, IL';
    $scope.status = 'Open';

    $scope.getStatus = function () {
        return $scope.status;
    }

    $scope.products = [];
    ProductService.getAllProducts().then(function (result) {
        $scope.products = result.data;
    });

    $scope.addProduct = function (productName, productDescription, productCategory, productPrice) {
        var newProduct = {
            name: productName,
            description: productDescription,
            category: productCategory,
            price: productPrice
        };
        $scope.products.push(newProduct);

        ProductService.addProduct(newProduct).then(function (result) {
            $scope.products = result.data;
            $scope.productAdded = true;
        });
    };

    $scope.productAdded = false;

    $scope.removeProduct = function (index) {
        ProductService.removeProduct(index).then(function (result) {
            $scope.products = result.data;
        });
    }
});