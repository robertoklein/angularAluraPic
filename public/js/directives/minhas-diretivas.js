angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

    var ddo = {};
    ddo.restric = "AE";
    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';
                    
    return ddo;
})

//diretiva para apresentar a foto da url no cadastro
.directive('minhaFoto', function(){

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;

})

.directive('meuBotaoPerigo', function(){
    var ddo = {};
    ddo.restrict = "E";

    ddo.scope ={
        nome: '@',
        acao: '&'
    };
//o @ significa string (copia de valor)
//o & significa expressao

    ddo.template = ' <button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;
});
