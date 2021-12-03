let alphabets = "abcdefghijklmnopqrstuvwxyz";
let alphabetsHeight = [];

for (let i = 0; i < word.length; i++) {
    alphabetsHeight.push(h[alphabets.indexOf(word[i])]);
}

var t = alphabetsHeight.sort() [alphabetsHeight.length-1];

return t * word.length;

