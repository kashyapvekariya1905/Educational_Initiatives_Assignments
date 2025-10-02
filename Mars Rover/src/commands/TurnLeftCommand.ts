import { Command } from './Command';
import { Rover } from '../rover/Rover';

export class TurnLeftCommand implements Command {
  constructor(private rover: Rover) {}
  execute(): void {
    this.rover.turnLeft();
  }
}
