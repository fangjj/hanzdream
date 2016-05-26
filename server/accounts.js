//Accounts.onCreateUser(function(options, user) {
//    if(!options.profile.userType) {
//        throw new Meteor.Error(400, '注册失败');
//    }
//    user.profile = {
//        guitarNewbieSurveyTaken: false
//    };
//    return user;
//});

//AccountsTemplates.configure({
//    // postSignUpHook will be invoked after an account has been already created
//    postSignUpHook: function(userId, info) {
//        console.log(info);
//        if(info.profile.userType == 'guitarTeacher') {
//            Roles.addUsersToRoles(userId, ['guitarTeacher'], Roles.GLOBAL_GROUP);
//        }else {
//            Roles.addUsersToRoles(userId, ['guitarStudent'], Roles.GLOBAL_GROUP);
//        }
//    }
//});
