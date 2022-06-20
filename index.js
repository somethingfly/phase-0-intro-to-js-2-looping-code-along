// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
*/

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(array,eventName){
    const arrayNew = [];
    for (let i = 0; i < array.length; i++) {
        arrayNew.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return arrayNew;
}
// console.log(writeCards(gifts));

function countDown(i){
    while(i > -1){
        console.log(i);
        i--;
    }
    return
}

// countDown(10);
