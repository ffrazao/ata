angular.module('ata', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'reuniao', 'participante']);

angular.module('ata').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('ata').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.incluir = function(lista, reg) {
        if (lista && reg) {
            lista.push(reg);
            return reg.id + 1;
        }
    };

    $rootScope.limpar = function(lista) {
        if (lista) {
            lista.splice(0, lista.length);
        }
    };

    $rootScope.excluir = function(lista, reg) {
        if (lista && reg) {
            lista.splice(lista.map(function(x) {return x.id; }).indexOf(reg.id), 1);
        }
    };

    $rootScope.alterar = function(lista, orig, reg) {
        if (lista && orig && reg) {
            lista.splice(lista.map(function(x) {return x.id; }).indexOf(orig.id), 1, reg);
        }
    };

});
