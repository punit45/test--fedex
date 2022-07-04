// first we will select all the class and then the sorting .  sort().. 

// const arr = ["a","b","c","d","e","f","g","h","i"];

// const newAarr = arr.sort();

// console.log(newAarr);  


// above returns the sorted items . 



// // we have taken an array 
// // sort out the array 
// // then we will pass the new array to the submit . 

// const newArr1 = arr.random();
// console.log(newArr1);

// shuffle the array


let arr = [1,2,3,4,5];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);

