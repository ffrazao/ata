angular.module('ata').controller('FrmCtrl',function($scope, $stateParams, $filter){

	$scope.cadastro.original = _.find($scope.cadastro.lista, function(obj) {
		return parseInt(obj.id) === parseInt($stateParams.id);
	});

	$scope.cadastro.registro = angular.copy($scope.cadastro.original);

});