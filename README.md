# Educational Initiatives Assignments

This repository contains two TypeScript exercises completed as part of the **2025–26 Coding Exercises**:

* **Exercise 1:** Design Patterns
* **Exercise 2:** Mars Rover Simulation

Both exercises are implemented in **TypeScript**, follow **OOP principles**, apply **design patterns**, and include proper error handling, validations, and logging.

---

## Exercise 1: Design Patterns (`design-patterns-exercise`)

This exercise demonstrates various software design patterns (Creational, Structural, Behavioral) in TypeScript with practical examples and demos.

### Structure

```
design-patterns-exercise/
 ├── src/
 │   ├── creational/    # Builder, Factory patterns
 │   ├── structural/    # Adapter, Decorator patterns
 │   ├── behavioral/    # Observer, Strategy patterns
 │   ├── core/          # Utilities (Logger, ErrorHandler, Validator)
 │   ├── services/      # Service classes
 │   └── demo/          # Demo files for each pattern
 └── package.json
```

### Getting Started

1. Navigate to the folder:

   ```bash
   cd design-patterns-exercise
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Build the project:

   ```bash
   npm run build
   ```
4. Run a demo (example: ObserverDemo):

   ```bash
   npx --no-install ts-node src/demo/ObserverDemo.ts
   ```

   Replace `ObserverDemo.ts` with any other demo file to test different patterns.

---

## Exercise 2: Mars Rover Simulation (`mars-rover`)

A TypeScript simulation of a Mars Rover navigating a grid with obstacles, applying the Command Pattern for movement and direction. The Rover can:

* Move forward (`M`)
* Turn left (`L`)
* Turn right (`R`)
* Detect obstacles and stop if one is in its path
* Report final position and status

### Structure

```
mars-rover/
 ├── src/
 │   ├── commands/   # Command pattern implementations for rover actions
 │   ├── grid/       # Grid, cell, and obstacle logic
 │   ├── rover/      # Rover movement, direction, and status logic
 │   └── index.ts    # Entry point for simulation
 └── package.json
```

### Getting Started

1. Navigate to the folder:

   ```bash
   cd mars-rover
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the simulation:

   ```bash
   npx --no-install ts-node src/index.ts
   ```

---

## Evaluation Highlights

* Implemented SOLID principles and clean code practices.
* Used Command Pattern and Composite Pattern for flexibility.
* Added logging, validations, and error handling for robustness.
* Code is modular, extensible, and globally understandable.
* Tested with multiple input scenarios.

---

## How to Use

* Clone this repository.
* Open each project folder (`design-patterns-exercise` / `mars-rover`).
* Follow the Getting Started steps above.

---

## Author

Developed by **[Your Name]** as part of the Campus Placements 2026 Coding Exercises.
