angular.module('ata').controller('FrmCtrl',function($scope, $stateParams, $filter){

	//$scope.cadastro.original = $scope.cadastro.lista.find(function(x) {return x.id === $stateParams.id; });
	$scope.cadastro.original = $filter('filter')($scope.cadastro.lista, {id: $stateParams.id}, true);

	$scope.cadastro.registro = angular.copy($scope.cadastro.original);

});