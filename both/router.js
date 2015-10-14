Router.route('/', {
    action: function(){
        this.layout('layout');
        this.render('home');
    }
});

