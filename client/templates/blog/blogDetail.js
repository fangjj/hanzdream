Template.blogDetail.onRendered(function() {
    let self = this;
    let blogId = Router.current().params._id;
    self.autorun(function(c) {
        if(blogId && Blogs.findOne(blogId)) {
            $('#blog-content').html(Blogs.findOne(blogId).content);
            console.log(c);
            c.stop();
        }
    });
});