Meteor.startup(function() {
    if(!Meteor.users.findOne({username: 'admin'})) {
        Accounts.createUser({
            username: Meteor.settings.admin_username,
            email: Meteor.settings.admin_email,
            password: Meteor.settings.admin_pwd
        });
        let adminId = Meteor.users.findOne({username: 'admin'})._id;
        Roles.addUsersToRoles(adminId, ['admin'], Roles.GLOBAL_GROUP);
    }
});