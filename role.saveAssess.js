module.exports = {

  run: function(creep){
      var myDamagedStructures = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
              return( structure.structureType == STRUCTURE_EXTENSION
                   || structure.structureType == STRUCTURE_SPAWN
                   || structure.structureType == STRUCTURE_TOWER)
          }
      });
      if(myDamagedStructures.hits < myDamagedStructures.hitsMax){
          Game.spawns['Spawn1'].room.controller.activateSafeMode();
      }
  }
};