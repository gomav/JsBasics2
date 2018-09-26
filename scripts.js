'use strict';
//Creating an Array using the Array object - validate by running browser console
var a = new Array(3);
    a[0] = 'Boat';
    a[1] = 'Truck';
    a[2] = 'Car';

//Empty Array is created using square brackets
var b = [];
    b[1] = 'Jet';
    b[2] = 'Train';
    b[3] = 'Hoverboard';

//A populate Array
var c = ['Boat', 'Truck', 'Car'];

var animals = ['Dog', 'Giraffe', 'Cat'];

//Array of buildings
var buildings = new Array(0);
    buildings[0] = 'House';
    buildings[1] = 'Barn';
    buildings[2] = 'Garage';

//Get length of an Array by using the 'length' function
console.log(c.length);

//This block of code will loop over an Array and display the Array elements in
//the console
console.log('loop over animals array');
    for (var i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

console.log('loop over buildings array');
    for (var i = 0; i <buildings.length; i++){
        console.log(buildings[i]);
    }
