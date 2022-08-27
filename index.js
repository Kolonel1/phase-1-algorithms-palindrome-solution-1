function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('')
  return reversedWord === word
  
  
}


/* 
  Add your pseudocode here
*/

/*a palindrome means that the order of the string when reversed is the same as when normal
there is no method that can reverse the order of a  string but there is one for arrays
so you can split the string input into an array then reverse then join it again */


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
