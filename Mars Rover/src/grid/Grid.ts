import { GridComponent } from './GridComponent';

export class Grid {
  private components: GridComponent[] = [];

  constructor(private readonly width: number, private readonly height: number) {}

  add(component: GridComponent) {
    this.components.push(component);
  }

  withinBounds(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }

  isBlocked(x: number, y: number): boolean {
    return this.components.some(
      (c) => c.isObstacle() && (c as any).x === x && (c as any).y === y
    );
  }
}
