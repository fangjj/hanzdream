Blogs = new Mongo.Collection("blogs");

Blogs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 50
  },
  preview: {
    type: String,
    max: 100,
    autoValue: function() {
      if(this.field('content').isSet) {
        return this.field('content').value;
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    optional: true
  },
  content: {
    type: String,
    max: 2000
  },
  tag: {
    type: String,
    defaultValue: 'none'
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    optional: true
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
}));
