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
        function get() {
            return $http.get('/candidate');
        }

        this.edit = edit;
        function edit(id, enabled) {
            return $http.put('/candidate/' + id, {enabled: enabled});
        }

        this.add = add;
        function add(name, enabled) {
            return $http.post('/candidate', {name: name, enabled: enabled});
        }
    }
})();
