angular.module('relatorio', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('relatorio').config(function($stateProvider) {

    $stateProvider.state('relatorio', {
        url: '/relatorio/:id',
        templateUrl: 'relatorio/partial/relatorio.html',
        controller: 'RelatorioCtrl',
    });

    /* Add New States Above */

});

