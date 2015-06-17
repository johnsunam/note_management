if (Batchs.find().count() === 0) {
    Batchs.insert({year:'first',id:'1'});
    Batchs.insert({year:'second',id:'2'});
    Batchs.insert({year:'third',id:'3'});
    Batchs.insert({year:'forth',id:'4'});
}
if (Semnesters.find().count() === 0) {
    Semnesters.insert({sem:'1st sem',id:'1'});
    Semnesters.insert({sem:'2nd sem',id:'1'});
    Semnesters.insert({sem:'3rd sem',id:'2'});
    Semnesters.insert({sem:'4th sem',id:'2'});
    Semnesters.insert({sem:'5th sem',id:'3'});
    Semnesters.insert({sem:'6th sem',id:'3'});
    Semnesters.insert({sem:'7th sem',id:'4'});
    Semnesters.insert({sem:'8th sem',id:'4'});
}
if (Sem.find().count()===0){
    Sem.insert({title:'first year -1th sem'});
    Sem.insert({title:'first year -2th sem'});
    Sem.insert({title:'second year -3th sem'});
    Sem.insert({title:'second year -4th sem'});
    Sem.insert({title:'third year -5th sem'});
    Sem.insert({title:'third year -6th sem'});
    Sem.insert({title:'forth year -7th sem'});
    Sem.insert({title:'forth year -8th sem'});
}