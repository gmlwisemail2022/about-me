/* prototype exercises 
 Exercise1: Creating a Person 

Create a class named Person, it has two properties, name, and age. You pass both properties through the constructor. Call this constructor to initialize a new Person. Remember to upload the code you created to Github.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
person1 = new Person("Tom",20);
person2 = new Person("Sherry",25);
console.log (person1);
console.log (person2);

/* */
/* Exercise: Game Developer

Imagine that you are a game developer who develops text-based games. Create a class named Player it needs:
A unique name
A health property
An attack method that reduces the opponent's health by 10 per attack.
Initialize two instances of your class Player
Write a function that randomly decides which player attacks.  Math.random() could be handy. After each attack console.log who was attacked.
This function will need to continue until one of instances has 0 health left, the other player should be declared the winner when a player has been defeated. Please console.log the victor.

Hints:
The best place to start this question is to create the Player class, which utilizes a constructor to add in the property's health and name
You will also need to define an attack method on the class. (Remember to create this method after the closing braces of the constructor and before the closing braces of the class)
Once you have created the Player class, you need to create a function named fight that takes both instances of the Player class as parameters, this function needs to decide which player is going to attack the other, using Math.random() with conditional statements in this instance will help, decide which attacks then call the attack method accordingly.
All that remains now is to create a loop that will decide which player is the winner (who has health left).     
*/
/* temp */
class Player {
    constructor (name,health){
        this.name = name;
        this.health = health;
    }
    slash(){
        const playerNumber = Math.ceil(Math.random() * 2);
        if (playerNumber == 1){
            console.log(`${enemy.name} has been attacked by ${character.name} and took 10 damage`);
            enemy.health -= 10;
         } else {
            character.health -= 10;
            console.log(`${character.name} has been attacked by ${enemy.name} and took 10 damage`);
        }
    }
}

const character = new Player ("Tom", 80);
const enemy = new Player("goblin",50);

do {
    character.slash();
    console.log("health - player: " + character.health + " enemy: " + enemy.health);
    if (character.health == 0){
        console.log(`${character.name} has died. ${enemy.name} wins!`);
    } else if(enemy.health == 0){
        console.log(`${enemy.name} has died. ${character.name} wins!`);      
    };
} while (character.health != 0 && enemy.health !=0)


/* Exercise: Monster
Imagine you want to develop a game.   In this game you have monsters.   Create a class with the name ‘Monster’.   In the constructor of this class do some basic setup. The monster has health and a name.

initialize the Monster’s health by giving it health of 100
the constructor will receive an options object. This object has a property name on it. Use this object to give the Monster a name.
give that monster a method called wounded, which takes one parameter. The parameter reduces the monster's health. If health is 0 console.log(‘monster dead’);
create a function separate from the class 'Monster', named hero that calls the wounded method with a random number between 5-20.
initialize the monster and try to kill it.
Hint:

The Monster class should look like this:

class Monster {
  constructor(option) {
    //initialize your stuff here
  }
  wound(damage) {
    //Here is where you can damage the monster
  }
}
You can randomize a range of integers using:

 Math.floor(Math.random() * (max - min + 1)) + min;
*/

class Monster {
    constructor (option) {
        this.health = 100;
        this.name = option.name;
    }
    wound(damage) {
        this.health -= damage;
    }
}

function hero(){
    min = Math.ceil(5);
    max = Math.floor(20);
    damage = Math.floor(Math.random() * (max - min + 1)) + min; /*randomize integers */
    goblin.wound(damage);
};

const goblin = new Monster({name: "goblin"});
for (let i=0; goblin.health > 0; i++) {    
    console.log("remaining health", goblin.health); 
    hero();
    if (goblin.health <= 0) {
        console.log("goblin is dead!");
    };
};

/*Exercise: Person

Finish the class below.   Give it an info method so that we can retrieve properties from that class.   See code below.
class Person {
}
const person = new Person( {age: 44, name: 'Tom' });
person.info() // The person is called Tom and is 44 years old

Exercise: Student 
Continued from E, create a class called Student which has the property gpa. Overriding the info method such that the .info() method returns the following string instead.
The student is called Tom and is 44 years old. He has an overall GPA of 4.0 in the university.

Hint: maybe the Student is also a Person? Using the same method name in the Student class will override the previous method, so long as Student 'extends' Person.
*/

