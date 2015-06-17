Meteor.publish('Batchs',function(){
    return Batchs.find();
});
Meteor.publish('Semnesters',function(){
    return Semnesters.find();
});
Meteor.publish('sems',function(data){
  return Sem.find();


});