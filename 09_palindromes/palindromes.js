const palindromes = function (str) {
    let arr = [];
    let revArr = [];
    const capLetters = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    str = str.toUpperCase();
    for (let i=0; i<str.length; i++){
        //if str.charAt(i) is a letter add to arr
        if (capLetters.includes(str.charAt(i))) {
            arr.push(str.charAt(i));
        }
        else continue;
    }
    //reverse arr and push to revArr
    let j = arr.length - 1;
    for (let i=0; i<arr.length; i++){
        revArr.push(arr[j]);
        j--;
    }
    //compare the two arrays and see if they are the same (return true)
    for (let i=0; i<arr.length; i++){
        if (arr[i] !== revArr[i]) return false; 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