class Person {
    constructor (option) {
        this.age = option.age;
        this.name = option.name;
    }   
    info() {
       console.log(`The person is called ${this.name} and is ${this.age} years old`);
    }       
 }
 
 class Student extends Person {
     constructor (option) {
         super(option);
         this.gpa = 4.0;
     }
     info() {
         console.log(`The person is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university`);  
     }
 }
 
 const person = new Person( {age: 44, name: 'Tom' });
 person.info() // The person is called Tom and is 44 years old
 const person2 = new Student( {age: 44, name: 'Tom' });
 person2.info();

 /* Bonus xercise: Casino Simulation

Create a casino simulation with the following features:

Create a new class called Gambler with the properties cash and bet.
Initialize as many gamblers as you want, at least two.
Write a function called casino which lets every gambler bet one after the other.
Every gambler loses their bet based on different probabilities. (For example, gambler A loses with a probability of 0.6, and gambler B loses with a probability of 0.4 …)
Return the order in which gamblers ran out of cash (or do they run out of cash at all)
Hint:

Surely, you should know how to create the class Gambler with a constructor by now!
You can consider initializing a few gamblers then putting all those gamblers into an array and passing it as an input into the casino function. The casino function should be where each player gets to play one round with their cash adjusted based on their win/lose (maybe by using Math.random() and testing it against their losing chance?) and their bets (win = + and lose = -).
Remember to test the casino function to make sure it works properly because moving on. After that, the only thing left is to loop through the casino function over and over again until they go broke (if they ever do!).
A simple way to keep track of the order of the loser is to push their name into an array.
*/
/* Method 1: probability is based on how many players will lose on that round 
class Gambler {
    constructor (options){
        this.name = options.name;
        this.cash = options.cash;
        this.bet = options.bet;
        this.bankrupt = false;
    }
    loss(name, cash){
        console.log("enter loss method")
        console.log(`Gambler ${gamblerList[0].name} lost, $${gamblerList[0].cash} remaining`);        
    }
}

function casino (){
    var chance = Math.random();
    var loss = 0;
    if ( chance * 100 < 1) { /*values: gambler 1 has 70% chance to lose 
        console.log("chance is", chance * 100 < 1);
        loss = 1;
    } else if (chance * 100 < 40) {
        loss = 2;
    } else if (chance * 100 < 50) {
        loss = 3;
    } else if (chance * 100 < 60) { /*values: gambler 4 has 40% chance to lose 
        loss = 4;
    } else {
        console.log("no one lose");
    }

    console.log (`--- Round ${count} ---`);   /*fill up with outer loop count 
    for (let i = 0; i <loss; i++) { 
        gamblerList[i].cash -= gamblerList[i].bet;
        if (gamblerList[i].cash <= 0 && gamblerList[i].bankrupt == false) {
            console.log (`Gambler ${gamblerList[i].name} ran out of cash!`);
            gamblerList[i].bankrupt = true;
            bankruptList.push(gamblerList[i].name);
        } else if (gamblerList[i].bankrupt == false) {
            console.log(`Gambler ${gamblerList[i].name} lost, $${gamblerList[i].cash} remaining`);
        };
    }
}          

gamblerList=[];
bankruptList=[];
count = 0;
const richGambler = new Gambler({name:"Bob",cash:100,bet:10});
gamblerList.push(richGambler);
const safeGambler = new Gambler({name:"Mike",cash:40,bet:5});
gamblerList.push(safeGambler);
const poorGambler = new Gambler({name:"Tom",cash:25,bet:7});
gamblerList.push(poorGambler);
const riskyGambler = new Gambler({name:"Sam",cash:80,bet:25});
gamblerList.push(riskyGambler);

console.log(gamblerList);


do {
    count += 1;
    casino ();
}   while (bankruptList.length != gamblerList.length);
 
 console.log ("The order of players that ran out of cash: ", bankruptList);  */
    

 /* Method 2: probability is based on each player on who will lose each round */
    /* Bonus xercise: Casino Simulation

Create a casino simulation with the following features:

Create a new class called Gambler with the properties cash and bet.
Initialize as many gamblers as you want, at least two.
Write a function called casino which lets every gambler bet one after the other.
Every gambler loses their bet based on different probabilities. (For example, gambler A loses with a probability of 0.6, and gambler B loses with a probability of 0.4 …)
Return the order in which gamblers ran out of cash (or do they run out of cash at all)
Hint:

Surely, you should know how to create the class Gambler with a constructor by now!
You can consider initializing a few gamblers then putting all those gamblers into an array and passing it as an input into the casino function. The casino function should be where each player gets to play one round with their cash adjusted based on their win/lose (maybe by using Math.random() and testing it against their losing chance?) and their bets (win = + and lose = -).
Remember to test the casino function to make sure it works properly because moving on. After that, the only thing left is to loop through the casino function over and over again until they go broke (if they ever do!).
A simple way to keep track of the order of the loser is to push their name into an array.
*/
*/
class Gambler {
    constructor (options){
        this.name = options.name;
        this.cash = options.cash;
        this.bet = options.bet;
        this.bankrupt = false;
        this.probability = options.probability;
    }
    loss(name, cash){
        console.log("enter loss method")
        console.log(`Gambler ${gamblerList[0].name} lost, $${gamblerList[0].cash} remaining`);        
    }
}

