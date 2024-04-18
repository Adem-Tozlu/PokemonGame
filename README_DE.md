# Pokemon Kampfsimulation

Du hast die Aufgabe, einen Kampf zwischen zwei Pokemon mit JavaScript-Klassen und -Methoden zu simulieren.

### Klassen

#### Pokemon

Erstelle eine Klasse `Pokemon`, die ein Pokemon mit den folgenden Eigenschaften darstellt:

- `name`: Ein String, der den Namen des Pokemon darstellt.
- `health`: Eine Zahl, die die Gesundheit des Pokemon darstellt.
- `magic`: Eine Zahl, die die Magie des Pokemon darstellt.
- `skills`: Ein Array, das die Angriffsfähigkeiten des Pokemon enthält. Es beginnt als leeres Array.
- `counter`: Eine Zahl, die bei 0 beginnt und jedes Mal erhöht wird, wenn das Pokemon einen erfolgreichen Angriff startet.

#### AttackSkill

Erstelle eine Klasse `AttackSkill`, die eine Angriffsfähigkeit eines Pokemon mit den folgenden Eigenschaften darstellt:

- `attack`: Ein String, der den Namen des Angriffs darstellt.
- `damage`: Eine Zahl, die den durch den Angriff verursachten Schaden darstellt.
- `magic`: Eine Zahl, die die Magiekosten des Angriffs darstellt.

Die `Pokemon`-Klasse sollte die folgenden Methoden haben:

- `learnAttackSkill(newskill)`: Diese Methode nimmt ein Objekt der Klasse `AttackSkill` entgegen und fügt es dem `skills`-Array hinzu.
- `showStatus()`: Diese Methode protokolliert die aktuelle Gesundheit und Magie des Pokemon und ob es den Kampf bereits gewonnen hat, basierend auf dem `counter` (ein Pokemon gilt als gewonnen, wenn der `counter` größer als 3 ist).
- `getMagics()`: Diese Methode erhöht die Magie des Pokemon um eine Zufallszahl zwischen 0 und 20.
- `hasEnoughMagic(skillName)`: Diese Methode überprüft, ob das Pokemon genug Magie hat, um eine Angriffsfähigkeit auszuführen. Sie gibt `true` zurück, wenn die Magie ausreicht, und `false` andernfalls.
- `isAlive()`: Diese Methode überprüft, ob das Pokemon noch am Leben ist, indem sie überprüft, ob seine Gesundheit größer als 0 ist. Sie gibt `true` zurück, wenn das Pokemon am Leben ist, und `false` andernfalls.
- `attack(skillName, opponent)`: Diese Methode simuliert einen Angriff des Pokemon auf ein gegnerisches Pokemon. Sie überprüft, ob das Pokemon und der Gegner am Leben sind und ob das Pokemon genug Magie hat, um den Angriff auszuführen. Wenn die Bedingungen erfüllt sind, verringert die Methode die Magie des Pokemon und die Gesundheit des Gegners basierend auf der ausgewählten Fähigkeit. Sie erhöht auch den `counter` und ruft die Methode `showStatus` für beide Pokemon auf.

### Anweisungen

1. Erstelle zwei Pokemon-Objekte, zum Beispiel `pikachu` und `bulbasaur`, und weise ihnen Anfangswerte für Gesundheit und Magie zu.
2. Erstelle zwei Angriffsfähigkeitsobjekte, zum Beispiel `lightning` und `bombing`, und weise ihnen Angriffs-, Schadens- und Magiewerte zu.
3. Bringe jedem Pokemon die Angriffsfähigkeiten bei, indem du die Methode `learnAttackSkill` aufrufst.
4. Simuliere eine Angriffssequenz, indem du die Methode `attack` abwechselnd auf jedem Pokemon aufrufst und jedes Mal verschiedene Angriffsfähigkeiten auswählst.

### Beispiel:

```js
// Neue Pokemons erstellen
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

// Neue Fähigkeiten erstellen, die Pokemons erlernen können
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);

// Pikachu lernt Fähigkeiten
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);

// Bulbasaur lernt Fähigkeiten
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);


// Pokemons beginnen, sich gegenseitig anzugreifen
pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachu);
pikachu.attack("lightning", bulbasaur);
pikachu.attack("poisonSeed", bulbasaur); // Bulbasaur ist bereits tot!
```

Das war's! Du hast die Pokemon-Kampfsimulation abgeschlossen. Versuche, weitere Pokemons und Angriffsfähigkeiten hinzuzufügen, um den Kampf interessanter zu gestalten.