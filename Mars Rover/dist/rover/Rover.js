"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
class Rover {
    constructor(x, y, direction, grid) {
        this.grid = grid;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    turnLeft() {
        this.direction = this.direction.left();
    }
    turnRight() {
        this.direction = this.direction.right();
    }
    moveForward() {
        const [nx, ny] = this.direction.move(this.x, this.y);
        if (this.grid.withinBounds(nx, ny) && !this.grid.isBlocked(nx, ny)) {
            this.x = nx;
            this.y = ny;
        }
        else {
            console.log(`⚠️ Movement blocked at (${nx}, ${ny})`);
        }
    }
    report() {
        return `Rover is at (${this.x}, ${this.y}) facing ${this.direction.name()}`;
    }
}
exports.Rover = Rover;
