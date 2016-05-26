Template.blogPostForm.onRendered(() => {
  $('.blog-post').form({
    on: 'blur', // 'submit','change','blur'
    inline: 'true',
    onSuccess: function(event, fields) {
      event.preventDefault();
      fields.tag = 'none';
      Meteor.call('blogInsert', fields, (err, res) => {
        if(err) {
          console.log(err);
          alert(err.message);
        } else {
          alert('Success!');
        }
      });
    },
    fields: {
      title: {
        identifier: 'title',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your message subject'
          },
          {
            type   : 'maxLength[50]',
            prompt : 'Title must be less than {ruleValue} characters'
          }
        ]
      },
      content: {
        identifier: 'content',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your message'
          },
          {
            type   : 'maxLength[2000]',
            prompt : 'Content must be less than {ruleValue} characters'
          }
        ]
      }
    }
  });
});
