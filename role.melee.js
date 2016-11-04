module.exports = {

   run: function(creep){
       
       //looking for closest hostile
       //if such was found then attacks it
       //othervise just waiting newr flag
       var enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
       if(enemy){
           creep.attack(enemy);
       }
        else{
              creep.moveTo(Game.flags.MeleeFlag);
          }
       
       
      /* if(creep.memory.meleeing && creep.carry.energy == 0){
           creep.memory.meleeing = false;
           creep.say('harvesting');
       }
       
       if(!creep.memory.meleeing && creep.carry.energy == creep.carryCapacity){
           creep.memory.meleeing = true;
           creep.say('fight');
       }
       if(creep.memory.meleeing){
          var enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
          if(enemy){
              creep.attack(enemy[0]);
          }
          else{
              creep.moveTo(Game.flags.MeleeFlag);
          }
       }
       
       else{
           var sources = creep.room.find(FIND_SOURCES);
           if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
       }*/
   }
};