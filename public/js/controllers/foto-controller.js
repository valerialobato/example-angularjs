angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = '';
    console.log($routeParams.idFoto);
    if ($routeParams.idFoto) {
        $http.get('v1/fotos/' + $routeParams.idFoto)
            .success(function (data) {
                $scope.foto = data;
            })
            .error(function () {
                $scope.mensagem = 'Não foi possível obter a foto.';
            });
    }
    $scope.submeter = function () {
        if ($routeParams.idFoto) {
            $http.put('v1/fotos/' + $routeParams.idFoto, $scope.foto)
                .success(function () {
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso';
                    $scope.foto = {};
                })
                .error(function () {
                    $scope.mensagem = 'Não foi possível alterar ' + $scope.foto.titulo;
                });
        } else {
            if ($scope.formulario.$valid) {
                $http.post('v1/fotos', $scope.foto)
                    .success(function () {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto incluída com sucesso';
                    })
                    .error(function (erro) {
                        $scope.mensagem = 'Não foi possível incluir a foto';
                        console.log(erro);
                    });
            }
        }
    };
});