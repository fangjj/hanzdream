import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {
  if (!Meteor.users.findOne({ username: 'admin' })) {
    Accounts.createUser({
      username: Meteor.settings.admin_username,
      email: Meteor.settings.admin_email,
      password: Meteor.settings.admin_pwd
    });
    const adminId = Meteor.users.findOne({ username: 'admin' })._id;
    Roles.addUsersToRoles(adminId, ['admin'], Roles.GLOBAL_GROUP);
  }
});
