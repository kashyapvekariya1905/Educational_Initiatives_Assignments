export interface Direction {
  left(): Direction;
  right(): Direction;
  move(x: number, y: number): [number, number];
  name(): string;
}

export class North implements Direction {
  left(): Direction  { return new West(); }
  right(): Direction { return new East(); }
  move(x: number, y: number): [number, number] { return [x, y + 1] as [number, number]; }
  name(): string { return 'N'; }
}

export class South implements Direction {
  left(): Direction  { return new East(); }
  right(): Direction { return new West(); }
  move(x: number, y: number): [number, number] { return [x, y - 1] as [number, number]; }
  name(): string { return 'S'; }
}

export class East implements Direction {
  left(): Direction  { return new North(); }
  right(): Direction { return new South(); }
  move(x: number, y: number): [number, number] { return [x + 1, y] as [number, number]; }
  name(): string { return 'E'; }
}

export class West implements Direction {
  left(): Direction  { return new South(); }
  right(): Direction { return new North(); }
  move(x: number, y: number): [number, number] { return [x - 1, y] as [number, number]; }
  name(): string { return 'W'; }
}
