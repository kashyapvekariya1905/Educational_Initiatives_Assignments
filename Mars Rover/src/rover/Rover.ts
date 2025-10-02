import { Grid } from '../grid/Grid';
import { Direction } from './Direction';

export class Rover {
  private x: number;
  private y: number;
  private direction: Direction;

  constructor(x: number, y: number, direction: Direction, private grid: Grid) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  turnLeft(): void {
    this.direction = this.direction.left();
  }

  turnRight(): void {
    this.direction = this.direction.right();
  }

  moveForward(): void {
    const [nx, ny] = this.direction.move(this.x, this.y);
    if (this.grid.withinBounds(nx, ny) && !this.grid.isBlocked(nx, ny)) {
      this.x = nx;
      this.y = ny;
    } else {
      console.log(`⚠️ Movement blocked at (${nx}, ${ny})`);
    }
  }

  report(): string {
    return `Rover is at (${this.x}, ${this.y}) facing ${this.direction.name()}`;
  }
}
