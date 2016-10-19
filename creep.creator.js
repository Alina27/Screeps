module.exports = {

 run: function(){
   
        var harvesters = _.filter(Game.creeps, {memory: {role: 'harvester'}});
        var upgraders = _.filter(Game.creeps, {memory: {role: 'upgrader'}});
        var builders = _.filter(Game.creeps, {memory: {role: 'builder'}});

        if(harvesters.length < 1){
            var newHarvester = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'harvester'});
            console.log('New harvester created: ' + newHarvester);
        }
        
        if(upgraders.length < 1){
            var newUpgrader = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'upgrader'});
            console.log('New upgrader created: ' + newUpgrader);
        }
        
        if(builders.length < 1){
            Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'builder'});
        }
        
        for(var deadName in Memory.creeps){
            if(!Game.creeps[deadName]){
                delete Memory.creeps[deadName];
                console.log('Memory free after deletin: ' + deadName);
            }
        }
 }

};