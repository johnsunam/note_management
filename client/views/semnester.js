Template.semnester.events({
    'click li a':function(){

        var c= Session.get('title');
        var f=c+'  -'+this.sem;
        Session.set('title',f);
     Meteor.subscribe('sems',f);

        Router.go('firstsem',{year_sem: f});
      //Session.set('lists','hidden');


    }
});
Template.semnester.helpers({
    sems:function(){
        var a=Session.get('id');
         return Semnesters.find({'id':a});
    }
});