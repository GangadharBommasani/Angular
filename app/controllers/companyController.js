var helloApp = angular.module('helloApp', ['ui.bootstrap']);

helloApp.controller('CompanyController',function($scope){
        $scope.status = {
            opened: false
        };
    $scope.companies = [
        {
            'companyName': 'Infosys',
            'employees': 12000,
            'headOffice': 'Bangalore',
            'establishedDate':02/10/2001
        },
        {
            'companyName': 'Wipro',
            'employees': 13000,
            'headOffice': 'Chennai',
            'establishedDate':03/01/2011
        },
        {
            'companyName': 'TCS',
            'employees': 14000,
            'headOffice': 'Mumbai',
            'establishedDate':04/06/2012
        }
    ];
    $scope.addRow = function(){
        var error = false;
        if(!$scope.companyName) {
            $scope.companyInformationForm.companyName.$dirty = true;
            $scope.companyInformationForm.companyName.$invalid = true;
            error = true;
        }
        if(!$scope.employees) {
            $scope.companyInformationForm.employees.$dirty = true;
            $scope.companyInformationForm.employees.$invalid = true;
            error = true;
        }
        if(!$scope.headOffice) {
            $scope.companyInformationForm.headOffice.$dirty = true;
            $scope.companyInformationForm.headOffice.$invalid = true;
            error = true;
        }
        if(!$scope.establishedDate) {
            $scope.companyInformationForm.establishedDate.$dirty = true;
            $scope.companyInformationForm.establishedDate.$invalid = true;
            error = true;
        }
        if (!error) {
            $scope.loader = true;

            $scope.companies.push( {
                'companyName':$scope.companyName,
                'employees':$scope.employees,
                'headOffice':$scope.headOffice,
                'establishedDate':$scope.establishedDate
            } );
            $scope.companyInformationForm.$setPristine();
        }

    };

    $scope.removeRow = function(name){
        var index = -1
        var companyNames = eval($scope.companies);

        for(var i=0; i < companyNames.length; i++) {
            if(companyNames[i].companyName=== name){
                index = i;
                break;
            }
        }

        $scope.companies.splice(index, 1);
    };

    $scope.open = function($event) {
        $scope.status.opened = true;
    };



})
    .directive('dateFormat', function(dateFilter) {
        return {
            require: 'ngModel',
            link : function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(viewValue){
                    return dateFilter(viewValue, 'MM/dd/yyyy');
                });
            }
        };
    });