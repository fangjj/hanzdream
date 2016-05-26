Blogs.allow({
  insert: function (userId, doc) {
    return userId && Roles.userIsInRole(userId, ['admin']);
  },
  update: function (userId, doc, fields, modifier) {
    return userId && Roles.userIsInRole(userId, ['admin']);
  },
  remove: function (userId, doc) {
    return userId && Roles.userIsInRole(userId, ['admin']);
  },
  fetch: null
});
