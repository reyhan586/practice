

for (let i = 5 ; i > 0 ; i--){
  let satr = '';
  for (let j = 6 - i ; j < 6 ; j++){
    satr += '*'
  }
  console.log( satr );
}

let arr = [];

for ( let i = 1 ; i < 6 ; i++){
  arr.push(6 - i);
}
console.log(arr);
