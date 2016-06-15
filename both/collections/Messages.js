import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Messages = new Mongo.Collection("messages");

Messages.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 20
  },
  subject: {
    type: String,
    max: 20
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    max: 30
  },
  message: {
    type: String,
    max: 200
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

export default Messages;
