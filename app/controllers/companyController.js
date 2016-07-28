var companyController =function($scope, $uibModal) {
    $scope.status = {
        opened: false
    };
    $scope.format = 'MM/dd/yyyy';

    $scope.companies = [
        {
            'companyName': 'Infosys',
            'employees': 12000,
            'headOffice': 'Bangalore',
            'email': 'hello@gmail.com',
            'establishedDate': '02/10/2001'
        },
        {
            'companyName': 'Wipro',
            'employees': 13000,
            'headOffice': 'Chennai',
            'email': 'hello@gmail.com',
            'establishedDate': '03/01/2011'
        },
        {
            'companyName': 'TCS',
            'employees': 14000,
            'headOffice': 'Mumbai',
            'email': 'hello@gmail.com',
            'establishedDate': '04/06/2012'
        }
    ];
    $scope.partners = [
        {
            'firstName': 'yahoo',
            'lastName': 'inc',
            'emailAddress':'yahoo@gmail.com'
        },
        {
            'firstName': 'gmail',
            'lastName': 'inc',
            'emailAddress':'abcdef@gmail.com'
        }
    ]
    $scope.addRow = function () {
        var error = false;
        if (!$scope.companyName) {
            $scope.companyInformationForm.companyName.$dirty = true;
            $scope.companyInformationForm.companyName.$invalid = true;
            error = true;
        }
        if (!$scope.employees) {
            $scope.companyInformationForm.employees.$dirty = true;
            $scope.companyInformationForm.employees.$invalid = true;
            error = true;
        }
        if (!$scope.headOffice) {
            $scope.companyInformationForm.headOffice.$dirty = true;
            $scope.companyInformationForm.headOffice.$invalid = true;
            error = true;
        }
        if (!$scope.establishedDate) {
            $scope.companyInformationForm.establishedDate.$dirty = true;
            $scope.companyInformationForm.establishedDate.$invalid = true;
            error = true;
        }
        if (!$scope.partnerRep) {
            $scope.companyInformationForm.partnerRep.$dirty = true;
            $scope.companyInformationForm.partnerRep.$invalid = true;
            error = true;
        }
        if (!error) {
            $scope.loader = true;

            $scope.companies.push({
                'companyName': $scope.companyName,
                'employees': $scope.employees,
                'headOffice': $scope.headOffice,
                'email': $scope.email,
                'partnerRep': $scope.partnerRep,
                'establishedDate': $scope.establishedDate
            });
            $scope.companyInformationForm.$setPristine();
        }

        $scope.noOfPages = Math.ceil($scope.companies.length / $scope.entryLimit);
        $scope.filtered = $scope.tempUsers;
    };

    $scope.removeRow = function (name) {
        var index = -1
        var companyNames = eval($scope.companies);

        for (var i = 0; i < companyNames.length; i++) {
            if (companyNames[i].companyName === name) {
                index = i;
                break;
            }
        }

        $scope.companies.splice(index, 1);
    };

    $scope.open = function ($event) {
        $scope.status.opened = true;
    };

    $scope.submit_cancel = function () {
        $scope.companyName = '';
        $scope.employees = '';
        $scope.headOffice = '';
        $scope.establishedDate = '';
        $scope.email = '';
        $scope.companyInformationForm.$setPristine();
        // $scope.modalInstance.dismiss('cancel');
    }

    $scope.validateEmailAddress = function () {
        var email = $scope.email;
        if (email) {
            var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $scope.isValidMail = regExp.test(email);
        } else {
            $scope.isValidMail = true;
        }
    }
    $scope.emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    $scope.showAddPartnerPopupWindow = function(){

        var moduleInstanceResult = $uibModal.open({
            templateUrl: 'templates/addPartnerRep.html',
            backdrop: 'static'
        });

    };



};

companyController.$inject = ['$scope', '$uibModal'];