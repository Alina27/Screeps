module.exports = {
   run: function(name){
       
        var tower = Game.rooms[name].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
    
        if(tower){
            var damagedRoads = Game.rooms[name].find(FIND_STRUCTURES, {
                filter: (road) => {
                    return(road.hits < road.hitsMax); 
                }
            });
         
            var enemy = Game.rooms[name].find(FIND_HOSTILE_CREEPS, {
              filter: (notHugeHealer) => {
                      return (notHugeHealer.getActiveBodyparts(HEAL) < 10)
                             && notHugeHealer.pos.findInRange < 20;
                 }
             });
             
             var closetHealer = Game.rooms[name].find(FIND_HOSTILE_CREEPS, {
                 filter: (healer) => {
                     return (healer.getActiveBodyparts(HEAL) > 0)
                             && healer.pos.findClosestByRange < 15;
                 }
             });
            
            if(enemy){
               tower.forEach(function(tow){
                   //if(closetHealer){
                   if(tow.pos.findClosestByPath(closetHealer)){
                       tow.attack(closetHealer);
                   }
                   else{
                       tow.attack(enemy[0]);
                   }
               })
            }
            
             if(damagedRoads.carryCapacity > 50 && !enemy){
               tower.forEach(function(tow){
                   if(tow.energy > tow.energyCapacity * 0.5){
                       tow.repair(damagedRoads[0]);
                   }
               })
            }
       }
   } 
};