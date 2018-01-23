angular.module('alurapic').controller('FotosController', function($scope, $http,$resource){

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    var recursoFoto = $resource('v1/fotos/:fotoId')

    $http.get("v1/fotos")
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    });

    $scope.remover = function(foto){
        $http.delete('v1/fotos/' + foto._id)
        .success(function(){
            //busca o indice da foto no array
            var indiceFoto = $scope.fotos.indexOf(foto);
            //retira da lista somente a foto apagada
            $scope.fotos.splice(indiceFoto,1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        })
        .error(function(){
            $scope.mensagem = 'Erro ao apagar a foto ' + foto.titulo;
        });
    }

    /*
    var promise = $http.get('v1/fotos');
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });
    */
});