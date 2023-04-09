const reverseString = function(string) {
let len = string.length;
let str = '';
for (let i=1; i<=len; i++){
    str += string.charAt(len-i);
    console.log(str);
}
return str;
};
// Do not edit below this line
module.exports = reverseString;
