Meteor.publish('blogs', () => {
  return Blogs.find();
});

Meteor.publish('blog', (_id) => {
  return Blogs.find(_id);
});
