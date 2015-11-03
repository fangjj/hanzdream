Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    action: function(){
        this.render('home');
    }
});

Router.route('/music', {
    data: {
      url: '/music'
    },
    action: function(){
        this.render('music');
    }
});

Router.route('/projects', {
    action: function(){
        this.render('projects');
    }
});

Router.route('/resume', {
    action: function(){
        this.render('resume');
    }
});