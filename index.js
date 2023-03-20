const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, value) {
    let messages = []
    for (let i = 0; i <names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
     } 
       return messages; 
    }
function countDown() {
    let countDown = 10;
    while (countDown >= 0 ) {
        console.log(countDown--)
    }
}
//* logs each number when counting down