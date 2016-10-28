module.exports = {
     
     run: function(){
         
         var x = Game.spawns['Spawn1'].pos.x;
         var y = Game.spawns['Spawn1'].pos.y;
         
         Game.spawns['Spawn1'].room.createFlag(x-3,y-1,'HealerFlag', COLOR_GREEN);
         Game.spawns['Spawn1'].room.createFlag(x-6,y-8,'MeleeFlag', COLOR_YELLOW);
         Game.spawns['Spawn1'].room.createFlag(x-17,y+4,'ArcherFlag', COLOR_RED);
         Game.spawns['Spawn1'].room.createFlag(x-7,y-5,'WaitingFlag', COLOR_PURPLE);
     }
};