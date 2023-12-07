/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const count = (str) => {
    const count = {};
    str.toLowerCase().split('').forEach(char => {
        if(!count[char]) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    });

    return count;
}

function isAnagram(str1, str2) {

    if(str1.length !== str2.length) {
        return false;
    }

    let c = 0;

    const count1 = count(str1);
    const count2 = count(str2);

    str1.toLowerCase().split('').forEach(char => {
        console.log(count1[char], count2[char])
        if(count1[char] != count2[char]){
            c++;
        }
    })

    return (c <= 0);
}

module.exports = isAnagram;
