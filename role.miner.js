module.exports = {
   
    run:function(creep){
        
        if(creep.memory.mining && creep.carry.energy == 0){
            creep.memory.mining = false;
            console.log('harvesting');
        }
        
        if(!creep.memory.mining && creep.carry.energy == creep.carryCapacity){
            creep.memory.mining = true;
            console.log('mining');
        }
        
        if(creep.memory.mining){
            var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_CONTAINER 
                                    && structure.store[RESOURCE_ENERGY] < structure.storeCapacity});
                
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(container);
                console.log('transfering');
            }
            
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
                creep.harvest(sources[1]);//1
            }
        }
        
    }
};