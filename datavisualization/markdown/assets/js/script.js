$(document).ready(function(){
    $("#editor")[0].value = "# Welcome to my Angular Markdown Editor!\n# Heading\n## Sub-heading\n### Sub-sub-heading\n\nSingle-line code: `print('Hello World')`\n```\n// multi-line code:\n\nwhile(true){\n    console.log('HAPPY CODING!');\n}\n```\n\n**Bold text**\n_Italic text_\n~~Crossed out text~~\n**_~~Crossed out bold italic text~~_**\n\n[Link](https://www.bashit.me)\n\n> Block Quote\n\nTable:\n\nCol 1 | Col 2 | Col 3\n------------ | ------------- | -------------\nRow 1:1 | Row 1:2 | Row 1:3\nRow 2:1 | Row 2:2 | Row 2:3\n\n- List\n  - Sub-entry\n     - Sub-sub-entry\n        - Level 3 sub-entry\n  - 2nd Sub-entry\n\n\n1. Ordered list\n* The list keeps counting...\n- even if you use dashes or asterisks.\n\n![Angular Logo](https://angular.io/assets/images/logos/angular/angular.svg)";
});
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {
    $scope.handlechange = function(){
      $("#preview")[0].innerHTML = marked($("#editor")[0].value);  
    };
});