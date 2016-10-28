module.exports = {

  run: function(){
   
        var harvesters = _.filter(Game.creeps, {memory: {role: 'harvester'}});
        var upgraders = _.filter(Game.creeps, {memory: {role: 'upgrader'}});
        var builders = _.filter(Game.creeps, {memory: {role: 'builder'}});
        var miners = _.filter(Game.creeps, {memory: {role: 'miner'}});
        var transporters = _.filter(Game.creeps, {memory: {role: 'transporter'}});
        var distributors = _.filter(Game.creeps, {memory: {role: 'distributor'}});
        var archer = _.filter(Game.creeps, {memory: {role: 'archer'}});
        var melee = _.filter(Game.creeps, {memory: {role: 'melee'}});
        var healer = _.filter(Game.creeps, {memory: {role: 'healer'}});
    
        if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity * 0.8) {
           if(harvesters.length < 2){
            var newHarvester = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'harvester'});
            console.log('New harvester created: ' + newHarvester);
         }
        }
         for(var i = 0; i < harvesters.length; i++){
            if (harvesters[i].ticksToLive < 30){
                var newHarvester = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'harvester'});
                console.log('New harvester created, old less then 30 ticks: ' + newHarvester);
            }
          }
       
       for(var creep in Game.creeps){
           var level = Game.creeps[creep].room.controller.level;
        if(upgraders.length < level){
            var newUpgrader = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'upgrader'});
            console.log('New upgrader created: ' + newUpgrader);
        }
       }
           for(var i = 0; i < upgraders.length; i++){
            if (upgraders[i].ticksToLive < 30){
                var newUpgrader = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'upgrader'});
                console.log('New upgrader created, old less then 30 ticks: ' + newUpgrader);
            }
          }
        
        if(builders.length < 3){
            var newBuilder = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'builder'});
            console.log('New upgrader created: ' + newBuilder);
        }
        
        for(var i = 0; i < builders.length; i++){
            if (builders[i].ticksToLive < 30){
                var newBuilder = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'builder'});
                console.log('New builder created, old less then 30 ticks: ' + newBuilder);
            }
          }
       
        if(miners.length < 1){
           // Game.spawns['Spawn1'].createCreep([MOVE,MOVE,CARRY,WORK,WORK,WORK,WORK,WORK],undefined, {role: 'minor'});
            var newMiner = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK],undefined, {role: 'miner'});
            console.log('New miner created: ' + newMiner);
        }
        
        for(var i = 0; i < miners.length; i++){
            if (miners[i].ticksToLive < 30){
                var newMiner = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK], undefined, {role: 'miner'});
                console.log('New miner created, old less then 30 ticks: ' + newMiner);
            }
        }
        
        if(transporters.length < 1){
            var newTransporter = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK],undefined, {role: 'transporter'});
            console.log('New transporter created: ' + newTransporter);
        }
        for(var i = 0; i < transporters.length; i++){
            if (transporters[i].ticksToLive < 30){
                var newTransporter = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK],undefined, {role: 'transporter'});
                console.log('New transporter created: old less then 30 ticks: ' + newTransporter);
            }
          }
        
        if(distributors.length <2){
            var newDistributor = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK],undefined, {role: 'distributor'});
            console.log('New transporter created: ' + newDistributor);
        }
        
        for(var i = 0; i < distributors.length; i++){
            if (distributors[i].ticksToLive < 30){
                var newDistributors = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK],undefined, {role: 'distributors'});
                console.log('New transporter created: old less then 30 ticks: ' + newDistributors);
            }
          }
        
        if(archer.length < 1){
            var newArcher = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK,RANGED_ATTACK], undefined, {role: 'archer'});
            console.log('New archer created: ' + newArcher);
        }
        
        for(var i = 0; i < archer.length; i++){
            if (archer[i].ticksToLive < 30){
                var newArcher = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK,RANGED_ATTACK], undefined, {role: 'archer'});
                console.log('New archer created: old less then 30 ticks ' + newArcher);
            }
          }
          
         if(melee.length < 1){
            var newMelee = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK,ATTACK], undefined, {role: 'melee'});
            console.log('New melee created: ' + newMelee);
        }
        
        for(var i = 0; i < melee.length; i++){
            if (melee[i].ticksToLive < 30){
                var newMelee = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK,ATTACK], undefined, {role: 'melee'});
                console.log('New melee created: old less then 30 ticks ' + newMelee);
            }
          }
          
         if(healer.length < 1){
            var newHealer = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK,HEAL], undefined, {role: 'healer'});
            console.log('New healer created: ' + newHealer);
        }
        
        for(var i = 0; i < healer.length; i++){
            if (healer[i].ticksToLive < 30){
                var newHealer = Game.spawns['Spawn1'].createCreep([MOVE,CARRY,WORK,HEAL], undefined, {role: 'healer'});
            console.log('New healer created: old less then 30 ticks ' + newHealer);
            }
          }  
        
        for(var deadName in Memory.creeps){
            if(!Game.creeps[deadName]){
                delete Memory.creeps[deadName];
                console.log('Memory free after deletin: ' + deadName);
            }
        }
    }
};