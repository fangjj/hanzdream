Meteor.methods({
    messageInsert: (message) => {
        check(message, Messages.simpleSchema());
        let messageId = Messages.insert(message);
        return messageId;
    }
});