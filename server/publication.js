Meteor.publish('Batchs',function(){
    return Batchs.find();
});
Meteor.publish('Semnesters',function(){
    return Semnesters.find();
});
