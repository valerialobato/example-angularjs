angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    $scope.fotos = [];
    $scope.mensagem = '';


    $http.get("v1/fotos")
        .success(function (fotos) {
            $scope.filtro = '';
            $scope.fotos = fotos;
            $scope.mensagem = '';
        })
        .error(function (erro) {
            console.log(erro);
        });

    $scope.remover = function (foto) {
        console.log(foto);
       $http.delete("v1/fotos/"+foto._id)
            .success(function () {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.mensagem = 'Foto '+foto.titulo+' excluída com sucesso.';
                console.log('Foto '+foto.titulo+' excluída com sucesso.');
                $scope.fotos.splice(indiceFoto,1);
                
            })
            .error(function (erro) {
                $scope.mensagem = 'Não foi possível excluir a foto '+foto.titulo+'.';
            });
    };
});