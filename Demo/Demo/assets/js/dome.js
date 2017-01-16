
    var app=angular.module('myapp',[]);
    app.controller('first',function($scope){
        $scope.studentNo='01';
        $scope.studentName='天才';
        $scope.Totle=function(){
            return $scope.studentNo+''+$scope.studentName;
        }
    });


    app.controller('second', function($scope){
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    	];
    })

    app.controller('third', function($scope){
        $scope.lastname='1';  	
    })


    app.controller('four', function($scope){
        $scope.names=['google','huogu','baidu']
    })


    app.controller('five', function($scope){
        $scope.count=0;
    })
