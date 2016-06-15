import Messages from '../both/collections/messages.js';
import Blogs from '../both/collections/blogs.js';

Meteor.methods({
  messageInsert(message) {
    check(message, Messages.simpleSchema());
    return Messages.insert(message);
  },
  blogInsert(blog) {
    check(blog, Blogs.simpleSchema());
    return Blogs.insert(blog);
  }
});
