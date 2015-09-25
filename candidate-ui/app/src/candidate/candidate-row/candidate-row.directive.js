(function() {
    'use strict';

    angular
        .module('app.candidate')
        .directive('candidateRow', [
            CandidateRow
        ]);

    //directive
    function CandidateRow() {
        return {
            bindToController : true,
            controller: function() {
            },
            controllerAs : 'ctrl',
            replace : true,
            restrict : 'EA',
            scope: { candidate : '=' },
            templateUrl :   './src/candidate/candidate-row/candidate-row.html'
        };
    }

})();
