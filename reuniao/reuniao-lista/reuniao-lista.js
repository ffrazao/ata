angular.module('reuniao').controller('ReuniaoListaCtrl', function($scope) {

    $scope.pautaId = 0;

    $scope.incluirPauta = function(reg) {
        reg.pautaList.push({ id: $scope.pautaId++, ordem: reg.pautaList.length + 1 });
    };

});
