webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(28),
  controller: ['glassesService', ctrl]
};

function ctrl(glassesService) {
  var self = this;

  self.bestSellers = [];
  self.showLoadMore = true;

  self.loadBestSellers = loadBestSellers;

  glassesService.getBestSellers(4, 0)
    .then(function (data) {
      self.bestSellers = data;
    });

  function loadBestSellers() {
    glassesService.getBestSellers(8, self.bestSellers.length)
      .then(function (data) {
        self.bestSellers = self.bestSellers.concat(data);
        if (data.length < 8) {
          self.showLoadMore = false;
        }
      });
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(29),
  controller: [ctrl]
};

function ctrl() {
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(30),
  controller: [ctrl],
  bindings: {
    item: '='
  }
};

function ctrl() {
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(31),
  controller: ['brandService', ctrl]
};

function ctrl(brandService) {
  var self = this;

  self.brands = brandService.getBrands();
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(32),
  controller: ['cartService', ctrl],
  bindings: {
    item: '='
  }
};

function ctrl(cartService) {
  var self = this;

  self.increase = increase;
  self.decrease = decrease;
  self.removeFromCart = removeFromCart;

  function increase() {
    cartService.addToCart(self.item);
  }

  function decrease() {
    cartService.decrease(self.item);
  }

  function removeFromCart() {
    cartService.removeFromCart(self.item);
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(33),
  controller: ['cartService', ctrl]
};

function ctrl(cartService) {
  var self = this;

  self.isOpen = false;

  self.openCart = openCart;
  self.closeCart = closeCart;
  self.clearCart = clearCart;
  self.getTotal = getTotal;

  function openCart() {
    self.isOpen = true;
    self.cart = cartService.getCart();
  }

  function closeCart() {
    self.isOpen = false;
  }

  function clearCart() {
    self.cart = cartService.clearCart();
  }

  function getTotal() {
    return cartService.getTotal();
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(34),
  controller: [ctrl]
};

function ctrl() {
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(35),
  controller: ['cartService', ctrl],
  bindings: {
    item: '='
  }
};

function ctrl(cartService) {
  var self = this;

  self.addToCart = addToCart;

  function addToCart() {
    cartService.addToCart(self.item);
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(36),
  controller: [ctrl]
};

function ctrl() {
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(37),
  controller: [ctrl]
};

function ctrl() {
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(38),
  controller: ['glassesService', ctrl]
};

function ctrl(glassesService) {
  var self = this;

  self.newArrivals = [];
  self.showLoadMore = true;

  self.loadMore = loadMore;

  glassesService.getNewArrivals(4, 0)
    .then(function (data) {
      self.newArrivals = data;
    });

  function loadMore() {
    glassesService.getNewArrivals(8, self.newArrivals.length)
      .then(function (data) {
        self.newArrivals = self.newArrivals.concat(data);
        if (data.length < 8) {
          self.showLoadMore = false;
        }
      });
  }
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(39),
  controller: [ctrl]
};

function ctrl() {
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(40),
  controller: ['cartService', ctrl]
};

function ctrl(cartService) {
  var self = this;

  self.cart = cartService.getCart();

  self.getTotal = getTotal;

  function getTotal() {
    return cartService.getTotal();
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(41),
  controller: [ctrl]
};

function ctrl() {
  var self = this;

  self.isOpen = false;

  self.showInput = showInput;

  function showInput() {
    self.isOpen = true;
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  template: __webpack_require__(42),
  controller: [ctrl]
};

function ctrl() {
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = [
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 1
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 2
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 3
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 4
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 5
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 6
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 7
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 8
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 9
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 10
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 11
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 12
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 13
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 14
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 15
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 16
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 17
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 18
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 19
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 20
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 21
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 22
  }
];


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = [
  {
    img: './images/ray-ban-brand.png',
    quantity: 345
  },
  {
    img: './images/carrera-brand.png',
    quantity: 231
  },
  {
    img: './images/persol-brabd.png',
    quantity: 172
  },
  {
    img: './images/gucci-brand.png',
    quantity: 112
  }
];


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = [
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 1
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 2
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 3
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 4
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 5
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 6
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 7
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 8
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 9
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 10
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 11
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 12
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 13
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 14
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 15
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 16
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 17
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 18
  },
  {
    name: 'ray-ban rb3016 clubmaster',
    oldPrice: 938,
    price: 698,
    img: './images/Ray-Ban-RB3016-Clubmaster.jpg',
    id: 19
  },
  {
    name: 'ray-ban rb4171 erika',
    oldPrice: 938,
    price: 557,
    img: './images/Ray-Ban-RB4171-Erika.jpg',
    id: 20
  },
  {
    name: 'ray-ban rb4187 chris',
    oldPrice: 938,
    price: 645,
    img: './images/Ray-Ban-RB4187-Chris.jpg',
    id: 21
  },
  {
    name: 'marc jacobs mj 525/s 6pm',
    oldPrice: 938,
    price: 1594,
    img: './images/Marc-Jacobs-mj-525.jpg',
    id: 22
  }
];


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = ['$timeout', '$parse', focusMe];

function focusMe($timeout, $parse) {
  return {
    link: function (scope, element, attrs) {
      var model = $parse(attrs.focusMe);
      scope.$watch(model, watchFn);
      element.bind('blur', blurFn);

      function watchFn(value) {
        if (value === true) {
          $timeout(function () {
            element[0].focus();
          });
        }
      }

      function blurFn() {
        scope.$apply(model.assign(scope, false));
      }
    }
  };
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {


routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('mainPage', {
      url: '/',
      component: 'mainPage'
    })
    .state('order', {
      url: '/order',
      component: 'orderPage'
    });
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = ['brandsConstant', brandService];

function brandService(brandsConstant) {
  var api = {
    getBrands
  };

  function getBrands() {
    return brandsConstant;
  }

  return api;
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = [cartService];

function cartService() {
  var api = {
    addToCart,
    getCart,
    clearCart,
    getTotal,
    decrease,
    removeFromCart
  };
  var cart = [];

  function addToCart(item) {
    var equals = cart.filter(function (el) {
      return el.id === item.id;
    });

    if (equals.length) {
      equals[0].count++;
      equals[0].amount = equals[0].price * equals[0].count;
    } else {
      cart.push({
        name: item.name,
        oldPrice: item.oldPrice,
        price: item.price,
        img: item.img,
        id: item.id,
        count: 1,
        amount: item.price
      });
    }
  }

  function getCart() {
    return cart;
  }

  function clearCart() {
    cart.length = 0;
  }

  function getTotal() {
    var total = 0;

    cart.forEach(function (item) {
      total += item.amount;
    });

    return total;
  }

  function decrease(item) {
    for (var i = 0; i < cart.length; i++) {
      if (item.id === cart[i].id) {
        if (cart[i].count > 1) {
          cart[i].count--;
          cart[i].amount = cart[i].price * cart[i].count;
        } else {
          cart.splice(i, 1);
        }
      }
    }
  }

  function removeFromCart(item) {
    for (var i = 0; i < cart.length; i++) {
      if (item.id === cart[i].id) {
        cart.splice(i, 1);
      }
    }
  }

  return api;
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = ['bestSellersConstant', 'newArrivalsConstant', '$timeout', glassesService];

function glassesService(bestSellersConstant, newArrivalsConstant, $timeout) {
  var api = {
    getBestSellers,
    getNewArrivals
  };

  function getBestSellers(take, skip) {
    return $timeout(function () {
      return bestSellersConstant.slice(skip, skip + take);
    }, 500);
  }

  function getNewArrivals(take, skip) {
    return $timeout(function () {
      return newArrivalsConstant.slice(skip, skip + take);
    }, 500);
  }

  return api;
}


/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = "<div class=\"best-sellers\">\r\n  <div class=\"best-sellers-title\">\r\n    <div class=\"best-sellers-title_text best-sellers-text1\">\r\n      best\r\n    </div>\r\n    <div class=\"best-sellers-title_text best-sellers-text2\">\r\n      sellers\r\n    </div>\r\n    <div class=\"best-sellers-title_line\">\r\n    </div>\r\n  </div>\r\n  <div class=\"best-sellers-list\">\r\n    <glasses-item\r\n      item=\"bestSeller\"\r\n      ng-repeat=\"bestSeller in $ctrl.bestSellers\">\r\n    </glasses-item>\r\n  </div>\r\n  <div\r\n    class=\"best-sellers-btn\"\r\n    ng-click=\"$ctrl.loadBestSellers()\"\r\n    ng-show=\"$ctrl.showLoadMore\">\r\n    <div class=\"best-sellers-btn_text\">\r\n      load more\r\n    </div>\r\n    <div class=\"best-sellers-btn_arrow fa fa-angle-right\" aria-hidden=\"true\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom\">\r\n  <div class=\"bottom-menu\">\r\n    <table class=\"bottom-brandss-list\">\r\n      <thead class=\"bottom-brands-list_title\">\r\n        <tr class=\"bottom-brands-list_title-row\">\r\n         <td class=\"bottom-brands-list_title-text\">\r\n           <div class=\"bottom-brands-list_title-text1\">\r\n             bra\r\n           </div>\r\n           <div class=\"bottom-brands-list_title-text2\">\r\n             nds\r\n           </div>\r\n         </td>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"bottom-brands-list_body\">\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Adidas\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            MAX & Co.\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Alexander McQueen\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Montana\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            BOSS\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Oakley\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Boss Orange\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Oxydo\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Bottega Veneta\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Persol\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Carrera\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Pierre Cardin\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Cocoons\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Ray-Ban\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Dior\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Ray-Ban Junior\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Dior Homme\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Seventh Street\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Hugo Boss\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Sillhouette\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Marc by Marc Jacobs\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Smith Optics\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Marc Jacobs\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Tommy Hilfiger\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-brands-list_body-row\">\r\n          <td class=\"bottom-brands-list-item brands-list-item-left\">\r\n            Max Mara\r\n          </td>\r\n          <td class=\"bottom-brands-list-item brands-list-item-right\">\r\n            Zoo Collection\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <table class=\"bottom-info-list\">\r\n      <thead class=\"bottom-info-list_title\">\r\n        <tr class=\"bottom-info-list_title-row\">\r\n         <td class=\"bottom-info-list_title-text\">\r\n           <div class=\"bottom-info-list_title-text1\">\r\n             other\r\n           </div>\r\n           <div class=\"bottom-info-list_title-text2\">\r\n             info\r\n           </div>\r\n         </td>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"bottom-info-list_body\">\r\n        <tr class=\"bottom-info-list_body-row\">\r\n          <td class=\"bottom-info-list-item\">\r\n            Terms and conditions\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-info-list_body-row\">\r\n          <td class=\"bottom-info-list-item\">\r\n            Privacy policy\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-info-list_body-row\">\r\n          <td class=\"bottom-info-list-item\">\r\n            Contact\r\n          </td>\r\n        </tr>\r\n        <tr class=\"bottom-info-list_body-row\">\r\n          <td class=\"bottom-info-list-item\">\r\n            FAQ\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"bottom-divider\">\r\n  </div>\r\n  <div class=\"bottom-logo\">\r\n    <div class=\"bottom-logo-text1\">\r\n      eye\r\n    </div>\r\n    <div class=\"bottom-logo-text2\">\r\n      wear\r\n    </div>\r\n  </div>\r\n  <div class=\"bottom-icons\">\r\n    <div class=\"bottom-icons_item icons_item1\">\r\n    </div>\r\n    <div class=\"bottom-icons_item icons_item2\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand\">\r\n  <div class=\"brand-img-container\">\r\n    <img class=\"brand-img\" ng-src=\"{{$ctrl.item.img}}\" />\r\n  </div>\r\n  <div class=\"brand-text\">\r\n    {{$ctrl.item.quantity}} products\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brands\">\r\n  <div class=\"brands-title\">\r\n    <div class=\"brands-title_text brands-text1\">\r\n      bra\r\n    </div>\r\n    <div class=\"brands-title_text brands-text2\">\r\n      nds\r\n    </div>\r\n    <div class=\"brands-title_line\">\r\n    </div>\r\n  </div>\r\n  <div class=\"brands-logos\">\r\n    <brand\r\n      item=\"brand\" ng-repeat=\"brand in $ctrl.brands\">\r\n    </brand>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart-row\">\r\n  <div class=\"cart-row_section img-container\">\r\n    <img class=\"cart-row_img\" ng-src=\"{{$ctrl.item.img}}\" />\r\n  </div>\r\n  <div class=\"cart-row_section item-container\">\r\n    {{$ctrl.item.name}}\r\n  </div>\r\n  <div class=\"cart-row_section price-container\">\r\n    {{$ctrl.item.price | currency:\"\"}} USD\r\n  </div>\r\n  <div class=\"cart-row_section quantity-container\">\r\n    <div\r\n      class=\"cart-row_quantity-decrease fa fa-minus-circle\"\r\n      ng-click=\"$ctrl.decrease()\"\r\n      aria-hidden=\"true\">\r\n    </div>\r\n    <div class=\"cart-row_quantity\">\r\n      {{$ctrl.item.count}}\r\n    </div>\r\n    <div\r\n      class=\"cart-row_quantity-increase fa fa-plus-circle\"\r\n      ng-click=\"$ctrl.increase()\"\r\n      aria-hidden=\"true\">\r\n    </div>\r\n  </div>\r\n  <div class=\"cart-row_section amount-container\">\r\n    {{$ctrl.item.amount | currency:\"\"}} USD\r\n  </div>\r\n  <div\r\n    class=\"cart-row_section bin-container fa fa-trash-o\"\r\n    ng-click=\"$ctrl.removeFromCart()\"\r\n    aria-hidden=\"true\">\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart\">\r\n  <div\r\n    class=\"cart_sidenav_bg\"\r\n    ng-show=\"$ctrl.isOpen\"\r\n    ng-click=\"$ctrl.closeCart()\">\r\n  </div>\r\n  <div\r\n    class=\"cart_sidenav\"\r\n    ng-class=\"{'cart_sidenav__open': $ctrl.isOpen}\">\r\n    <div class=\"cart_sidenav-container\">\r\n      <div\r\n        class=\"cart_sidenav-close fa fa-times\"\r\n        ng-click=\"$ctrl.closeCart()\"\r\n        aria-hidden=\"true\">\r\n      </div>\r\n      <div class=\"cart_sidenav_title\">\r\n        <div class=\"cart_sidenav_title_text cart_sidenav-text1\">\r\n          shopping\r\n        </div>\r\n        <div class=\"cart_sidenav_title_text cart_sidenav-text2\">\r\n          cart\r\n        </div>\r\n      </div>\r\n      <div class=\"cart_sidenav_table\">\r\n        <div class=\"cart_sidenav_table-head\">\r\n          <div class=\"cart_sidenav_table-cell image-cell\">\r\n            Image\r\n          </div>\r\n          <div class=\"cart_sidenav_table-cell item-cell\">\r\n            Item\r\n          </div>\r\n          <div class=\"cart_sidenav_table-cell price-cell\">\r\n            Price\r\n          </div>\r\n          <div class=\"cart_sidenav_table-cell quantity-cell\">\r\n            Quantity\r\n          </div>\r\n          <div class=\"cart_sidenav_table-cell amount-cell\">\r\n            Amount\r\n          </div>\r\n          <div class=\"cart_sidenav_table-cell bin-cell\">\r\n          </div>\r\n        </div>\r\n        <div class=\"cart_sidenav_table-body\">\r\n          <cart-row\r\n            item=\"cartItem\"\r\n            ng-repeat=\"cartItem in $ctrl.cart\">\r\n          </cart-row>\r\n        </div>\r\n        <div class=\"cart_sidenav_total-row\">\r\n          <div class=\"cart_sidenav_total-text\">\r\n            Total: {{$ctrl.getTotal() | currency:\"\"}} USD\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"cart_sidenav_clear-btn\" ng-click=\"$ctrl.clearCart()\">\r\n        <div class=\"cart_sidenav_clear-btn_text\">\r\n          Clear cart\r\n        </div>\r\n        <div\r\n          class=\"cart_sidenav_clear-btn_arrow fa fa-angle-right\"\r\n          aria-hidden=\"true\">\r\n        </div>\r\n      </div>\r\n      <div\r\n        class=\"cart_sidenav_checkout-btn\"\r\n        ng-show=\"$ctrl.cart.length > 0\"\r\n        ui-sref=\"order\">\r\n        <div class=\"cart_sidenav_checkout-btn_text\">\r\n          Checkout\r\n        </div>\r\n        <div\r\n        class=\"cart_sidenav_checkout-btn_arrow fa fa-angle-right\"\r\n        aria-hidden=\"true\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cart_icon-container\" ng-click=\"$ctrl.openCart()\">\r\n    <div class=\"cart_icon\"></div>\r\n    <div class=\"cart_icon-text\">cart</div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=\"glasses-container\">\r\n  <div class=\"glasses-container_item\">\r\n    <div class=\"glasses-container_item-text\">\r\n      <div class=\"glasses-container_item-text1-women\">wo</div>\r\n      <div class=\"glasses-container_item-text2-women\">men</div>\r\n    </div>\r\n    <div class=\"glasses-container_item-img women\">\r\n    </div>\r\n    <ul class=\"glasses-container_item-menu\">\r\n      <li class=\"glasses-container_item-menu-text women-text1\">\r\n        dioptric\r\n      </li>\r\n      <li class=\"glasses-container_item-menu-divider women-divider\">\r\n      </li>\r\n      <li class=\"glasses-container_item-menu-text women-text2\">\r\n        sunglasses\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"glasses-container_item\">\r\n    <div class=\"glasses-container_item-text\">\r\n      <div class=\"glasses-container_item-text1-men\">m</div>\r\n      <div class=\"glasses-container_item-text2-men\">en</div>\r\n    </div>\r\n    <div class=\"glasses-container_item-img men\">\r\n    </div>\r\n    <ul class=\"glasses-container_item-menu\">\r\n      <li class=\"glasses-container_item-menu-text men-text1\">\r\n        dioptric\r\n      </li>\r\n      <li class=\"glasses-container_item-menu-divider men-divider\">\r\n      </li>\r\n      <li class=\"glasses-container_item-menu-text men-text2\">\r\n        sunglasses\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<div class=\"glasses-item\" ng-click=\"$ctrl.addToCart()\">\r\n  <div class=\"glasses-item_img\">\r\n    <img ng-src=\"{{$ctrl.item.img}}\" />\r\n  </div>\r\n  <div class=\"glasses-item_name\">\r\n    {{$ctrl.item.name}}\r\n  </div>\r\n  <div class=\"glasses-item_old-price\">\r\n    {{$ctrl.item.oldPrice | currency:\"\"}} USD\r\n  </div>\r\n  <div class=\"glasses-item_price\">\r\n    {{$ctrl.item.price | currency:\"\"}} USD\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\r\n  <nav-bar></nav-bar>\r\n  <glasses-container></glasses-container>\r\n  <special-offers></special-offers>\r\n  <best-sellers></best-sellers>\r\n  <new-arrivals></new-arrivals>\r\n  <brands></brands>\r\n  <news-letter></news-letter>\r\n  <bottom></bottom>\r\n</div>\r\n";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n  <div class=\"navigation-logo\" ui-sref=\"mainPage\">\r\n    <span class=\"navigation-logo_text logo_text1\">eye</span>\r\n    <span class=\"navigation-logo_text logo_text2\">wear</span>\r\n  </div>\r\n  <ul class=\"navigation-menu\">\r\n    <li class=\"navigation-menu_items navigation-menu_item1\">\r\n      dioptric glasses\r\n    </li>\r\n    <li class=\"navigation-menu_items navigation-menu_item2\">\r\n      sunglasses\r\n    </li>\r\n    <li class=\"navigation-menu_items navigation-menu_item3\">\r\n      kids glasses\r\n    </li>\r\n  </ul>\r\n  <div class=\"navigation-icons\">\r\n    <search></search>\r\n    <cart></cart>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-arrivals\">\r\n  <div class=\"new-arrivals-title\">\r\n    <div class=\"new-arrivals-title_text new-arrivals-text1\">\r\n      new\r\n    </div>\r\n    <div class=\"new-arrivals-title_text new-arrivals-text2\">\r\n      arrivals\r\n    </div>\r\n    <div class=\"new-arrivals-title_line\">\r\n    </div>\r\n  </div>\r\n  <div class=\"new-arrivals-list\">\r\n    <glasses-item\r\n      item=\"newArrival\"\r\n      ng-repeat=\"newArrival in $ctrl.newArrivals\">\r\n    </glasses-item>\r\n  </div>\r\n  <div\r\n    class=\"new-arrivals-btn\"\r\n    ng-click=\"$ctrl.loadMore()\"\r\n    ng-show=\"$ctrl.showLoadMore\">\r\n    <div class=\"new-arrivals-btn_text\">\r\n      load more\r\n    </div>\r\n    <div class=\"new-arrivals-btn_arrow fa fa-angle-right\" aria-hidden=\"true\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-letter\">\r\n  <div class=\"news-letter-title\">\r\n    <div class=\"news-letter-title_text news-letter-text1\">\r\n      news\r\n    </div>\r\n    <div class=\"news-letter-title_text news-letter-text2\">\r\n      letter\r\n    </div>\r\n    <div class=\"news-letter-title_line\">\r\n    </div>\r\n  </div>\r\n  <div class=\"news-letter-content\">\r\n    <div class=\"news-letter-content-images\">\r\n      <div class=\"news-letter-content-images_item images_item-left\">\r\n        <div class=\"news-letter-content-images_text images_text-left\">\r\n          Morbi faucibus elementum sodales\r\n        </div>\r\n        <div class=\"news-letter-content-images_btn images_btn-left\">\r\n          <div class=\"news-letter-content-images_btn-text\">\r\n            learn more\r\n          </div>\r\n          <div\r\n            class=\"news-letter-content-images_btn-arrow fa fa-angle-right\"\r\n            aria-hidden=\"true\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"news-letter-content-images_item images_item-middle\">\r\n        <div class=\"news-letter-content-images_text images_text-middle\">\r\n          Morbi faucibus elementum\r\n        </div>\r\n        <div class=\"news-letter-content-images_btn images_btn-middle\">\r\n          <div class=\"news-letter-content-images_btn-text\">\r\n            learn more\r\n          </div>\r\n          <div\r\n            class=\"news-letter-content-images_btn-arrow fa fa-angle-right\"\r\n            aria-hidden=\"true\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"news-letter-content-images_item images_item-right\">\r\n        <div class=\"news-letter-content-images_text images_text-right\">\r\n          Morbi faucibus elementum sodales\r\n        </div>\r\n        <div class=\"news-letter-content-images_btn images_btn-right\">\r\n          <div class=\"news-letter-content-images_btn-text\">\r\n            learn more\r\n          </div>\r\n          <div\r\n            class=\"news-letter-content-images_btn-arrow fa fa-angle-right\"\r\n            aria-hidden=\"true\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"news-letter-content-text\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu risus nulla. In gravida vestibulum nulla, non rutrum odio vestibulum ac.\r\n    </div>\r\n    <div class=\"news-letter-content-form\">\r\n      <input\r\n        class=\"news-letter-content-form_input\"\r\n        type=\"email\"\r\n        placeholder=\"email@email.com\" />\r\n      <div class=\"news-letter-content-form_btn\">\r\n        <div class=\"news-letter-content-form_btn-text fa fa-paper-plane\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"order-page\">\r\n  <nav-bar></nav-bar>\r\n  <div class=\"order-page_content\">\r\n    <div class=\"order-page_address\">\r\n      <div class=\"order-page_address-title\">\r\n        <div class=\"order-page_address-title_text order-page_address-text1\">\r\n          add\r\n        </div>\r\n        <div class=\"order-page_address-title_text order-page_address-text2\">\r\n          ress\r\n        </div>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"name\"\r\n          class=\"order-page_input order-page_name\"\r\n          ng-model=\"test1\"\r\n          ng-required=\"true\" />\r\n        <span class=\"floating-label\">Name</span>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"tel\"\r\n          name=\"phone\"\r\n          class=\"order-page_input order-page_phone\"\r\n          ng-model=\"test2\"\r\n          ng-required=\"true\" />\r\n        <span class=\"floating-label\">Phone number</span>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"house-number\"\r\n          class=\"order-page_input order-page_house-number\"\r\n          ng-pattern=\"/^[ 0-9]+$/\"\r\n          ng-model=\"test3\"\r\n          ng-required=\"true\" />\r\n        <span class=\"floating-label\">House number</span>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"street\"\r\n          class=\"order-page_input order-page_street\"\r\n          ng-model=\"test4\"\r\n          ng-required=\"true\"/>\r\n        <span class=\"floating-label\">Street</span>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"appartment\"\r\n          class=\"order-page_input order-page_appartment\"\r\n          pattern=\"^[ 0-9]+$\"\r\n          ng-model=\"test5\"\r\n          ng-required=\"true\"/>\r\n        <span class=\"floating-label\">Appartment</span>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"city\"\r\n          class=\"order-page_input order-page_city\"\r\n          ng-model=\"test6\"\r\n          ng-required=\"true\" />\r\n        <span class=\"floating-label\">City / Tow</span>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"country\"\r\n          class=\"order-page_input order-page_country\"\r\n          ng-model=\"test7\"\r\n          ng-required=\"true\" />\r\n        <span class=\"floating-label\">Country</span>\r\n      </div>\r\n      <div class=\"order-page_input-container\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"code\"\r\n          class=\"order-page_input order-page_code\"\r\n          pattern=\"^[ 0-9]+$\"\r\n          ng-model=\"test8\"\r\n          ng-required=\"true\" />\r\n        <span class=\"floating-label\">Zip-code</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"order-page_process-order\">\r\n      <div class=\"order-page_process-title\">\r\n        <div class=\"order-page_process-title_text order-page_process-text1\">\r\n          process\r\n        </div>\r\n        <div class=\"order-page_process-title_text order-page_process-text2\">\r\n          order\r\n        </div>\r\n      </div>\r\n      <div class=\"order-page_order-total\">\r\n        Order total:\r\n      </div>\r\n      <div class=\"order-page_row\" ng-repeat=\"cartItem in $ctrl.cart\">\r\n        <div class=\"order-page_cell order-page_item\">\r\n          {{cartItem.name}}\r\n        </div>\r\n        <div class=\"order-page_cell order-page_quantity\">\r\n          {{cartItem.count}}\r\n        </div>\r\n        <div class=\"order-page_cell order-page_amount\">\r\n          {{cartItem.amount | currency:\"\"}} USD\r\n        </div>\r\n      </div>\r\n      <div class=\"order-page_total\">\r\n        <div class=\"order-page_total-text\">\r\n          Total Amount: {{$ctrl.getTotal() | currency:\"\"}} USD\r\n        </div>\r\n      </div>\r\n      <div class=\"order-page_btn\">\r\n        <div class=\"order-page_btn_text\">\r\n          Place oreder\r\n        </div>\r\n        <div class=\"order-page_btn_arrow fa fa-angle-right\" aria-hidden=\"true\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <bottom></bottom>\r\n</div>\r\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\r\n  <div\r\n    class=\"search_bg\"\r\n    ng-show=\"$ctrl.isOpen\">\r\n  </div>\r\n  <input\r\n  type=\"text\"\r\n  name=\"search\"\r\n  class=\"search_input\"\r\n  ng-class=\"{'search_input__open': $ctrl.isOpen}\"\r\n  focus-me=\"$ctrl.isOpen\" />\r\n  <div class=\"search_icon-container\" ng-click=\"$ctrl.showInput()\">\r\n    <div class=\"search_icon\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"special-offers\">\r\n  <div class=\"special-offers-content\">\r\n    <div class=\"special-offers-content_title\">\r\n      <div class=\"special-offers-content_title-text title-text1\">\r\n        special\r\n      </div>\r\n      <div class=\"special-offers-content_title-text title-text2\">\r\n        offers\r\n      </div>\r\n      <div class=\"special-offers-content_title-line\"></div>\r\n    </div>\r\n    <div class=\"special-offers-content_left-block\">\r\n      <div class=\"special-offers-content_left-image\">\r\n        <div class=\"special-offers-content_left-text\">\r\n          Fusce sit amet est quam dolor sit ametis\r\n        </div>\r\n        <div class=\"special-offers-content_left-btn\">\r\n          <div class=\"special-offers-content_left-btn-text\">\r\n            learn more\r\n          </div>\r\n          <div\r\n            class=\"special-offers-content_left-arrow fa fa-angle-right\"\r\n            aria-hidden=\"true\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"special-offers-content_left-bottom\">\r\n        <div class=\"special-offers-content_left-bottom_item\">\r\n          <div class=\"special-offers-content_left-bottom_item-icon left\">\r\n          </div>\r\n          <div class=\"special-offers-content_left-bottom_item-big-text\">\r\n            free shipping\r\n          </div>\r\n          <div class=\"special-offers-content_left-bottom_item-small-text\">\r\n            worldwide\r\n          </div>\r\n        </div>\r\n        <div class=\"special-offers-content_left-bottom_item\">\r\n          <div class=\"special-offers-content_left-bottom_item-icon right\">\r\n          </div>\r\n          <div class=\"special-offers-content_left-bottom_item-big-text right-text\">\r\n            14 days free return\r\n          </div>\r\n          <div class=\"special-offers-content_left-bottom_item-small-text small-text-right\">\r\n            worldwide\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"special-offers-content_right-block\">\r\n      <div class=\"special-offers-content_right-image\">\r\n        <div class=\"special-offers-content_right-text\">\r\n          Fusce sit amet est quam dolor sit ametis\r\n        </div>\r\n        <div class=\"special-offers-content_right-btn\">\r\n          <div class=\"special-offers-content_right-btn-text\">\r\n            learn more\r\n          </div>\r\n          <div\r\n            class=\"special-offers-content_right-arrow fa fa-angle-right\"\r\n            aria-hidden=\"true\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(0);
__webpack_require__(1);
var routesConfig = __webpack_require__(23);

__webpack_require__(3);
__webpack_require__(2);

var glassesService = __webpack_require__(26);
var cartService = __webpack_require__(25);
var brandService = __webpack_require__(24);
var focusMe = __webpack_require__(22);
var bestSellersConstant = __webpack_require__(19);
var newArrivalsConstant = __webpack_require__(21);
var brandsConstant = __webpack_require__(20);
var mainPage = __webpack_require__(12);
var navBar = __webpack_require__(13);
var search = __webpack_require__(17);
var cart = __webpack_require__(9);
var cartRow = __webpack_require__(8);
var glassesContainer = __webpack_require__(10);
var specialOffers = __webpack_require__(18);
var bestSellers = __webpack_require__(4);
var glassesItem = __webpack_require__(11);
var newArrivals = __webpack_require__(14);
var brand = __webpack_require__(6);
var brands = __webpack_require__(7);
var newsLetter = __webpack_require__(15);
var bottom = __webpack_require__(5);
var orderPage = __webpack_require__(16);

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .factory('glassesService', glassesService)
  .factory('cartService', cartService)
  .factory('brandService', brandService)
  .config(routesConfig)
  .directive('focusMe', focusMe)
  .constant('bestSellersConstant', bestSellersConstant)
  .constant('newArrivalsConstant', newArrivalsConstant)
  .constant('brandsConstant', brandsConstant)
  .component('mainPage', mainPage)
  .component('navBar', navBar)
  .component('search', search)
  .component('cart', cart)
  .component('cartRow', cartRow)
  .component('glassesContainer', glassesContainer)
  .component('specialOffers', specialOffers)
  .component('bestSellers', bestSellers)
  .component('glassesItem', glassesItem)
  .component('newArrivals', newArrivals)
  .component('brand', brand)
  .component('brands', brands)
  .component('newsLetter', newsLetter)
  .component('bottom', bottom)
  .component('orderPage', orderPage);


/***/ })
],[43]);