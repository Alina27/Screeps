module.exports = {
    
    run:function(creep){
  
     if(creep.memory.transporting && creep.carry.energy == 0){
        creep.memory.transporting = false;
        creep.memory.say('loking');
     }  
     
     if(!creep.memory.transporting && creep.carry.energy == creep.carryCapacity){
        creep.memory.transporting = true;
        creep.say('transporting');
     }
     
     if(creep.memory.transporting){
         var safetyStructures = creep.pos.findClosestByPath(FIND_STRUCTURES, {
       filter: (structure) =>{
           return(structure.structureType == STRUCTURE_TOWER
               || structure.structureType == STRUCTURE_SPAWN
               || structure.structureType == STRUCTURE_STORAGE
               || structure.structureType == STRUCTURE_TERMINAL)
       }
   });
   
   var emptyContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
       filter: (structures)=> {
           return (structures.structureType == STRUCTURE_CONTAINER)&&
                   structures.carry[RESOURCE_ENERGY] < structures.carryCapacity;
       }
   });
      if(safetyStructures.pos.isNearTo(emptyContainer)){
          if(creep.transfer(emptyContainer[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
              creep.moveTo(emptyContainer);
          }
      }
      else{
          creep.moveTo(Game.flags.WaitingFlag);
      }
  }
     else{
         var containerWithEnergy = creep.pos.findClosestByPath(FIND_STRUCTURES, {
       filter: (structures)=> {
           return (structures.structureType == STRUCTURE_CONTAINER)&&
                   structures.carry[RESOURCE_ENERGY] > 0;
       }
   });
      if(containerWithEnergy){
          if(containerWithEnergy.transferEnergy(creep) == ERR_NOT_IN_RANGE){
           creep.moveTo(containerWithEnergy);
       }
      }
      else{
          creep.moveTo(Game.flags.WaitingFlag);
      }
     }
     
   }

};