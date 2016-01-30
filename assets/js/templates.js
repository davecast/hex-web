angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/display/view.html","<div class=dc-display-popup><div class=dc-display-popup-close data-ng-click=close()>x</div><div class=dc-display-popup-picture><div class=\"dc-display-popup-picture-cover dc-back-cover\" style=background-image:url({{customUrl}});></div></div><div class=dc-display-popup-social><h4 class=\"dc-h4 no-margin dc-font-normal dc-uppercase\">title</h4></div></div>");
$templateCache.put("/footer/view.html","<div class=dc-footer-container><div class=dc-footer-copyright>© ALL RIGHTS RESERVED</div><div class=dc-footer-social><ul><li class=facebook><a href=#><i class=\"mdi mdi-facebook\"></i></a></li><li class=pinterest><a href=#><i class=\"mdi mdi-pinterest\"></i></a></li><li class=twitter><a href=#><i class=\"mdi mdi-twitter\"></i></a></li><li class=google><a href=#><i class=\"mdi mdi-google-plus\"></i></a></li></ul></div></div>");
$templateCache.put("/header/view.html","<div class=dc-header-logo><a data-ng-href=\"#/\" data-ng-click=\"onClickTab(\'#/\')\"><figure><img src=assets/img/hexbrush-black-logo.png alt=\"hex brush\"></figure></a></div><div class=dc-header-name-menu>{{nameUrl}}</div><div class=\"dc-header-menu dc-center-center\"><ul><li data-ng-repeat=\"m in menu\" data-ng-class=\"{dc_menu_active: isActiveTab(m.url)}\"><a data-ng-href=#{{m.url}} data-ng-click=onClickTab(m.url)>{{m.title}}</a></li></ul></div><div class=\"dc-header-menu-btn dc-center-center\" data-ng-click=toogle()><i class=\"mdi mdi-menu\"></i></div><div class=\"dc-header-menu-toogle dc-center-center\" data-ng-if=show><ul><li data-ng-repeat=\"m in menu\" data-ng-class=\"{dc_menu_sm_active: isActiveTab(m.url)}\"><a data-ng-href=#{{m.url}} data-ng-click=onClickTab(m.url)>{{m.title}}</a></li></ul></div>");
$templateCache.put("/about/view.html","<article class=dc-section-container><div class=\"dc-about dc-start-center dc-p-y-t-a\"><div class=\"dc-about-thumbnail dc-inline-block dc-back-cover\" style=\"background-image: url(http://lorempixel.com/900/900/nature/);\"></div><div class=\"dc-about-content dc-inline-block dc-vertical-align-top\"><h3 class=\"dc-h3 dc-uppercase dc-font-normal\">BEHIND HEXBRUSH</h3><p class=dc-text-justify>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p class=dc-text-justify>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h4 class=\"dc-h4 dc-font-normal\">SHARE</h4><ul class=\"dc-ul-inline dc-m-y-a\"><li class=\"dc-li-icon facebook\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'facebook\')\"><i class=\"mdi mdi-facebook\"></i></a></li><li class=\"dc-li-icon pinterest\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'pinterest\')\"><i class=\"mdi mdi-pinterest\"></i></a></li><li class=\"dc-li-icon twitter\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'twitter\')\"><i class=\"mdi mdi-twitter\"></i></a></li><li class=\"dc-li-icon google\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'google+\')\"><i class=\"mdi mdi-google-plus\"></i></a></li></ul></div></div></article>");
$templateCache.put("/art/view.html","<article class=dc-section-container><div class=\"dc-art dc-start-center dc-p-y-t-a\"><div class=dc-art-menu><ul class=dc-ul-inline><li class=dc-li-menu>All</li><li class=dc-li-menu>Tech-Nauture</li><li class=dc-li-menu>Abstracts</li><li class=dc-li-menu>Mini</li><li class=dc-li-menu>Comminssions</li></ul></div><div class=dc-art-content><ul class=\"dc-ul-inline dc-space-between-center dc-wrap\"><li class=\"dc-li-art dc-li-picture dc-back-grey\" data-ng-repeat=\"n in array\"><div class=\"dc-li-art-cover dc-back-cover\" style=background-image:url(http://lorempixel.com/900/900/nature/);></div><div class=dc-li-art-cover-on></div><div class=\"dc-li-art-title dc-pointer\"><a data-ng-href=#/art/a><h4 class=\"dc-h4 no-margin dc-font-normal dc-uppercase\">title</h4></a></div><div class=\"dc-li-art-expand dc-pointer\"><i class=\"mdi mdi-arrow-expand\"></i></div></li></ul></div></div></article>");
$templateCache.put("/artdetail/view.html","<article class=dc-section-container><div class=\"dc-art-detail dc-start-center dc-p-y-t-a\"><div class=dc-art-detail-menu><div class=dc-art-detail-menu-b><i class=\"mdi mdi-chevron-left\"></i> <i class=\"mdi mdi-view-array\"></i> <i class=\"mdi mdi-chevron-right\"></i></div><div class=\"dc-art-detail-menu-t dc-m-y-t-b\"><h3 class=\"dc-h3 dc-uppercase\">title here</h3><p class=dc-color-grey>Here goes a litle note about the painting.</p></div><h4 class=\"dc-h4 dc-font-normal\">SHARE</h4><ul class=\"dc-ul-inline dc-m-y-a\"><li class=\"dc-li-icon facebook\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'facebook\')\"><i class=\"mdi mdi-facebook\"></i></a></li><li class=\"dc-li-icon pinterest\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'pinterest\')\"><i class=\"mdi mdi-pinterest\"></i></a></li><li class=\"dc-li-icon twitter\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'twitter\')\"><i class=\"mdi mdi-twitter\"></i></a></li><li class=\"dc-li-icon google\"><a href=\"javascript: void(0);\" data-ng-click=\"share(\'google+\')\"><i class=\"mdi mdi-google-plus\"></i></a></li></ul></div><div class=dc-art-detail-content><div class=dc-picture-content-detail style=background-image:url(http://lorempixel.com/900/900/nature/);></div></div></div></article>");
$templateCache.put("/contact/view.html","<article class=dc-section-container><div class=\"thumbnail dc-no-border dc-m-y-t-a\"><div class=thumbnail-content></div></div><div class=\"dc-contact dc-start-center\"><div class=\"dc-contact-info dc-inline-block dc-vertical-align-top\"><h3 class=\"dc-h3 dc-uppercase dc-font-normal\">contact info</h3><p class=dc-color-grey>here goes to appear the location of the artist.</p><p><span class=dc-color-grey-a>Phone:</span> 0185 26 37 48 59</p><p><span class=dc-color-grey-a>Email:</span> damoraled@gmail.com</p></div><div class=\"dc-contact-touch dc-inline-block dc-vertical-align-top\"><h3 class=\"dc-h3 dc-uppercase dc-font-normal\">get in touch!</h3><div class=\"dc-space-between-center dc-m-y-a\"><input type=text class=\"dc-input dc-inline-block\" name=name placeholder=Name> <input type=text class=\"dc-input dc-inline-block\" name=email placeholder=Email></div><input type=text class=\"dc-input dc-m-y-b-a width-all\" name=subject placeholder=Subject> <textarea name=messege class=dc-textarea maxlength=150 rows=8 cols=40 placeholder=Messege></textarea> <input type=button class=\"dc-btn dc-right dc-m-y-a\" name=name value=SEND></div></div></article>");
$templateCache.put("/home/view.html","<article class=dc-section-container><div class=dc-home><div class=\"thumbnail dc-m-y-t-a\"><div class=thumbnail-content></div></div><div class=display-picture><div class=display-picture-content><ul class=\"dc-ul-inline dc-space-between-center dc-wrap\"><li class=\"dc-li-home dc-li-picture dc-back-grey\" data-ng-repeat=\"n in array\"><div class=\"dc-li-art-cover dc-back-cover\" style=background-image:url({{n.url}});></div><div class=dc-li-art-cover-on></div><div class=\"dc-li-art-title dc-pointer\"><h4 class=\"dc-h4 no-margin dc-font-normal dc-uppercase\">title</h4></div><div class=\"dc-li-art-expand dc-pointer\"><i class=\"mdi mdi-arrow-expand\" data-ng-click=open(n)></i></div></li></ul></div></div></div></article><set-display url=url class=dc-display></set-display>");
$templateCache.put("/shop/view.html","<article class=dc-section-container><div class=dc-shop><div class=\"thumbnail dc-no-border dc-m-y-t-a\"><div class=thumbnail-content></div></div><div class=\"dc-shop-subname dc-uppercase dc-text-center dc-font-size-big\"><strong>2016 collection</strong> available originals</div><div class=\"dc-shop-picture dc-m-y-t-a\"><ul class=\"dc-ul-inline dc-space-between-center dc-wrap\"><li class=\"dc-li-shop dc-li-picture\" data-ng-repeat=\"a in array\"><div class=\"dc-shop-li-picture dc-back-grey dc-back-cover\" style=background-image:url({{a.url}});><div class=dc-li-art-cover-on></div><div class=\"dc-li-art-title dc-pointer\"><a href=#/art/a><h4 class=\"dc-h4 no-margin dc-font-normal dc-uppercase\">title</h4></a></div><div class=\"dc-li-art-expand dc-pointer\"><i class=\"mdi mdi-arrow-expand\" data-ng-click=open(a)></i></div></div><div class=\"display-picture-content-data dc-text-center\"><div class=\"dc-shop-text dc-uppercase dc-m-y-a low dc-font-size-b\"><strong>title here</strong></div><div class=\"dc-shop-text dc-font-size-b dc-color-grey\">Oil on papel</div><div class=\"dc-shop-text dc-font-size-b dc-color-grey\">18\" x 24\"</div><div class=\"dc-btn dc-btn-small dc-btn-contrast\"><a href=#/contact>inquire</a></div></div></li></ul></div></div></article><set-display url=url class=dc-display></set-display>");
$templateCache.put("/shows/view.html","<article class=dc-section-container><div class=\"dc-shows dc-start-center dc-column\"><div class=dc-shows-item data-ng-repeat=\"d in dataprueba\"><div class=\"dc-shows-item-month dc-uppercase\">{{d.month}}</div><div class=dc-shows-item-feature data-ng-repeat=\"a in d.array\"><div class=\"dc-feature-picture dc-inline-block dc-vertical-align-top\"></div><div class=\"dc-feature-data dc-inline-block dc-wrap\"><div class=\"dc-uppercase dc-color-black\"><h2 class=\"dc-h3 no-margin\">{{a.title}}</h2></div><div class=\"dc-feature-data-picture dc-m-y-t-b\"></div><div class=\"dc-line-height-a dc-font-size-b dc-m-y-t-b\"><span class=dc-color-grey-a>Date & Time:</span> <span class=dc-color-grey>{{a.date}}</span></div><div class=\"dc-line-height-a dc-font-size-b\"><span class=dc-color-grey-a>Location:</span> <span class=dc-color-grey>{{a.location}}</span></div><div class=\"dc-m-y-t-b dc-font-size-b\"><span class=dc-color-grey>{{a.description}}</span></div><div class=\"dc-link-a dc-line-height-a dc-m-y-t-b dc-color-blue dc-font-size-b\"><a href=#/shows/a>Go to Event Page</a></div></div></div></div></div></article>");}]);