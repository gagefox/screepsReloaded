/** Civilian Creeps control logic **/

// Includes
var roleHarvester = require('./role.harvester');
var roleUpgrader = require('./role.upgrader');
var roleBuilder = require('./role.builder');

var controllerCreepsCivilian = {
    run: function () {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
        }
    }
};

module.exports = controllerCreepsCivilian;