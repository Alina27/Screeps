module.exports = {
 
 run: function(creep){
     
      var closestStorage = creep.pos.findClosestByPath(FIND_STRUCTURES,{
         filter:(structure) => {
                  return(structure.structureType == STRUCTURE_STORAGE
                         || structure.structureType == STRUCTURE_CONTAINER)
                         && structure.store[RESOURCE_ENERGY] > 0;
                   }
                         });
     
     if(creep.memory.carrying && creep.carry.energy == 0){
        creep.memory.carrying = false;
        creep.say('looking');
     }
     
     if(!creep.memory.carrying && creep.carry.energy == creep.carryCapacity){
         creep.memory.carrying = true;
         creep.say('distributing');
     }
     
     if(creep.memory.carrying){
         
         var lowTower = creep.room.find(FIND_STRUCTURES,{
              filter: (structure) => {
                       return (structure.structureType == STRUCTURE_TOWER)
                               && structure.carry.energy < (structure.carryCapacity * 0.5);
           }
        });
  
        var target = creep.room.find(FIND_STRUCTURES,{
              filter: (structure) =>{
                      return(structure.structureType == STRUCTURE_SPAWN
                      || structure.structureType == STRUCTURE_EXTENSION
                      || (structure.structureType == STRUCTURE_TOWER && structure.carry.energy < structure.carryCapacity * 0.5))
                      && structure.energy < structure.energyCapacity;
          }          
      }); 
      
      if(lowTower){
           while(lowTower.energy != lowTower.energyCapacity){
               if(creep.transfer(lowTower[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
           creep.moveTo(lowTower[0]);
       }
           }
       }
       else if(target){
            if (creep.transfer(target[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
               creep.moveTo(target[0]);
         }
       }
      
     }
     else {
           if(creep.harvest(closestStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
               creep.moveTo(closestStorage);
           }
       }
   }
};