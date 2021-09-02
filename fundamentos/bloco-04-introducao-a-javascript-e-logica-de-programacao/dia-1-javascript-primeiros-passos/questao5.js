const x = 40;
const y = 90;
const z = 60;

let status = 0;

if ((x < 0) || (y < 0) || (z < 0)){
    status = "ERROR"
} else if (x + y + z != 180){
    status = false;
} else if (x + y + z == 180){
    status = true;
}

console.log(status);
