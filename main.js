var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleTower = require('role.tower');
var creepCreator = require('creep.creator');

module.exports.loop = function () {
    
      Game.spawns['Spawn1'].room.controller.activateSafeMode();
         
        creepCreator.run();
    
        for(var name in Game.rooms){
           roleTower.run(name);
        }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}