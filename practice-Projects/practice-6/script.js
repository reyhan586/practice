let num = 10;
let arr = [];

for (let i = 1 ; i <= num  ; i++){
    let satr = [i];
    for(let j = 2; j <= num ; j++ ){
        zarb = i * j; 
        satr.push(zarb);
    }   
    arr.push(satr); 

}
console.log(arr);
