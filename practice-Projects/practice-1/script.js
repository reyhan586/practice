for (let i = 1; i < 6; i++) {
   let varable = i; 
  for (let j = 0; j < 10; j++) {
    varable+= "*";
  }
    console.log(varable);
}

console.log('************');

for (let i = 1; i < 5; i++) {
   let varable = i + ' ';
   for (let j = 0; j < 10; j++){
    if ( j === 0){
        varable += '*';
    } else if(j < 9){
        varable += ' ';
    } else {
        varable += '*';
    }
  }
  console.log(varable);
}
console.log('************');