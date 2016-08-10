 var app =angular.module('companyInformationApp', ['ngRoute', 'ui.bootstrap', 'ngMessages', 'customDateFormat'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'templates/companyInfo.html',
            controller:'companyController'
        })
        .otherwise({ redirectTo: '/'})
}]);

app.controller('companyController', companyController);
 app.controller('addPartnerRepController', addPartnerRepController);
 app.value('addDealerRepValueProvider', []);