(function() {
    'use strict';

    angular
        .module('app.candidate')
        .directive('candidateRow', [
            'CandidateService',
            CandidateRow
        ]);

    //directive
    function CandidateRow(CandidateService) {
        return {
            bindToController : true,
            controller: function() {},
            controllerAs : 'ctrl',
            replace : true,
            restrict : 'A',
            scope: {
                candidate : '=',
            },
            link: function($scope, elem, attrs) {
                $scope.$watch('ctrl.candidate.enabled', function(oldValue, newValue) {
                    if (oldValue != newValue) {
                        CandidateService.edit($scope.ctrl.candidate.id, newValue);
                    }
                });
            },
            templateUrl : './src/candidate/candidate-row/candidate-row.html'
        };
    }

})();
