(function(){
    'use strict';

    angular
        .module('app.candidate')
        .service('CandidateService', [
            '$http',
            CandidateService
        ]);


    function CandidateService($http) {
        var self = this;

        this.get = get;

        function get(){
            return $http.get('/candidate');
        }

    }

})();
