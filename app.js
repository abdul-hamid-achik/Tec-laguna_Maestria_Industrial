var app = angular.module('industrial', []);

app.controller('informacion', function ($scope, $http, $sce) {

	$http.get('default.json').success(function (response) {
					$scope.informacion = response;
		    	});

	$scope.click = function(selector){
		$scope.tabla = '';
		switch(selector) {
		    case 'egresar':
		    	$http.get('al_egresar.json').success(function (response) {

					$scope.informacion = response;
		    	});
		        break;
		    case 'campos':
		    $http.get('campos.json').success(function (response) {
					$scope.informacion = response;
		    	});
		        break;
		    case 'admision':

		    $http.get('admision.json').success(function (response) {
		    	
					$scope.informacion = response;
		    	});
				break;
		    case 'permanensia':

		    $http.get('requisitos.json').success(function (response) {
		    	
					$scope.informacion = response;
		    	});
				
		        break;
		    case 'seleccion':
		     $http.get('seleccion.json').success(function (response) {
		     	
					$scope.informacion = response;
		    	});			
		        break;

		    case 'caracteristicas':
		     $http.get('caracteristicas.json').success(function (response) {
		     	
					$scope.informacion = response;
		    	});
				
		        break;
		    case 'plan':
		     $http.get('tabla.html').success(function (response) {
		     		$scope.informacion = ''
					$scope.tabla= response;
		    	});
				
		        break;
		    default:
		        alert('default' + selector);
		}
	}
}).filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);