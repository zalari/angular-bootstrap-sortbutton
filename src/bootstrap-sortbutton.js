'use strict';

/**
 * @ngdoc directive
 * @name zalari.bootstrap.sortButton
 * @description simple directive, that display a glyphicon sort icon and can be customized to the sort type
 * # zalariSortButton
 */
angular.module('zalari.bootstrap.sortButton',[])
  .directive('zaSortButton', function ($log) {
    return {
      restrict: 'EA',
      scope: {
        zaSortType : '@',
        zaSortOrderAscending : '@',
        zaSortEvent : '&',
        zaBtnClass : '@'
      },
      link: function postLink(scope, element, attrs) {


        var _updateSorter = function(){
          //fill element depending of tpye of sort order and sort type
          var iconType;
          if (scope.ascending===true) {
            //show
            switch(scope.zaSortType) {
              case 'alpha':
                iconType='glyphicon-sort-by-alphabet';
                break;
              case 'numeric':
                iconType='glyphicon-sort-by-order';
                break;
              default:
                iconType='glyphicon glyphicon-sort-by-attributes';
            }
          } else {
            switch(scope.zaSortType) {
              case 'alpha':
                iconType='glyphicon-sort-by-alphabet-alt';
                break;
              case 'numeric':
                iconType='glyphicon-sort-by-order-alt';
                break;
              default:
                iconType='glyphicon glyphicon-sort-by-attributes-alt';
            }
          }
          //now create the dom stuff
          element.empty();
          element.append('<button type="button" class="'+scope.zaBtnClass+'" aria-label="Left Align">'+
            '<span class="glyphicon '+iconType+'" aria-hidden="true"></span>'+
          '</button>');
        };

        var _init = function() {
          //add default bootstrap btn
          if (angular.isUndefined(scope.zaBtnClass)) {
            scope.zaBtnClass='btn btn-default';
          }

          //convert to boolean the javascript way!
          scope.ascending = JSON.parse(scope.zaSortOrderAscending);

          //when the element is clicked, toggle isAscending
          //and update the dom
          //send out event to bound function with current value
          //trigger digest cycle...
          element.bind('click',function(){
            //HACK: for closure problems...
            if (angular.isUndefined(scope.zaBtnClass)) {
              scope.zaBtnClass='btn btn-default';
            }
            scope.ascending = !scope.ascending;
            _updateSorter();
            scope.$apply(function(){
              scope.zaSortEvent({isAscending:scope.ascending});
            });
          });
          //init the dom
          _updateSorter();
        };

        _init();

      }

    };
  });
