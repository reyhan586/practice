let shape = "";
for (let i = 1; i < 6; i++) {
  console.log((shape += "*"));
}

for ( let j = 1 ; j < 6 ; j++){
    console.log("*****");
}

let star = "*****";
for (let k = 1; k < 6; k++) {
  star = star.slice(0, -1);
  console.log(star);
}
