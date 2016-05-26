Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  data: {
    homepage: true
  },
  action: function(){
    this.render('home');
  }
});

Router.route('/login', {
  action: function(){
    this.render('login');
  }
});

Router.route('/blog', {
  waitOn: function() {
    this.subscribe('blogs');
  },
  data: function() {
    return {
      blogs: Blogs.find({},{sort: {createdAt: -1}})
    }
  },
  action: function(){
    this.render('blogIndex');
  }
});

Router.route('/blog/:_id', {
  waitOn: function() {
    Meteor.subscribe('blog', this.params._id);
  },
  data: function() {
    return {
      blog: Blogs.findOne(this.params._id)
    }
  },
  action: function(){
    this.render('blogDetail');
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
