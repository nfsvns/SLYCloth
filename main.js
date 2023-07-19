var indexCart = 0;
var a = angular.module("myapp", ["ngRoute"]);
a.controller("myctrl", function ($scope, $rootScope, $routeParams) {
  $scope.xemthem = 4;
  $scope.xemthem1 = 4;
  $scope.xemthem2 = 4;
  $scope.xemthem3 = 4;
  $scope.searchs;
  $scope.seemore = function () {
    if ($scope.xemthem == 4) {
      $scope.xemthem = $scope.sanphams.length;
    } else {
      $scope.xemthem = 4;
    }
  }
  $scope.seemore1 = function () {
    if ($scope.xemthem1 == 4) {
      $scope.xemthem1 = $scope.products.length;
    } else {
      $scope.xemthem1 = 4;
    }
  }
  $scope.seemore2 = function () {
    if ($scope.xemthem2 == 4) {
      $scope.xemthem2 = $scope.productss.length;
    } else {
      $scope.xemthem2 = 4;
    }
  }
  $scope.seemore3 = function () {
    if ($scope.xemthem3 == 4) {
      $scope.xemthem3 = $scope.phukiens.length;
    } else {
      $scope.xemthem3 = 4;
    }
  }
  $scope.addCart = function (p) {
    if (typeof $rootScope.cart == 'undefined') {
      $rootScope.cart = [];
    };
    $scope.countCart = $rootScope.cart.length;
    if ($rootScope.cart.filter(i => i.id == p.id).length == 0) {
      $rootScope.cart.push(p);
      $rootScope.cart[$scope.countCart].quantity = 1;
      $rootScope.cart[$scope.countCart].sizeao = $scope.sizeao;
    }

  }
  $rootScope.sumMoney = 0;
  if (typeof $rootScope.cart != 'undefined') {
    for (var i = 0; i < $rootScope.cart.length; i++) {
      $rootScope.sumMoney = $rootScope.sumMoney + $rootScope.cart[i].quantity * $rootScope.cart[i].price;
    }
  }
  $scope.addClick = function (index) {
    $rootScope.cart[index].quantity = $rootScope.cart[index].quantity + 1;
    if (typeof $rootScope.cart != 'undefined') {
      $rootScope.sumMoney = 0;
      for (var i = 0; i < $rootScope.cart.length; i++) {
        $rootScope.sumMoney = $rootScope.sumMoney + $rootScope.cart[i].quantity * $rootScope.cart[i].price;
      }
    }
  }
  $scope.subClick = function (index) {
    $rootScope.cart[index].quantity = $rootScope.cart[index].quantity - 1;
    if (typeof $rootScope.cart != 'undefined') {
      $rootScope.sumMoney = 0;
      for (var i = 0; i < $rootScope.cart.length; i++) {
        $rootScope.sumMoney = $rootScope.sumMoney - $rootScope.cart[i].quantity * $rootScope.cart[i].price;
      }
    }
    if ($rootScope.cart[index].quantity < 0) {
      $rootScope.cart[index].quantity = 0;
    }
  }
  $scope.delProduct = function (index) {
    $rootScope.cart.splice(index, 1);
    if (typeof $rootScope.cart != 'undefined') {
      $rootScope.sumMoney = 0;
      for (var i = 0; i < $rootScope.cart.length; i++) {
        $rootScope.sumMoney = $rootScope.sumMoney + $rootScope.cart[i].quantity * $rootScope.cart[i].price;
      }
    }
  }
  $scope.sapxep = true;
            $scope.TitleSort = "Sắp Xếp Giá Giảm Dần.";
            $scope.sapxepsp = function () {
                if ($scope.sapxep == true) {
                    $scope.sapxep = false;
                    $scope.TitleSort = "Sắp Xếp Giá Tăng Dần";

                } else {
                    $scope.sapxep = true;
                    $scope.TitleSort = "Sắp Xếp Giá Giảm Dần.";


                }
            }
  // $scope.product = [];
  // $http.get('arrays.json').then(function(reponse){
  //   $scope.products= reponse.data;
  //   $scope.index = $scope.products.findIndex(record => record.id == $routeParams.url);
  // })
  $scope.sanphams = [
    {
      img: "ao1-0.jpg",
      name: "MOCHA SLOGAN TEE",
      detail1: "ao1-1.jpg",
      detail2: "ao1-2.jpg",
      price: 224000,
      number: "30%",
      sale: 320000,
      id: 0,
      type: "sanpham1",

    },
    {
      img: "anh2-0.jpg",
      name: "PINK TEENAGE WMS TEE",
      detail1: "anh2-1.jpg",
      detail2: "anh2-2.jpg",
      price: 236000,
      number: "20%",
      sale: 295000,
      id: 1,
      type: "sanpham1",

    },
    {
      img: "ao3-0.jpg",
      name: "WHITE CHAPSTICK WMS BOXY TEE",
      detail1: "ao3-1.jpg",
      detail2: "ao3-2.jpg",
      price: 256000,
      number: "20%",
      sale: 320000,
      id: 2,
      type: "sanpham1",

    },
    {
      img: "ao4-0.jpg",
      name: "WHITE INTERFACE BOXY TEE",
      detail1: "ao4-1.jpg",
      detail2: "ao4-2.jpg",
      price: 331500,
      number: "15%",
      sale: 390000,
      id: 3,
      type: "sanpham1",

    },
    {
      img: "ao1-0.jpg",
      name: "Áo 1",
      detail1: "ao1-1.jpg",
      detail2: "ao1-2.jpg",
      price: 222000,
      number: "30%",
      sale: 320000,
      id: 4,
      type: "sanpham1",

    },
    {
      img: "anh2-0.jpg",
      name: "Áo 2",
      detail1: "anh2-1.jpg",
      detail2: "anh2-2.jpg",
      price: 216000,
      number: "20%",
      sale: 295000,
      id: 5,
      type: "sanpham1",

    },
    {
      img: "ao3-0.jpg",
      name: "Áo 3",
      detail1: "ao3-1.jpg",
      detail2: "ao3-2.jpg",
      price: 226000,
      number: "20%",
      sale: 320000,
      id: 6,
      type: "sanpham1",

    },
    {
      img: "ao4-0.jpg",
      name: "Áo 4",
      detail1: "ao4-1.jpg",
      detail2: "ao4-2.jpg",
      price: 341500,
      number: "15%",
      sale: 390000,
      id: 7,
      type: "sanpham1",

    }
  ];
  $scope.products = [
    {
      img: "hoodie1-0.jpg",
      name: "MOCHA S HOODIE",
      detail1: "hoodie1-1.jpg",
      detail2: "hoodie1-2.jpg",
      price: 330000,
      number: "40%",
      sale: 550000,
      id: 0,
      type: "sanpham1",

    },
    {
      img: "hoodie2-0.jpg",
      name: "GREEN S HOODIE",
      detail1: "hoodie2-1.jpg",
      detail2: "hoodie2-2.jpg",
      price: 330000,
      number: "40%",
      sale: 550000,
      id: 1,
      type: "sanpham1",

    },
    {
      img: "hoodie3-0.jpg",
      name: "GREY EMINENCE HOODIE ZIP",
      detail1: "hoodie3-1.jpg",
      detail2: "hoodie3-2.jpg",
      price: 236000,
      number: "20%",
      sale: 295000,
      id: 2,
      type: "sanpham1",

    },
    {
      img: "jacket1-0.jpg",
      name: "BLACK SOLID CORDUROY JACKET",
      detail1: "jacket1-1.jpg",
      detail2: "jacket1-2.jpg",
      price: 325000,
      number: "50%",
      sale: 650000,
      id: 3,
      type: "sanpham1",

    },
    {
      img: "hoodie1-0.jpg",
      name: "Hoodie 1",
      detail1: "hoodie1-1.jpg",
      detail2: "hoodie1-2.jpg",
      price: 320000,
      number: "40%",
      sale: 550000,
      id: 4,
      type: "sanpham1",

    },
    {
      img: "hoodie2-0.jpg",
      name: "Hoodie 2",
      detail1: "hoodie2-1.jpg",
      detail2: "hoodie2-2.jpg",
      price: 36000,
      number: "40%",
      sale: 550000,
      id: 5,
      type: "sanpham1",

    },
    {
      img: "hoodie3-0.jpg",
      name: "Hoodie 3",
      detail1: "hoodie3-1.jpg",
      detail2: "hoodie3-2.jpg",
      price: 2436000,
      number: "20%",
      sale: 295000,
      id: 6,
      type: "sanpham1",

    },
    {
      img: "jacket1-0.jpg",
      name: "Jacket",
      detail1: "jacket1-1.jpg",
      detail2: "jacket1-2.jpg",
      price: 525000,
      number: "50%",
      sale: 650000,
      id: 7,
      type: "sanpham1",

    }
  ];
  $scope.productss = [
    {
      img: "quan1-0.jpg",
      name: "GREY CASUAL PANT",
      detail1: "quan1-1.jpg",
      detail2: "quan1-2.jpg",
      price: 247000,
      number: "35%",
      sale: 380000,
      id: 0,
      type: "sanpham1"
    },
    {
      img: "quan2-0.jpg",
      name: "BLCAK CASUAL PANT",
      detail1: "quan2-1.jpg",
      detail2: "quan2-2.jpg",
      price: 247000,
      number: "35%",
      sale: 380000,
      id: 1,
      type: "sanpham1"
    },
    {
      img: "quan3-0.jpg",
      name: "GREEN CASUAL SHORT",
      detail1: "quan3-1.jpg",
      detail2: "quan3-2.jpg",
      price: 227500,
      number: "35%",
      sale: 350000,
      id: 2,
      type: "sanpham1"
    },
    {
      img: "quan4-0.jpg",
      name: "BROWN CASUAL SHORT",
      detail1: "quan4-1.jpg",
      detail2: "quan4-2.jpg",
      price: 227500,
      number: "35%",
      sale: 350000,
      id: 3,
      type: "sanpham1"
    },
    {
      img: "quan1-0.jpg",
      name: "GREY CASUAL PANT",
      detail1: "quan1-1.jpg",
      detail2: "quan1-2.jpg",
      price: 247000,
      number: "35%",
      sale: 380000,
      id: 4,
      type: "sanpham1"
    },
    {
      img: "quan2-0.jpg",
      name: "BLCAK CASUAL PANT",
      detail1: "quan2-1.jpg",
      detail2: "quan2-2.jpg",
      price: 266000,
      number: "35%",
      sale: 380000,
      id: 5,
      type: "sanpham1"
    },
    {
      img: "quan3-0.jpg",
      name: "GREEN CASUAL SHORT",
      detail1: "quan3-1.jpg",
      detail2: "quan3-2.jpg",
      price: 247500,
      number: "35%",
      sale: 350000,
      id: 6,
      type: "sanpham1"
    },
    {
      img: "quan4-0.jpg",
      name: "BROWN CASUAL SHORT",
      detail1: "quan4-1.jpg",
      detail2: "quan4-2.jpg",
      price: 227500,
      number: "35%",
      sale: 350000,
      id: 7,
      type: "sanpham1"

    }
  ];
  $scope.phukiens = [
    {
      img: "phukien1.jpg",
      name: "phu kien 1",
      price: 250000,
      number: "25%",
      sale: 550000,
      id: 0,
      type: "sanpham1"
    },
    {
      img: "phukien2.jpg",
      name: "phu kien 2",
      price: 264000,
      number: "25%",
      sale: 550000,
      id: 1,
      type: "sanpham1"
    },
    {
      img: "phukien3.jpg",
      name: "phu kien 3",
      price: 230000,
      number: "25%",
      sale: 550000,
      id: 2,
      type: "sanpham1"
    },
    {
      img: "phukien4.jpg",
      name: "phu kien 4",
      price: 246000,
      number: "25%",
      sale: 550000,
      id: 3,
      type: "sanpham1"
    },
    {
      img: "phukien1.jpg",
      name: "phu kien 1",
      price: 266000,
      number: "25%",
      sale: 550000,
      id: 4,
      type: "sanpham1"
    },
    {
      img: "phukien2.jpg",
      name: "phu kien 2",
      price: 255000,
      number: "25%",
      sale: 550000,
      id: 5,
      type: "sanpham1"
    },
    {
      img: "phukien3.jpg",
      name: "phu kien 3",
      price: 365000,
      number: "25%",
      sale: 550000,
      id: 6,
      type: "sanpham1"
    },
    {
      img: "phukien4.jpg",
      name: "phu kien 4",
      price: 240000,
      number: "25%",
      sale: 550000,
      id: 7,
      type: "sanpham1"
    }
  ];
  $scope.index = $routeParams.url;
});

a.config(function ($routeProvider) {
  $routeProvider
    .when("/ao/:url", {
      templateUrl: "sanpham1.html?" + Math.random(),
      controller: "myctrl"
    })
    .when("/hoodie/:url", {
      templateUrl: "sanpham2.html?" + Math.random(),
      controller: "myctrl"
    })
    .when("/quan/:url", {
      templateUrl: "sanpham3.html?" + Math.random(),
      controller: "myctrl"
    })
    .when("/phukien/:url", {
      templateUrl: "phukien.html?" + Math.random(),
      controller: "myctrl"
    })
    .when("/cart", {
      templateUrl: "giohang.html?" + Math.random(),
      controller: "myctrl"
    })
    .otherwise({
      templateUrl: "index.html",
      controller: "myctrl"
    })
});
function changeImage(element) {

  var main = document.getElementById('main_product_image');
  main.src = element.src;


}


