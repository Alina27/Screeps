module.exports = {

   run:function(creep){
       
       if(creep.memory.archering && creep.carry.energy == 0){
           creep.memory.archering = false;
           creep.say('harvesting');
       }
       
       
       if(!creep.memory.archering && creep.carry.energy == creep.carryCapacity){
           creep.memory.archering = true;
           creep.say('archering');
       } 
       
       if(creep.memory.archering){
         var enemy = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
         if(enemy.length > 0){
            creep.rangedAttack(enemy[0]);
          }    
          else{
              creep.moveTo(Game.flags.ArcherFlag);
          }
       }
       else{
           var sources = creep.room.find(FIND_SOURCES);
           if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
       }
   } 

};