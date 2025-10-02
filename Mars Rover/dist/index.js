"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./grid/Grid");
const Obstacle_1 = require("./grid/Obstacle");
const Rover_1 = require("./rover/Rover");
const Direction_1 = require("./rover/Direction");
const MoveCommand_1 = require("./commands/MoveCommand");
const TurnLeftCommand_1 = require("./commands/TurnLeftCommand");
const TurnRightCommand_1 = require("./commands/TurnRightCommand");
// Create a 10x10 grid with obstacles
const grid = new Grid_1.Grid(10, 10);
grid.add(new Obstacle_1.Obstacle(2, 2));
grid.add(new Obstacle_1.Obstacle(3, 5));
// Initialize rover
const rover = new Rover_1.Rover(0, 0, new Direction_1.North(), grid);
// Map commands to objects (Command Pattern)
const commandMap = {
    'M': () => new MoveCommand_1.MoveCommand(rover),
    'L': () => new TurnLeftCommand_1.TurnLeftCommand(rover),
    'R': () => new TurnRightCommand_1.TurnRightCommand(rover)
};
// Example sequence
const sequence = ['M', 'M', 'R', 'M', 'L', 'M'];
sequence.forEach(cmd => commandMap[cmd]().execute());
console.log(rover.report());
