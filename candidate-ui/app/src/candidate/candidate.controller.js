(function(){
    'use strict';

    angular
        .module('app.candidate')
        .controller('CandidateController', [
            'CandidateService',
            '$filter',
            '$scope',
            CandidateController
        ]);

    function CandidateController(CandidateService, $filter, $scope) {
        var self = this;

        self.candidates = [];
        CandidateService.get().then(function(response){
            self.candidates = response.data;
        });

        self.orderBy = false;
        self.reversed = false;
        self.sortCandidates = function(field) {
            if (field == self.orderBy) {
                self.reversed = !self.reversed;
            }

            self.orderBy = field;
            self.candidates = $filter('orderBy')(self.candidates, field, self.reversed);
        };

        self.addCandidate = function() {
            CandidateService
                .add($scope.ctrl.candidateName, true)
                .success(function () {
                    var highestId = 0;
                    angular.forEach(self.candidates, function (value, key) {
                        if (value.id > highestId) {
                            highestId = value.id;
                        }
                    });

                    self.candidates.push(new Object({id: highestId + 1, name: $scope.ctrl.candidateName, enabled: true}));
                });
        };

        self.clicked = {};
        self.deleteCandidates = function () {
            var ids = [];
            angular.forEach(self.clicked, function (value, key) {
                if (value) {
                    ids.push(parseInt(key));
                }
            });

            CandidateService
                .remove(ids)
                .success(function () {
                    angular.forEach(ids, function (id, i) {
                        console.log(id);
                        angular.forEach(self.candidates, function (value, key) {
                            console.log(value.id);
                            if (value.id == id) {
                                self.candidates.splice(key, 1);
                            }
                        });
                    });
                });
        };
    }

})();
