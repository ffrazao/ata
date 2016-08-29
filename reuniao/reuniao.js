angular.module('reuniao', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('reuniao').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('reuniao-lista', {
        url: '/',
        templateUrl: 'reuniao/reuniao-lista/reuniao-lista.html',
        controller: 'ReuniaoCtrl',
    });

    $stateProvider.state('frm', {
        url: '/reuniao/form/:id',
        templateUrl: 'reuniao/frm/frm.html',
        controller: 'ReuniaoCtrl',
    });

});

angular.module('reuniao').controller('ReuniaoCtrl', function($scope) {

    $scope.cadastro = { original: null, registro: null, lista: [] };
    $scope.cadastro.lista = [{"id":1,"pautaList":[{"id":0,"ordem":1,"$$hashKey":"object:48","tema":"Abertura"},{"id":1,"ordem":2,"$$hashKey":"object:61","tema":"Encerramento"}],"participanteList":[{"id":0,"nome":"Fernando Frazao","instituicao":"EMATER-DF","email":"ffrazao@gmail.com"},{"id":1,"nome":"José Roberto","instituicao":"CEB-DF","email":"jr@ceb.df.gov.br","telefone":"(61) 99999-9999"}],"assunto":"Acompanhamento CGTIC","inicio":"01/01/2016 08:00"}];

    $scope.id = 0;

    $scope.incluir = function() {
        $scope.cadastro.lista.push({ id: $scope.id++, pautaList: [], participanteList: [] });
    };

    $scope.limpar = function() {
        $scope.cadastro.lista = [];
    };

    $scope.excluirItem = function(lista, reg) {
        var i;
        for (i = lista.length - 1; i >= 0; i--) {
            if (reg.id === lista[i].id) {
                lista.splice(i, 1);
                break;
            }
        }
    };

    $scope.ordenar = function(lista, reg, sinal) {
        var i, temp;
        for (i = 0; i < lista.length; i++) {
            if (lista[i].id === reg.id) {
                if (sinal === '+') {
                    temp = lista[i].ordem;
                    lista[i].ordem = lista[i - 1].ordem;
                    lista[i - 1].ordem = temp;
                } else if (sinal === '-') {
                    temp = lista[i].ordem;
                    lista[i].ordem = lista[i + 1].ordem;
                    lista[i + 1].ordem = temp;
                }
                break;
            }
        }
        lista.sort(function(a, b) {
            return a.ordem - b.ordem;
        });
    };

});
