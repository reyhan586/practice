
for(let i = 1; i < 2 ; i++){
    let shape = '';
    for( let j = 1 ; j < 6 ; j++ ){ 
        console.log( shape += '*');
    }
}

for ( let j = 1 ; j < 6 ; j++){
    console.log("*****");
}

for(let i = 1; i < 2 ; i++){
    let star = '*****';
    for( let j = 1 ; j < 6 ; j++ ){ 
        star = star.slice(0, -1);
        console.log( star);
    }
}