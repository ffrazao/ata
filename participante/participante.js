angular.module('participante', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('participante').config(function($stateProvider) {

/* Add New States Above */

});

angular.module('participante').controller('ParticipanteCtrl',function($scope, $uibModalInstance, lista) {
    
    $scope.cadastro = { original: null, registro: null, lista: lista };

    $scope.id = -1;
    if (lista) {
        lista.forEach(function(e) {
            if (e.id > $scope.id) {
                $scope.id = e.id;
            }
        });
    }
    $scope.id++;

    $scope.ok = function () {
        $uibModalInstance.close($scope.cadastro);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});