Template.mainList.helpers({
    yr:function(){
        return Batchs.find();
    }
});
Template.mainList.events({
   'click .year':function(){
       Meteor.subscribe('Semnesters');
       var a=this.year+'  year';
      // Topic.insert({'title':a});
       Session.set('title',a);
       Session.set('id',this.id);

   }
});

Tracker.autorun(function(){
    var values=Session.get('lists');
$('.mn_list').hide();

});