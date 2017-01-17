var app=angular.module('myapp',[]);
app.controller('food',function($scope,$http){
    $scope.index=1;
    // var response='';
    $http.post('assets/json/demo.json').then(function(res){
        console.log(res);
        // response=res.data;
        $scope.items=res.data.items;       
    })
    $scope.setValue=function(){
        $http.post('assets/json/demo.json').then(function(res){
            // response=response.items.concat(res.data.items);
            // console.log(response);
            $scope.items=$scope.items.concat(res.data.items);       
        })
    }
})

app.controller('Calculation', function($scope,$http){
    $http.get('assets/json/demo1.json').then(function(respon){
        console.log(respon);
        $scope.items=respon.data.items;
        var GettotalPrice=function(){
        for (var i=0;i<$scope.items.length;i++)
        var item=$scope.items[i]
            $scope.totalPrice +=item.price*item.size;
        }
        GettotalPrice ();
    })


    
})

    // var spanPro=function(name.addtime){
    //  Name:name,
    //  AddTime:addtime
    // };
    // // var spanPro={'Name':"国产",'AddTime':'2016-01-02'};
    // // var spanPro1={'Name':"国产2",'AddTime':'2016-01-02'};
    // var span1=new spanPro('国产','2016-01-02');
    // var span2=new spanPro('国产','2016-01-02');
    // $scope.index=1;
    // $scope.ProduceList=[
    // {'Name':1240,'Price':1023,'Span':[span1,span2]}
    // ];
    // var result={
    //  TotalCount:20,
    //  PageIndex:2,
    //  PageSize:4,
    //  PageCount:5,
    //  items:[
    //  {
    //      pname: '可口可乐',
    //      price: 3.0,
    //      pdate: new Date(2015, 8, 3),
    //      isOnSale: false
    //  },
    //  {
    //      pname: '百事可乐',
    //      price: 2.5,
    //      pdate: new Date(2015, 7, 3),
    //      isOnSale: true
    //  },
    //  {
    //      pname: '芬达',
    //      price: 2.8,
    //      pdate: new Date(2015, 5, 2),
    //      isOnSale: true
    //  },
    //  {
    //      pname: '七喜',
    //      price: 2.3,
    //      pdate: new Date(2015, 2, 15),
    //      isOnSale: true
    //  }
    //  ]
    // };
    // $scope.items=result.items;