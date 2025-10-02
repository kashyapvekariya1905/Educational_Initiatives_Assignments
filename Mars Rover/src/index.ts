import { Grid } from './grid/Grid';
import { Obstacle } from './grid/Obstacle';
import { Rover } from './rover/Rover';
import { North } from './rover/Direction';
import { MoveCommand } from './commands/MoveCommand';
import { TurnLeftCommand } from './commands/TurnLeftCommand';
import { TurnRightCommand } from './commands/TurnRightCommand';
import * as readline from 'readline';

const grid = new Grid(10, 10);
grid.add(new Obstacle(2, 2));
grid.add(new Obstacle(3, 5));

const rover = new Rover(0, 0, new North(), grid);

const commandMap: Record<string, () => any> = {
  'M': () => new MoveCommand(rover),
  'L': () => new TurnLeftCommand(rover),
  'R': () => new TurnRightCommand(rover)
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter command sequence (use M=Move, L=Turn Left, R=Turn Right): ", (answer) => {
  const sequence = answer.trim().toUpperCase().split('');

  sequence.forEach(cmd => {
    if (commandMap[cmd]) {
      commandMap[cmd]().execute();
    } else {
      console.log(`Invalid command: ${cmd}`);
    }
  });

  console.log("Final rover state:", rover.report());

  rl.close();
});









// const grid = new Grid(10, 10);

// grid.add(new Obstacle(2, 2));
// grid.add(new Obstacle(3, 5));

// const rover = new Rover(0, 0, new North(), grid);

// const commandMap: Record<string, any> = {
//   'M': () => new MoveCommand(rover),
//   'L': () => new TurnLeftCommand(rover),
//   'R': () => new TurnRightCommand(rover)
// };

// const sequence = ['M', 'M', 'R', 'M', 'L', 'M'];

// sequence.forEach(cmd => commandMap[cmd]().execute());

// console.log(rover.report());
