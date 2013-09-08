App = Ember.Application.create();

App.Router.map(function() {
    this.resource('home', {path: '/'});
    this.resource('about');
    this.resource('portfolio');
    this.resource('contact');
});

App.WeaponsView = Ember.View.extend({
    didInsertElement: function() {
        $('.weapons li').tooltip();
    }
});

App.WorksView = Ember.View.extend({
    didInsertElement: function() {
        $('.works').gridalicious({
            gutter: 40,
            width: 220
        });
    }
});

App.PortfolioRoute = Ember.Route.extend({
    model: function() {
        var url = 'scripts/data.json';
        return $.getJSON(url).then(function(data) {
            return data.posts;
        });
    }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
    return new Handlebars.SafeString(showdown.makeHtml(input));
});


