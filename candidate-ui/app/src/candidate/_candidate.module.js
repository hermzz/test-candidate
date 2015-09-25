(function(){
    'use strict';

    angular
        .module('app.candidate', [])
        .config([
            '$stateProvider',
            CandidateConfig
        ]);

    function CandidateConfig($stateProvider) {

        $stateProvider.state('app.candidate',{
            url : '/candidates',
            views : {
                'main@app' : {
                    templateUrl : 'src/candidate/candidate.html',
                    controller : 'CandidateController as ctrl'
                }
            },
            data: {

            }
        });
    }

})();
