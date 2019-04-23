/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding: refers/points to everything within the global scope.
* 2. Implicit Binding: refers/points more specifically with the dot notation.
* 3. New Binding: when invoked will create an empty object with this referencing the new object.
* 4. Explicit Binding: is called upon by using call or apply and is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greet (name) {
  console.log(this);
  return `Hi, my name is ${name}.`;
}
console.log(greet('Danielle'));

// Principle 2

// code example for Implicit Binding
const name = {
  name: 'Danielle',
  age: 30,
  hobby: function(hobby){
    return `What I enjoy most is: ${hobby}.`;
  }
}
console.log(name.hobby('Gaming'));

// Principle 3

// code example for New Binding
function PastTimes (person) {
  this.hobby = 'Napping';
  this.person = person;
  this.stuff = function() {
    console.log('Shhh! ' + this.person + ' is ' + this.hobby);
    console.log(this);
  }
}

const lady = new PastTimes('Danielle');
lady.stuff();

// Principle 4

// code example for Explicit Binding
const character = {
  name: 'Jack',
  age: 150,
  holiday: function() {
    return this;
  }
}
const character1 = {
  name: 'Sally',
  age: 100,
  regret: function() {
    return "I had no part in these take-overs."
  }
}

const event = ['Christmas', 'Easter', 'Halloween'];
function whatIsThis(holiday1, holiday2, holiday3) {
  return `Hi, I'm ${this.name}, these are some holiday's I have tried to take over: ${holiday1}, ${holiday2}, and ${holiday3}.`;
}
console.log(whatIsThis.apply(character, event));
console.log(whatIsThis.call(character1, ...event))