function casino (){
    var chance = Math.random().toFixed(2);
    var roundList = []
    console.log (`--- Round ${count} ---`);   /*fill up with outer loop count */
    for (let i = 0; i < gamblerList.length; i++) { 
        if (gamblerList[i].bankrupt == false) {
            if ( gamblerList[i].probability >= chance) {
                gamblerList[i].cash -= gamblerList[i].bet;
                if (gamblerList[i].cash < 0) {
                    gamblerList[i].cash = 0;
                }
                console.log(`Gambler ${gamblerList[i].name} lost, $${gamblerList[i].cash} remaining`);
            };
            if (gamblerList[i].cash <= 0) {
                console.log (`Gambler ${gamblerList[i].name} ran out of cash!`);
                gamblerList[i].bankrupt = true;
                bankruptList.push(gamblerList[i].name);
            };
        }
    }
}          

gamblerList=[];
bankruptList=[];
count = 0;
const richGambler = new Gambler({name:"Bob",cash:100,bet:10,probability:0.6});
gamblerList.push(richGambler);
const safeGambler = new Gambler({name:"Mike",cash:40,bet:5,probability:0.5});
gamblerList.push(safeGambler);
const poorGambler = new Gambler({name:"Tom",cash:25,bet:7,probability:0.4});
gamblerList.push(poorGambler);
const riskyGambler = new Gambler({name:"Sam",cash:80,bet:25,probability:0.3});
gamblerList.push(riskyGambler);

do {
    count += 1;
    casino ();
}   while (bankruptList.length != gamblerList.length);
 
 console.log ("The order of players that ran out of cash: ", bankruptList);  
    

 /* Inheritance Exercise 
 Exercise: Animals 

 You have to design a class hierarchy using inheritance with the following classes. It should reduce repetitions as much as possible.
 
 Bat : A Bat can fly and feed milk
 Fish : A Fish can swim and lay eggs
 Whale : A Whale can swim and feed milk
 Bird : A Bird can fly and lay eggs
 You should be able to check if the animal has the above functionality. For example,
 
 console.log(bat.fly(), bat.feed()); // A Bat can fly
                                     // A Bat is feeding milk
 
 Hint: Do not overthink this. A simple way to think is that a Bird can fly and lay eggs and a Bat is also a Bird so it “inherit” the bird’s properties but at the same time can feed milk and not lay eggs.
 */
