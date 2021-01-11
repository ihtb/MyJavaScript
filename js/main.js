'use strict';

const scores = [80, 90, 40];
scores.push(60, 50);
scores.shift();

for(let i = 0; i < scores.length; i++){
    console.log(`Score[${i}] : ${scores[i]}`);
}

let user = {
    first_name : 'John',
    last_name : 'does'
};

let {first_name, last_name} = user;

console.log(first_name);
console.log(last_name);
console.log(typeof(last_name));