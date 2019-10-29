
let favouriteMovies=prompt("Enter your 3 favourite movies separated by commas:");
console.log(favouriteMovies.split(','));

let stringToReverse= prompt("Enter a sentence u want to reverse");
function reverseString(){
  return stringToReverse.split(' ,').reverse().join(' ');
}
alert(`the reversed string is: ${reverseString()}` )