

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    for(var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))
var mySum = 0;
function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    for(var i = 0; i < args.length; i++){
      mySum = mySum + args[i];
    };
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

var total = 0;
var myAv = 0;
function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    for(var i = 0; i < args.length; i++){
      total = total + args[i];
    };
    myAv = total / args.length
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    return Math.max.apply(null, args);
}

console.assert( largest(2, 4, 6, 8) === 8 )


// 4. find the longest string of the inputs (returns the longest input (A STRING))
var thatOne = "";
function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE

    args.forEach(function(thisOne) {
      if(thisOne.length > thatOne.length) {
        thatOne = thisOne;
      }
    })
    };

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var dreamTeam = ["Charles Barkley", "Larry Bird", "Karl Malone", "Michael Jordan", "Magic Johnson", "Scottie Pippen"];
dreamTeam.sort();

["Charles Barkley", "Karl Malone", "Larry Bird", "Magic Johnson", "Michael Jordan", "Scottie Pippen"]
// .concat()
var statement = "I am ";
var selfWorth = "a worthless sack of shit";

var realization = statement.concat(selfWorth);
alert("kill me")

// .indexOf()
var array = [1 , 2, "you know what to do", 3, 4, "drop it to the floor"];
array.indexOf("drop it to the floor");
// .split()
var beastieBoy = "MCA";
var Adam = beastieBoy.split("");
console.log(Adam);

// .join()
var tolstoy = ["War","and","Peace"];
var Leo = tolstoy.join();
console.log(Leo);

// .pop()
var poop = ["p","o","o","p"];
var poo = poop.pop();
console.log(poop);

// .push()
var bestFood = ["taco"];
var worstFoodSpot = bestFood.push("Bell");
console.log(worstFoodSpot);

// .slice()
var goodMovies = ["Space Jam", "Mighty Ducks 1", "Mighty Ducks 2", "Ghostbusters"]
var moviesIOwn = goodMovies.slice(2,3);

// .splice()
var goodMovies = ["Space Jam", "Mighty Ducks 1", "Mighty Ducks 2", "Ghostbusters"]
var neverRent = goodMovies.splice(3,1);

// .shift()
var goodMovies = ["Space Jam", "Mighty Ducks 1", "Mighty Ducks 2", "Ghostbusters"]
var onNetflix = goodMovies.shift();

// .unshift()
var goodMovies = ["Space Jam", "Mighty Ducks 1", "Mighty Ducks 2", "Ghostbusters"]
var childHoodRoadFlix = goodMovies.unshift("Heavy Weights");
// .filter()
function filterthat(value) {
  return value <= 200;
}
var filterthis =[4, 6, 50, 300].filter(filterthat);
// .map()
var numbers = [3.6, 7.234, 20.78];
var newnumbers = numbers.map(Math.floor);
