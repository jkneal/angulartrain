angular.module('storeApp').controller('storeCrtl', function ($scope) {
    $scope.name = 'Joe\'s Sports Store';
    $scope.address = '5100 51st Chicago, IL';
    $scope.status = 'Open';

    $scope.getStatus = function () {
        return $scope.status;
    }

    $scope.products = [
        {
            name: "Basketball", description: "IU Branded",
            category: "Game Balls", price: 20
        },
        {
            name: "Football", description: "Purdue Branded",
            category: "Game Balls", price: 35
        }
    ];

    $scope.addProduct = function (productName, productDescription, productCategory, productPrice) {
        $scope.products.push({
            name: productName,
            description: productDescription,
            category: productCategory,
            price: productPrice
        });

        $scope.productAdded = true;
    }

    $scope.productAdded = false;

    $scope.removeProduct = function (index) {
        $scope.products.splice(index, 1);
    }
});