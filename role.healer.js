module.exports = {
  
   run: function(creep){
       
       if(creep.memory.healing && creep.carry.energy == 0){
           creep.memory.healing = false;
           creep.say('harvesting');
       }
       
       if(!creep.memory.healing && creep.carry.energy < creep.carryCapacity){
           creep.memory.healing = true;
           creep.say('healing');
       }
       
       if(creep.memory.healing){
           var target = creep.pos.findInRange(FIND_MY_CREEPS, {
               filter: (damagedCreep) => {
                   return (damagedCreep.hits < damagedCreep.hitsMax);
               }
           });
         if(target){
             creep.moveTo(target);
             
             if(creep.pos.isNearTo(targer)){
                 creep.heal(target);
             }
             else{
                 creep.rangedHeal(target);
             }
         }
         else{
             creep.moveTo(Game.flags.HealerFlag);
         }
       }
       else{
            var sources = creep.room.find(FIND_SOURCES);
           if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
       }
       
   }
  
};