# JavaScript & Classes

## OOP

## Object
- Collection of properties and methods
- toLowerCase

## Why use OOP
- To avoid Spegatti code

## Parts of OOP
- Object literal

- Constructor Function
- Prototypes
- Classes
- Instances (new,this)

## 4 Pillars
- Abstraction : abstraction refers to the concept of hiding the complex implementation details of a system while exposing only the necessary and relevant functionalities to the users. It allows developers to work with high-level interfaces without needing to understand the underlying complexity. Abstraction helps in managing complexity, improving code readability, and promoting code reuse.

Example: 
```JavaScript
// Car abstraction
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`Accelerating. Current speed: ${this.speed} mph`);
  }

  brake() {
    this.speed = Math.max(0, this.speed - 10);
    console.log(`Braking. Current speed: ${this.speed} mph`);
  }
}

// Using the Car abstraction
const myCar = new Car('Toyota', 'Camry');
myCar.accelerate(50); // Output: Accelerating. Current speed: 50 mph
myCar.brake(); // Output: Braking. Current speed: 40 mph


```

### Explanation: 
- In this example, Car is an abstraction representing a car. It has methods like accelerate() and brake() to interact with the car's speed. The internal details of how these methods work, such as the engine mechanism or braking system, are hidden from the user of the Car class.

When we use the Car abstraction, we don't need to know the intricate details of how the acceleration or braking is implemented internally. We only need to know how to use the provided methods to control the car's speed.

Abstraction allows us to work with complex systems in a simplified manner, focusing only on the essential aspects needed for our tasks, while hiding the complexity under the hood. This improves code maintainability, readability, and reusability.

- Encaplutation : Encapsulation in JavaScript refers to the bundling of data and methods (functions) that operate on the data into a single unit, typically known as a class or an object. This allows for the hiding of implementation details and providing a clear interface for interacting with the data. In JavaScript, encapsulation is achieved using objects and closures. Objects encapsulate data through properties and methods, while closures encapsulate data within function scopes.

Example 
```JavaScript
// Encapsulation using objects
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engineStarted = false;
  }

  startEngine() {
    this.engineStarted = true;
    console.log('Engine started.');
  }

  stopEngine() {
    this.engineStarted = false;
    console.log('Engine stopped.');
  }
}

const myCar = new Car('Toyota', 'Camry', 2020);
myCar.startEngine(); // Output: Engine started.
console.log(myCar.engineStarted); // Output: true

```
### Explanation : 
- In this example, the Car class encapsulates data (make, model, year, engineStarted) and methods (startEngine, stopEngine) related to a car. The internal state of the Car object (such as whether the engine is started) is encapsulated within the object, and can only be accessed or modified through its public interface (methods).
Example
```JavaScript
// Encapsulation using closures
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log('Count:', count);
    },
    decrement: function() {
      count--;
      console.log('Count:', count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // Output: Count: 1
counter.decrement(); // Output: Count: 0
console.log(counter.getCount()); // Output: 0
```
### Explanation :
- In this example, the createCounter function returns an object with methods (increment, decrement, getCount) for interacting with a counter variable (count). The variable count is encapsulated within the closure of the createCounter function, making it inaccessible from outside the returned object. This provides encapsulation of data and behavior within the object, maintaining data integrity and preventing unintended access or modification.

- Inheritance : nheritance in JavaScript refers to the ability of an object (subclass) to acquire properties and methods from another object (superclass). In JavaScript, inheritance is implemented using prototype chaining.

##### Here's a brief overview of how inheritance works in JavaScript:
- Prototype Chain: Each object in JavaScript has a prototype, which is a reference to another object. When you access a property or method of an object, JavaScript first checks if the object itself contains that property or method. If it doesn't, JavaScript looks at the object's prototype, and then the prototype's prototype, and so on, until it finds the property or method or reaches the end of the prototype chain.

- Constructor Functions: Constructor functions are functions used to create objects. They serve as blueprints for creating objects with similar properties and methods.

- prototype Property: Constructor functions have a prototype property, which is an object that serves as the prototype for objects created by the constructor function.

- new Keyword: When you use the new keyword with a constructor function, JavaScript creates a new object and sets its prototype to the constructor function's prototype property.
Example: 
```JavaScript
// Superclass
function Animal(name) {
  this.name = name;
}

// Method added to the superclass prototype
Animal.prototype.sayName = function() {
  console.log(`My name is ${this.name}.`);
};

// Subclass inheriting from the superclass
function Dog(name, breed) {
  Animal.call(this, name); // Call the superclass constructor
  this.breed = breed;
}

// Set up prototype chain for inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Reset constructor property

// Method added to the subclass prototype
Dog.prototype.bark = function() {
  console.log('Woof!');
};

// Create instances of the subclass
const myDog = new Dog('Buddy', 'Labrador');
myDog.sayName(); // Output: My name is Buddy.
myDog.bark();    // Output: Woof!
```
### Explanation:
- Animal is a superclass with a constructor function that accepts a name parameter and a method sayName() added to its prototype.
- Dog is a subclass that inherits from Animal. It calls the Animal constructor function using Animal.call(this, name) and also adds a breed property.
- Dog.prototype is set to a new object created by Object.create(Animal.prototype), establishing the prototype chain for inheritance. The constructor property of Dog.prototype is then reset to Dog.
- Instances of Dog, such as myDog, inherit properties and methods from both Animal and Dog, demonstrating inheritance in action.

- Polymorpism : Polymorphism is a concept in object-oriented programming where different classes can be treated as instances of a common superclass. In JavaScript, polymorphism is achieved through method overriding and dynamic method binding. In simpler terms, polymorphism allows objects of different types to be treated as objects of a common base type. This means that you can use a single interface to interact with objects of various types, and the behavior of the interface will vary based on the specific type of object it is interacting with.

Example:
```JavaScript
class Animal {
  speak() {
    console.log('The animal makes a sound.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

class Cat extends Animal {
  speak() {
    console.log('The cat meows.');
  }
}

// Function that takes an Animal object and calls its speak method
function makeSound(animal) {
  animal.speak();
}

// Creating instances of different classes
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

// Calling the makeSound function with different objects
makeSound(animal); // Output: The animal makes a sound.
makeSound(dog);    // Output: The dog barks.
makeSound(cat);    // Output: The cat meows.
```
### Explanation :
- We have a base class Animal with a speak method that outputs a generic sound.
- We have two subclasses Dog and Cat that extend the Animal class and override the speak method with their own implementation.
- We have a function makeSound that takes an Animal object as a parameter and calls its speak method.
- When we call the makeSound function with instances of Animal, Dog, and Cat, polymorphism comes into play. Even though makeSound expects an Animal object, it can accept instances of Dog and Cat because they are subclasses of Animal. The speak method called by makeSound will vary based on the specific type of object it is called with, demonstrating polymorphic behavior.

This example showcases how different objects can exhibit different behaviors while using a common interface, thanks to polymorphism.