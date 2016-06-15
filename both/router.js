import { Router } from 'meteor/iron:router';
import Blogs from '../both/collections/blogs.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  data: {
    homepage: true
  },
  action() {
    this.render('home');
  }
});

Router.route('/login', {
  action() {
    this.render('login');
  }
});

Router.route('/blog', {
  waitOn() {
    this.subscribe('blogs');
  },
  data() {
    return {
      blogs: Blogs.find({}, { sort: { createdAt: -1 } })
    };
  },
  action() {
    this.render('blogIndex');
  }
});

Router.route('/blog/:_id', {
  waitOn() {
    Meteor.subscribe('blog', this.params._id);
  },
  data() {
    return {
      blog: Blogs.findOne(this.params._id)
    };
  },
  action() {
    this.render('blogDetail');
  }
});

Router.route('/music', {
  data: {
    url: '/music'
  },
  action() {
    this.render('music');
  }
});

Router.route('/projects', {
  action() {
    this.render('projects');
  }
});

Router.route('/resume', {
  action() {
    this.render('resume');
  }
});
