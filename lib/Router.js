Router.configure({
    layoutTemplate:'layout',
    waitOn: function() { return Meteor.subscribe('Batchs'); }
});
Router.map(function(){
    this.route('mainList',{path:'/'})

});