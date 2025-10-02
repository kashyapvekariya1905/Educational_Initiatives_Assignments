import { Command } from './Command';
import { Rover } from '../rover/Rover';

export class TurnRightCommand implements Command {
  constructor(private rover: Rover) {}
  execute(): void {
    this.rover.turnRight();
  }
}
