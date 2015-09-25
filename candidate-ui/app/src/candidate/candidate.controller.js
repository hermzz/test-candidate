(function(){
    'use strict';

    angular
        .module('app.candidate')
        .controller('CandidateController', [
            'CandidateService',
            '$filter',
            CandidateController
        ]);

    function CandidateController(CandidateService, $filter) {
        var self = this;

        self.candidates = [];
        CandidateService.get().then(function(response){
            self.candidates = response.data;
        });

        self.sortCandidates = function() {
            self.candidates = $filter('orderBy')(self.candidates, 'name');
        };
    }

})();
