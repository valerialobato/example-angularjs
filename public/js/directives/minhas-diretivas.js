angular.module('minhasDiretivas', []).directive('meuPainel', function () {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.scope = { titulo : '@titulo' };
    ddo.templateUrl = 'js/directives/meu-painel.html';
    ddo.transclude = true;
    return ddo;
})