Topic= new Meteor.Collection(null);
 head_line=function(topic) {
    var postId= Topic.insert({topic: topic});
     return postId ;
 }