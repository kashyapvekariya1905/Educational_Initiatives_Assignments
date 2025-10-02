import { GridComponent } from './GridComponent';

export class Obstacle extends GridComponent {
  constructor(public readonly x: number, public readonly y: number) {
    super();
  }
  isObstacle(): boolean {
    return true;
  }
}