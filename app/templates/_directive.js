'use strict';

/**
 * @ngdoc directive
 * @name pouchdb-<%= names.slug %>.directive:<%= names.camel %>
 * @description
 * # <%= names.camel %>
 */
angular.module('pouchdb.<%= names.camel %>', ['pouchdb'])
  .directive('<%= names.camel %>', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the <%= names.camel %> directive');
      }
    };
  });
