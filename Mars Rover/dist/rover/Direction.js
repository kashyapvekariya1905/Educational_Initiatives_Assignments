"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.West = exports.East = exports.South = exports.North = void 0;
class North {
    left() { return new West(); }
    right() { return new East(); }
    move(x, y) { return [x, y + 1]; }
    name() { return 'N'; }
}
exports.North = North;
class South {
    left() { return new East(); }
    right() { return new West(); }
    move(x, y) { return [x, y - 1]; }
    name() { return 'S'; }
}
exports.South = South;
class East {
    left() { return new North(); }
    right() { return new South(); }
    move(x, y) { return [x + 1, y]; }
    name() { return 'E'; }
}
exports.East = East;
class West {
    left() { return new South(); }
    right() { return new North(); }
    move(x, y) { return [x - 1, y]; }
    name() { return 'W'; }
}
exports.West = West;
