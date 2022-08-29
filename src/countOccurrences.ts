/**
Write a function, `countOccurrences` which takes a string and returns an 
object detailing the number of occurrences in the string of each letter in the string.

E.g. 

INPUT: “HELLO”

OUTPUT: {”E”: 1, “O”: 1, “H”: 1, “L”: 2}  

input = 'abcdabcd'
output {'a':2,'b':2,'c':2,'d':2}

Note that the *order* of object properties doesn’t matter 
and shouldn’t be relied upon in your tests.

outputObj = {}
for letter of input
let letterInsensitive = letter.lower
  if letterInsensitive in ouputObj keys
    outputObj[letterInsensitive] += 1
  else 
    outputObj[letterInsensitive] = 1
 */

function countOccurrences(input: string): object {
  const outputObj: any = {}
  for (let letter of input) {
    let letterInsensitive = letter.toLowerCase()
    if (Object.keys(outputObj).includes(letterInsensitive)) {
      outputObj[letterInsensitive] += 1
    } else {
      outputObj[letterInsensitive] = 1
    }
  }
  return outputObj
}

export default countOccurrences;

// let myObj: any = {}
// myObj['a']=0; console.log(myObj);
// myObj['a']+=1;  console.log(myObj);


