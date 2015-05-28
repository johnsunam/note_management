Router.configure({
    layoutTemplate:'layout',
    waitOn: function() { return Meteor.subscribe('Batchs'); }
});
Router.map(function(){
    this.route('mainList',{path:'/'});
    this.route('firstsem',{
        path:'/firstsem/:_id',
        data: function()
        {

            return Topic.findOne(this.params._id);
        }
    });

});