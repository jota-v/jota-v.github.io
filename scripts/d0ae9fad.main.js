App=Ember.Application.create(),App.Router.map(function(){this.resource("home",{path:"/"}),this.resource("about"),this.resource("portfolio"),this.resource("contact"),this.route("matchall",{path:"*:"})}),App.ApplicationRoute=Ember.Route.extend({beforeModel:function(){this.transitionTo("home")}}),App.WeaponsView=Ember.View.extend({didInsertElement:function(){$(".weapons li").tooltip()}}),App.WorksView=Ember.View.extend({didInsertElement:function(){$(".works").gridalicious({gutter:40,width:240})}}),App.PortfolioRoute=Ember.Route.extend({model:function(){var a="scripts/data.json";return $.getJSON(a).then(function(a){return a.posts})}});var showdown=new Showdown.converter;Ember.Handlebars.helper("format-markdown",function(a){return new Handlebars.SafeString(showdown.makeHtml(a))});