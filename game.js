
//Hier wird eine Klasse für Pokemon mit Eigenschaften erstellt

class Pokemon{

constructor (name,health,magic) {
    this.name = name
    this.health = health
    this.magic = magic
    this.skills = []
    this.counter = 0

}

//Mit dieser Methode lernt unser Pokemon einen Skill
learnAttackSkill(newskill){
   return this.skills.push(newskill)
   }

   //Hier werden die aktuellen Gesundheit und Magiepunkt des Pokemon`s angezeigt

   showStatus(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Magic: ${this.magic}`);

    //Mit dieser Abfrage wird der Gewinner entschieden
    if(this.counter>3){
        console.log(`${this.name} hat den Kampf gewonnen`);
    }
   }
   //Mit dieser Methode wird die Magie des Pokemon`s erhöht
   getMagics(){
   this.magic = this.magic+Math.floor(Math.random()*21)

   }
    //Überprüft ob das Pokemon genug Magie für den Angriff hat
   hasEnoughMagic(skillName) {
    let skill = this.skills.find(skill => skill.attack === skillName);
    return this.magic >= skill.magic;
}
//Überprüft ob das Pokemon noch lebt
isAlive(){
 return this.health>0? true : false
}
//Mit dieser Methode wird das Pokemon angegriffen
attack(skillName, opponent){
    if (!this.isAlive()) {
        console.log(`${this.name} ist tot und kann nicht mehr weiter kämpfen.`);
        return;
    }
    if((!opponent.isAlive())){
        console.log(`${opponent.name} ist tot und kann nicht mehr weiter kämpfen.`);
        return;

    }

    if (!this.hasEnoughMagic(skillName)) {
        console.log(`${this.name} hat nicht genug Magie für den Angriff ${skillName}.`);
        return;
    }
    let skill = this.skills.find(skill => skill.attack === skillName);
    this.magic -= skill.magic;
    opponent.health -= skill.damage;
    this.counter++;

this.showStatus()
opponent.showStatus()



}
}
//Hier wird eine Klasse für AttackSkill mit Eigenschaften erstellt
class AttackSkill{
    constructor(attack,damage,magic){
        this.attack = attack
        this.damage = damage
        this.magic= magic
    }
}

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

pikachu.attack("lightning", bulbasaur);
bulbasaur.attack("poisonSeed", pikachu);
pikachu.attack("poisonSeed", bulbasaur);
bulbasaur.attack("lightning", pikachu);
pikachu.attack("lightning", bulbasaur);
pikachu.attack("poisonSeed", bulbasaur);

