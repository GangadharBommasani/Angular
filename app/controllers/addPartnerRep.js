var addPartnerRepController =function($scope, $uibModalInstance, addDealerRepValue) {

    $scope.cancel = function(){
        $uibModalInstance.dismiss();
    };


    $scope.addPartnerRep = {};
    $scope.addPartnerRep.id=null;
    $scope.addPartnerRep.firstName = null;
    $scope.addPartnerRep.lastName = null;
    $scope.addPartnerRep.emailAddress = null;

    $scope.saveAndClose  = function(form){
        if (form.$valid && !form.$pending) {
            console.log('add');
            addDealerRepValue.push($scope.addPartnerRep.firstName+' '
                +$scope.addPartnerRep.lastName+' '
                +$scope.addPartnerRep.emailAddress);
            $uibModalInstance.close();
        }else{
            form.$setSubmitted();
        }
    }

};
addPartnerRepController.$inject = ['$scope', '$uibModalInstance', 'addDealerRepValueProvider'];