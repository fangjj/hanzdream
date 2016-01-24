Messages = new Mongo.Collection("messages");

Messages.attachSchema(new SimpleSchema({
    name: {
        type: String,
        max: 20
    },
    title: {
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
    }
}));