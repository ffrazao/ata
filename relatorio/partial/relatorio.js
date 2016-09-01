angular.module('ata').controller('RelatorioCtrl',function($scope, $stateParams){

	$scope.cadastro = null;

	var lista = $scope.restaurarRegistro();
	if (lista) {
		$scope.cadastro = _.find(lista, function(obj) {
			return parseInt(obj.id) === parseInt($stateParams.id);
		});
	}

});