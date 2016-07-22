angular.module('customDateFormat', [])
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
