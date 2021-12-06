let angularList = angular.module('myList', []);

angularList.controller('myListController', ($scope) => {
	$scope.items = ['AngularJS', 'ReactJS', 'VueJS'];
	$scope.newItem = '';
	$scope.pushItem = () => {
		if ($scope.newItem != '') {
			$scope.items.push($scope.newItem);
			$scope.newItem = '';
		}
	};
});
