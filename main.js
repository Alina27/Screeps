var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleTower = require('role.tower');
var creepCreator = require('creep.creator');
var saveAssess = require('role.saveAssess');
var roleMiner = require('role.miner');
var roleTransport = require('role.transport');
var roleDistributor = require('role.distributor');
var roleArcher = require('role.archer');
var roleMalee = require('role.melee');
var roleHealer = require('role.healer');
var flagCreator = require('flags.creator');

module.exports.loop = function () {

        Game.spawns['Spawn1'].room.createConstructionSite( 26, 28, STRUCTURE_EXTENSION);
        Game.spawns['Spawn1'].room.createConstructionSite( 25, 28, STRUCTURE_EXTENSION);
        Game.spawns['Spawn1'].room.createConstructionSite( 27, 27, STRUCTURE_EXTENSION);
        Game.spawns['Spawn1'].room.createConstructionSite( 24, 28, STRUCTURE_EXTENSION);
        Game.spawns['Spawn1'].room.createConstructionSite( 23, 27, STRUCTURE_EXTENSION);
         
        creepCreator.run();
        flagCreator.run();
    
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
        if(creep.memory.role == 'miner'){
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'transporter'){
            roleTransport.run(creep);
        }
        if(creep.memory.role == 'distributor'){
            roleDistributor.run(creep);
        } 
        if(creep.memory.role == 'archer'){
            roleArcher.run(creep);
        }
        if(creep.memory.role == 'melee'){
            roleMalee.run(creep);
        }
        if(creep.memory.role == 'healer'){
            roleHealer.run(creep);
        }
    }
    
    for(var name in Game.creeps){
            var creep = Game.creeps[name];
            saveAssess.run(creep);
        }
}