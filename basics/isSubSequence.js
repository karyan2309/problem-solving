// INPUT: two strings
// LOGIC: checks whether the characters in the first string form a subsequence of the characters in the second string
// OUTPUT: true/false
// NOTE: Solve using Multiple Pointers method

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        i++;
      }
      j++;
    }
    return i === str1.length;
  }

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
  