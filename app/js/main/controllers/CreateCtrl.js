app.controller('CreateCtrl', ['$scope', function($scope) {

    $scope.familyList = [];

    $scope.family = {
        familyMemberType: '',
        familyMemberName: ''
    };

    $scope.resetFamilyForm = function() {
        $scope.family = {
            familyMemberType: '',
            familyMemberName: ''
        }
    };

    $scope.resetFamilyForm();

    $scope.test = 'asdasdds';

    $scope.addFamilyMember = function() {
        var newFamilyMember = {
            type: $scope.family.familyMemberType,
            name: $scope.family.familyMemberName
        };

        $scope.familyList.push(newFamilyMember);

        $scope.resetFamilyForm();
    };

    $scope.removeFamilyMember = function(i) {
        $scope.familyList.splice(i, 1);
    }

}]);