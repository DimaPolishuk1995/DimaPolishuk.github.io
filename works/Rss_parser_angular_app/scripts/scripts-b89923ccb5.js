"use strict";var rssFeedApp=angular.module("rssFeedApp",["ui.router","ui.router.util","ui.router.compat","xml","ngResource","ngRoute"]);rssFeedApp.config(["$locationProvider","$stateProvider","$urlRouterProvider",function(e,t,r){r.otherwise("/"),t.state("listNews",{url:"/",controller:"ListNewsCtrl",templateUrl:"views/listNews.html"}).state("view-news",{url:"/:id",controller:"ViewNewsCtrl",templateUrl:"views/viewNews.html"})}]),rssFeedApp.controller("ListNewsCtrl",["$scope","$http","$rootScope","FeedService","ArrayService","TimeParse","$sce",function(e,t,r,s,u,l,n){e.feedSrc=s.getUrl(),e.news=u.getArrayNews();var a=n.trustAsResourceUrl(e.feedSrc);t.get(a).then(function(t){var r=new X2JS,s=r.xml_str2json(t.data);e.feeds=s.rss.channel.item;for(var u=0,n=e.feeds.length;u<n;u++)e.feeds[u].pubDate=l(e.feeds[u].pubDate)}),e.loadFeed=function(){s.setUrl(e.feedSrc);var r=n.trustAsResourceUrl(e.feedSrc);t.get(r).then(function(t){var r=new X2JS,s=r.xml_str2json(t.data);e.feeds=s.rss.channel.item;for(var u=0,n=e.feeds.length;u<n;u++)e.feeds[u].pubDate=l(e.feeds[u].pubDate)})}}]),rssFeedApp.controller("ViewNewsCtrl",["$scope","$state","$stateParams","$http","$timeout","$rootScope","FeedService","TimeParse","$sce",function(e,t,r,s,u,l,n,a,c){e.loader=!0,e.feedSrc=n.getUrl();var i=c.trustAsResourceUrl(e.feedSrc);u(function(){s.get(i).then(function(t){var s=r.id,u=new X2JS,l=u.xml_str2json(t.data);e.feeds=l.rss.channel.item[s],e.time=a(l.rss.channel.item[s].pubDate),e.content=e.feeds.enclosure._url;for(var n=0,c=e.feeds.length;n<c;n++)e.feeds[n].pubDate=a(e.feeds[n].pubDate)},function(t){e.feeds=t.statusText}),e.loader=!1},1500)}]),rssFeedApp.filter("trusted",["$sce",function(e){return e.trustAsHtml}]),rssFeedApp.factory("TimeParse",function(){return function(e){var t=Date.parse(e);return t}}),rssFeedApp.factory("ArrayService",function(){var e=[{title:"Все новости",url:"https://www.rbc.ua/static/rss/all.rus.rss.xml"},{title:"Главные новости",url:"https://www.rbc.ua/static/rss/ukrnet.strong.rus.rss.xml"},{title:"Политика",url:"https://www.rbc.ua/static/rss/ukrnet.politics.rus.rss.xml"},{title:"Экономика",url:"https://www.rbc.ua/static/rss/ukrnet.economic.rus.rss.xml"},{title:"Происшествия",url:"https://www.rbc.ua/static/rss/ukrnet.accidents.rus.rss.xml"},{title:"Культура",url:"https://www.rbc.ua/static/rss/ukrnet.culture.rus.rss.xml"},{title:"Спорт",url:"https://www.rbc.ua/static/rss/ukrnet.sport.rus.rss.xml"},{title:"Дайджест",url:"https://www.rbc.ua/static/rss/digests.rus.rss.xml"}];return{getArrayNews:function(){return e}}}),rssFeedApp.factory("FeedService",function(){var e="https://www.rbc.ua/static/rss/all.rus.rss.xml";return{setUrl:function(t){e=t},getUrl:function(){return e}}});