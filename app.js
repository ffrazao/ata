angular.module('ata', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'ngResource', 'textAngular', 'checklist-model', 'reuniao', 'participante', 'relatorio']);

angular.module('ata').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('ata').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.incluir = function(lista, reg) {
        if (lista && reg) {
            lista.push(reg);
            return reg.id + 1;
        }
    };

    $rootScope.limpar = function(lista) {
        if (lista) {
            lista.splice(0, lista.length);
        }
    };

    $rootScope.excluir = function(lista, reg) {
        if (lista && reg) {
            lista.splice(lista.map(function(x) {return x.id; }).indexOf(reg.id), 1);
        }
    };

    $rootScope.alterar = function(lista, orig, reg) {
        if (lista && orig && reg) {
            lista.splice(lista.map(function(x) {return x.id; }).indexOf(orig.id), 1, reg);
        }
    };

    $rootScope.savarRegistro = function (reg) {
        var salvo = -1, lista = $rootScope.restaurarRegistro();
        if (lista && lista.length) {
            for (var i = 0; i < lista.length; i++) {
                if (lista[i].id === reg.id) {
                    salvo = i;
                    break;
                }
            }
        }
        if (salvo === -1) {
            lista.push(reg);
        } else {
            lista[salvo] = reg;
        }
        localStorage.setItem("lista", JSON.stringify(lista));
    };

    $rootScope.restaurarRegistro = function () {
        var lista = angular.fromJson(localStorage.getItem("lista"));
        if (!lista) {
            lista = [{"id":1,"pautaList":[{"id":0,"ordem":1,"$$hashKey":"object:48","tema":"Abertura"},{"id":1,"ordem":2,"$$hashKey":"object:61","tema":"Encerramento"}],"participanteList":[{"id":0,"nome":"Fernando Frazao","instituicao":"EMATER-DF","email":"ffrazao@gmail.com"},{"id":1,"nome":"José Roberto","instituicao":"CEB-DF","email":"jr@ceb.df.gov.br","telefone":"(61) 99999-9999"}],"assunto":"Acompanhamento CGTIC","inicio":"01/01/2016 08:00"}];
            lista = [];
            localStorage.setItem("lista", JSON.stringify(lista));
        }
        return lista;
    };

    $rootScope.indiceDePorCampo = function (lista, nomeCampo, valorCampo) {
        if (!lista || !nomeCampo || !valorCampo) {
            return;
        }
        for (var i = 0; i < lista.length; i++) {
            if (lista[i][nomeCampo] === valorCampo) {
                return angular.copy(lista[i]);
            }
        }
    };

});
