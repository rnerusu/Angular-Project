

var CntFn=function($scope){
$scope.StatesUS= [{
stateName: 'California',
Capital: 'Sacremento',
stateFlag: 'xxx' ,
stateTimeZone: 'PST'
},
{
stateName: 'Texas',
Capital: 'Austin',
stateFlag: 'xxx',
stateTimeZone: 'CST'
},
{
stateName: 'New Jersy',
Capital: 'Tranton',
stateFlag: 'xxx',
stateTimeZone: 'EST'
}
];
};

app.controller('Controller',['$scope', CntFn]);

