<!-- Nav helper -->
<div class="navhelper" ng-controller="NavhelperCtrl as navhelper">
  <div class="navhelper-inner">
    <div class="container">
      <span class="gaig-breadcrumb">
        <span class="gaig-icon"
              ng-class="navhelper.model.pageIcon"
              ng-show="navhelper.model.pageIcon">
        </span>
        {{navhelper.model.pageTitle}}
      </span>
    </div>
  </div>
</div>
<!-- /Nav helper -->