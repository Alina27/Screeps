module.exports = {

  run: function(creep){
      var myDamagedStructures = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
              return( structure.structureType == STRUCTURE_EXTENSION
                   || structure.structureType == STRUCTURE_SPAWN
                   || structure.structureType == STRUCTURE_TOWER)
                   && structure.hits < structure.hitsMax;
          }
      });
      
      if(myDamagedStructures){
          creep.room.controller.activateSafeMode();
      }
  }
};