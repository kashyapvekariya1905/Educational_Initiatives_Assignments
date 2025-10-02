"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveCommand = void 0;
class MoveCommand {
    constructor(rover) {
        this.rover = rover;
    }
    execute() {
        this.rover.moveForward();
    }
}
exports.MoveCommand = MoveCommand;
