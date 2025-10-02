"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Obstacle = void 0;
const GridComponent_1 = require("./GridComponent");
class Obstacle extends GridComponent_1.GridComponent {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    isObstacle() {
        return true;
    }
}
exports.Obstacle = Obstacle;
