// let marks = [97, 56, 58, 45];
// console.log(marks);

//  for loop

// let people = [ "ironman" , "batman" , "Spiderman" , "hero"]
// for (let i = 0; i < people.length;i++) {
//  console.log(people[i]);
    
// }

// for of

//  for(let el of people) {
     // console.log(people);
//  }

// practice qs

let items = [250, 645, 300, 900, 50]
 
let i = 0;
 for (let val of items) {
    console.log(`value of index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++
 }

//  let avg = sum / marks.length;
//  console.log(`avg marks of the class = ${avg}`);
