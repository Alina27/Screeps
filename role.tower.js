module.exports = {
   run: function(name){
       
        var tower = Game.rooms[name].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        //console.log('Towers: ' + tower.length);
        if(tower){
            var damage = Game.rooms[name].find(FIND_STRUCTURES, {
                filter: (road) => {
                    return(road.hits < road.hitsMax); 
                }
            });
         
            var enemy = Game.rooms[name].find(FIND_HOSTILE_CREEPS);
            if(enemy){
                tower.forEach((tow) =>tow.attack(enemy[0]));
            }
            
             if(damage.carryCapacity > 50 && !enemy){
                tower.forEach((tow) =>tow.repair(damage[0]));
            }
            
          }
   } 
};