angular.module('ata').controller('FrmCtrl',function($scope, $state, $stateParams){

	$scope.cadastro.original = _.find($scope.cadastro.lista, function(obj) {
		return parseInt(obj.id) === parseInt($stateParams.id);
	});

	$scope.cadastro.registro = angular.copy($scope.cadastro.original);

	$scope.emitirRelatorio = function () {
		var url = $state.href('frm', {parameter: {id: $scope.cadastro.registro.id + 1}});
		window.open(url,'_blank');
	};

});