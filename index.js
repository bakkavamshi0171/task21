// Hint: Use the join() method.
console.log('Q-1 You have an array Join these words into a single sentence with spaces between them.')
let arr = ["Hello", "world", "this", "is", "JavaScript"];
let newarr = arr.join(" ");
console.log(newarr)
console.log("")

// Hint: Use the delete operator.
console.log("Q-2 Delete the number at index 2.");
let num = [1,2,3,4,5];
delete num[2];
console.log(num);
console.log(num[2])
console.log("")


// Hint: Use the concat() method.
console.log("Q-3 You have two arrays. Merge these two arrays into a single array.");
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
let newArr= arr1.concat(arr2);
console.log(newArr)
console.log("")


// Hint: Use the flat() method.
console.log("Q-4 You have a nested array Flatten this array into a single-level array.")
let array= [[1, 2], [3, 4], [5, [6, 7]]];
let newArray= array.flat(Infinity);
console.log(newArray);
console.log("")


// Hint: Use the splice() method.
console.log('Q-5 You have an array of . Remove "banana" and add "kiwi" and "mango" in its place.');
let fruits=  ["apple", "banana", "orange", "grape"];
fruits.splice(1,1,"Kiwi", "Mango" ); //splice(index value, remove values, "adding element", "more elements")
console.log(fruits);
console.log("");


// Hint: Use the slice() method.
console.log('Q-6 Extract the numbers from index 2 to index 5 (inclusive of index 2 but not 5).');
let number =[1, 2, 3, 4, 5, 6, 7, 8];
let newNumber = number.slice(2,5);
console.log(newNumber);




