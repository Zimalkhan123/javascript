<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
       
      
      //let first_name = "Zimal"
     /* let last_name ="khan "
      let num = 12
      let num2 = 456
      alert(first_name + " "+ last_name)
      alert(first_name)
      let new_name= first_name.toLowerCase()
      let name = first_name.replace("Z", "z")
      alert(first_name.startwith("n"))
      alert(new_name)
      alert(name)*/
    /*  n = prompt("enter a number")
      console.log("the length of your number is   "+ n.length)
      if (n%2==0)
      {
      
        console.log("the number is even")

      }
     
       else {
        console.log("the number is odd ")
       }*/
//console.log("the length of your name is"+ first_name.length)


/*let text = prompt("Enter the text");
console.log("Your text length is " + text.length);

// Split the text based on spaces and filter out empty strings
let words = text.split(" ").filter(word => word.trim() !== '');

console.log("Words in the text:");
words.forEach(word => console.log(word));

// Function to count words without spaces
function countWordsWithoutSpace(text) {
  const wordsWithoutSpace = text.split(" ").filter(word => word.trim() !== '');
  return wordsWithoutSpace.length;
}

// Function to count alphabets without spaces
function countAlphabetsWithoutSpace(text) {
  const regex = /[a-zA-Z]/g;
  const alphabetsWithoutSpace = text.match(regex);
  return alphabetsWithoutSpace ? alphabetsWithoutSpace.length : 0;
}

// Count words without spaces in the entered text
const wordCountWithoutSpace = countWordsWithoutSpace(text);
console.log("Number of words without space:", wordCountWithoutSpace);

// Count alphabets without spaces in the entered text
const alphabetCountWithoutSpace = countAlphabetsWithoutSpace(text);
console.log("Number of alphabets without space:", alphabetCountWithoutSpace);


*/
let text = prompt("enter the alphabet to analyze");
console.log (text.length);
let words =text.split(" ");
console.log("the number of words is "+ words.length);
let first_name = promt("enter the first name")
alert(first_name)
    </script>
</body>
</html>