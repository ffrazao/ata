angular.module('ata').controller('FrmCtrl',function($scope, $state, $stateParams){

	$scope.cadastro.original = _.find($scope.cadastro.lista, function(obj) {
		return parseInt(obj.id) === parseInt($stateParams.id);
	});

	$scope.cadastro.registro = angular.copy($scope.cadastro.original);

	$scope.emitirRelatorio = function () {
        $scope.savarRegistro($scope.cadastro.registro);
		var url = $state.href('relatorio', {id: $scope.cadastro.registro.id});
		window.open(url,'_blank');
	};

	$scope.voltar = function () {
        $scope.savarRegistro($scope.cadastro.registro);
        $state.go("reuniao-lista");
	};
$scope.tinymceOptions = {
    onChange: function(e) {
      // put logic here for keypress and cut/paste changes
    },
    inline: false,
    plugins : 'advlist autolink link image lists charmap print preview',
    skin: 'lightgray',
    theme : 'modern'
  };
  
});