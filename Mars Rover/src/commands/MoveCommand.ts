import { Command } from './Command';
import { Rover } from '../rover/Rover';

export class MoveCommand implements Command {
  constructor(private rover: Rover) {}
  execute(): void {
    this.rover.moveForward();
  }
}
