Sem= new Meteor.Collection('sem');
Meteor.methods({
    sems:function(data){
        alert(data.title);
        var postId = Sem.insert(data);
        alert(postId);
    }
})
;
