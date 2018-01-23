//modulo $routeParams serve para pegar os parematros da url
angular.module('alurapic').controller('FotoController',function($scope, $http, $routeParams){

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto){
            $scope.foto = foto;
        })
        .error(function(erro){
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';
        });
        }

    $scope.submeter = function(){
     if($scope.formulario.$valid){
         //só vai ter id se for editar, se não tiver id, é uma foto nova
         //só entra aqui se tiver id (**EDITAR**)
         if($scope.foto._id){
            $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
            .success(function(){
                $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso';
            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
            });
        }else{
            //entra aqui se nao tiver id, ou seja, nova foto (**CADASTRAR**)
            $http.post('v1/fotos', $scope.foto)
        .success(function(){
            $scope.mensagem = 'Foto cadastrada com sucesso';
            $scope.formulario.$setPristine();
            $scope.foto = {};
        })
        .error(function(){
            $scope.mensagem = 'Erro ao cadastrar';
        });
        }
     }
    };
});