// სავარჯიშო 1
let numfunct = (...numbers) => {
    let numfunctsum = 0;
    for (let a of numbers){
        if (a > 0){
            numfunctsum += a
        }
    }
    console.log(numfunctsum);
}
numfunct(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);



// სავარჯიშო 2
function numberfunction(...numbers){
    let numberfunctionsum = 0;
    for (let a of numbers) {
        numberfunctionsum += a
    }
    console.log(numberfunctionsum);
}

numberfunction(10, 50, 6, 7, 8, 11, 6, 3, 9);




// სავარჯიშო 3
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

for (let [key,value] of object.entries(user)) {
    console.log(key,value);
}



// სავარჯიშო 4
let bignumber = function (...numbers) {
    let numfunct = 0;
    for (let a of numbers){
        if (a > numfunct){
            numfunct = a
        }
    }
    return numfunct
}
console.log(bignumber (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8));



// სავარჯიშო 5
let array = [1,2,4,10,34,5,7,87];

for (let a of array){
    if (a>0 && a<10){
        console.log(a);
    }
}



// სავარჯიშო 6
let numbers =[1,2,3,4,5,6,7,8,9,10];
for (let a of numbers){
    if (a==5){
      break;
    }
    console.log(a);
}