/* Inheritance exercise
You have to design a class hierarchy using inheritance with the following classes. It should reduce repetitions as much as possible.

Bat : A Bat can fly and feed milk
Fish : A Fish can swim and lay eggs
Whale : A Whale can swim and feed milk
Bird : A Bird can fly and lay eggs
You should be able to check if the animal has the above functionality. For example,

console.log(bat.fly(), bat.feed()); // A Bat can fly
                                    // A Bat is feeding milk

Hint: Do not overthink this. A simple way to think is that a Bird can fly and lay eggs and a Bat is also a Bird so it “inherit” the bird’s properties but at the same time can feed milk and not lay eggs.
*/

class AnimalSwim {
    constructor(options) {   
    this.name = options.name
    }
    swim () {
        return`A ${this.name} can swim`
    }
}
class AnimalFly {
    constructor(options) {   
    this.name = options.name
    }
    fly () {
        return`A ${this.name} can fly`
    }
}
class Fish extends AnimalSwim {    
    constructor(options) {   
        super(options);
       }
    lay () {
        return`A ${this.name} can lay eggs`
    }
}
class Bat extends AnimalFly {
    constructor(options){
        super(options);
    }
    feed () {
        return `A ${this.name} is feeding milk`
    }
}
class Whale extends AnimalSwim {
   constructor(options) {        
        super(options);
       }
    feed () {
        return `A ${this.name} is feeding milk`
    }
}
class Bird extends AnimalFly {    
   constructor(options) {        
        super(options);
       }
    lay () {
        return`A ${this.name} can lay eggs`
    }
}

const bat = new Bat({name:'Bat'});
const fish = new Fish({name:'Fish'});
const whale = new Whale({name:'Whale'}); 
const bird = new Bird({name:'Bird'});
console.log(bat.fly(), bat.feed());
console.log(fish.swim(), fish.lay());
console.log(whale.swim(), whale.feed());
console.log(bird.fly(), bird.lay());

/* Compsition Exerise
Exercise: Animals with Composition

Re-do Exercise G with composition.

Hint: Again, do not overthink this. Try breaking down each functionality (fly, swim, etc.) into components and implement the concept of composition.
 
*/

class BaseFlying {
    constructor(type) {
      this.name = type.name;
    }
    fly() {
          return`A ${this.name} can fly`
    }
  }
  class BaseSwimming {
    constructor(type) {
      this.name = type.name;
    }
    swim() {
          return`A ${this.name} can swim`
    }
  }
  class BaseLaying {
    constructor(type) {
      this.name = type.name;
    }
    lay() {
          return`A ${this.name} can lay eggs`
    }
  }
  class BaseFeeding {
    constructor(type) {
      this.name = type.name;
    }
    feed() {
          return `A ${this.name} is feeding milk`
    }
  }
  class Bat {
    constructor(type) {
      this.flyingAnimal = new BaseFlying(type);
      this.feedingAnimal = new BaseFeeding(type);
    }
    fly() {
      return this.flyingAnimal.fly();
    }
    feed() {
      return this.feedingAnimal.feed();
    }
  }
  class Fish {
    constructor(type) {
      this.swimmingAnimal = new BaseSwimming(type);
      this.layingAnimal = new BaseLaying(type);
    }
    swim() {
      return this.swimmingAnimal.swim();
    }
    lay() {
      return this.layingAnimal.lay();
    }
  }
  class Whale {
    constructor(type) {
      this.swimmingAnimal = new BaseSwimming(type);
      this.feedingAnimal = new BaseFeeding(type);   
    }
    swim() {
      return this.swimmingAnimal.swim();
    }
    feed() {
      return this.feedingAnimal.feed();
    }
  }
  class Bird {
    constructor(type) {
      this.flyingAnimal = new BaseFlying(type);
      this.layingAnimal = new BaseLaying(type);
    }
    fly() {
      return this.flyingAnimal.fly();
    }
    lay() {
      return this.layingAnimal.lay();
    }
  }
  var bat = new Bat({name: "Bat"});
  console.log(bat.fly());
  console.log(bat.feed());
  
  var fish = new Fish({name:"Fish"});
  console.log(fish.swim());
  console.log(fish.lay());

  var whale = new Whale({name:"Whale"});
  console.log(whale.swim());
  console.log(whale.feed());

  var bird = new Bird({name:"Bird"});
  console.log(bird.fly());
  console.log(bird.lay());

