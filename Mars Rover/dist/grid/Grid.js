"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.components = [];
    }
    add(component) {
        this.components.push(component);
    }
    withinBounds(x, y) {
        return x >= 0 && y >= 0 && x < this.width && y < this.height;
    }
    isBlocked(x, y) {
        return this.components.some((c) => c.isObstacle() && c.x === x && c.y === y);
    }
}
exports.Grid = Grid;
