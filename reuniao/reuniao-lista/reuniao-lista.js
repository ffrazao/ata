angular.module('reuniao').controller('ReuniaoListaCtrl', function($scope, $uibModal, $state) {

    $scope.pautaId = 0;

    $scope.incluirPauta = function(reg) {
        reg.pautaList.push({ id: $scope.pautaId++, ordem: reg.pautaList.length + 1 });
    };

    $scope.incluirParticipante = function(lista) {

        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'participante/partial/lista/lista.html',
            controller: 'ParticipanteCtrl',
            size: 'lg',
            resolve: {
                lista: function () {
                    return angular.copy(lista);
                }
            }
        });

        modalInstance.result.then(function (cadastro) {
            angular.copy(cadastro.lista, lista);
        });
    };

    $scope.editar = function(reg) {
        $scope.savarRegistro(reg);
        $state.go("frm", {id: reg.id});
    };

});
