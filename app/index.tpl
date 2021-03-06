<!doctype html>
<html lang="en" ng-app="gaigApp" ng-controller="GlobalCtrl as global">
<head>
  <title ng-bind="global.model.pageTitle"></title>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="shortcut icon" href="images/favicon.ico" type="image/vnd.microsoft.icon">

  <!-- inject:uiBootstrapCSS -->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="with-bg ng-cloak">

<div class="gaig-loading" ng-show="global.flags.isLoading"></div>

<div id="wrapper" ng-cloak>

  <header ng-include src="'templates/header.html'"></header>

  <main ng-view="main"></main>

  <footer ng-include src="'templates/footer.html'"></footer>
</div>

<!-- inject:uiBootstrapJS -->
<script src="${gaigCDN}/${uiBootstrapVersion}/js/lib/angular/angular-route.min.js"></script>
<script src="js/app.min.js"></script>

</body>
</html>