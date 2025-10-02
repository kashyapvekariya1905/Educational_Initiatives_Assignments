"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const GridComponent_1 = require("./GridComponent");
class Cell extends GridComponent_1.GridComponent {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    isObstacle() {
        return false;
    }
}
exports.Cell = Cell;
