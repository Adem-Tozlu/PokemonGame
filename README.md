# Pokemon Battle Simulation

You are tasked with simulating a battle between two Pokemon using JavaScript classes and methods. 

### Classes

#### Pokemon

Create a class `Pokemon` that represents a Pokemon with the following properties:

- `name`: A string that represents the name of the Pokemon.
- `health`: A number that represents the health of the Pokemon.
- `magic`: A number that represents the magic of the Pokemon.
- `skills`: An array that holds the attack skills of the Pokemon. It starts as an empty array.
- `counter`: A number that starts at 0 and increments every time the Pokemon launches a successful attack.

#### AttackSkill

Create a class `AttackSkill` that represents an attack skill of a Pokemon with the following properties:

- `attack`: A string that represents the name of the attack.
- `damage`: A number that represents the damage caused by the attack.
- `magic`: A number that represents the magic cost of the attack.

The `Pokemon` class should have the following methods:

- `learnAttackSkill(newskill)`: This method accepts an object of the `AttackSkill` class and adds it to the `skills` array.
- `showStatus()`: This method logs the current health and magic of the Pokemon, and whether it has won the battle already, based on the `counter` (a Pokemon is considered to have won if the `counter` is greater than 3).
- `getMagics()`: This method increases the Pokemon's magic by a random number between 0 and 20.
- `hasEnoughMagic(skillName)`: This method checks if the Pokemon has enough magic to perform an attack skill. It returns `true` if the magic is enough and `false` otherwise.
- `isAlive()`: This method checks if the Pokemon is alive by checking if its health is greater than 0. It returns `true` if the Pokemon is alive and `false` otherwise.
- `attack(skillName, opponent)`: This method simulates an attack from the Pokemon to an opponent Pokemon. It checks if the Pokemon and the opponent are alive and if the Pokemon has enough magic to perform the attack. If the conditions are met, the method decreases the Pokemon's magic and the opponent's health based on the selected skill. It also increments the `counter` and calls the `showStatus` method for both Pokemon.

### Instructions

1. Create two Pokemon objects, for example, `pikachu` and `bulbasaur`, and assign them initial health and magic values.
2. Create two attack skill objects, for example, `lightning` and `bombing`, and assign them attack, damage, and magic values.
3. Make each Pokemon learn the attack skills by calling the `learnAttackSkill` method.
4. Simulate an attack sequence by calling the `attack` method on each Pokemon in turns, selecting different attack skills each time.

### Example:

```js
// create new Pokemons
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// create new skills that Pokemons can learn
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);

// pikachu learning skills
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);

// bulbasaur learning skills
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);


// Pokemons starts attacking each other
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachu);
pikachu.attack("lightning", bulbasaur);
pikachu.attack("poisonSeed", bulbasaur); // bulbasaur is already dead!
```

That's it! You've completed the Pokemon Battle Simulation. Try to add more Pokemons and attack skills to make the battle more interesting.