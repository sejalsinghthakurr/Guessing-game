const max = prompt("Enter the Max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number!");
while(true){
    if(guess == "quit"){
        console.log("You quited the game!");
        break;
    } if(guess == random){
        console.log("Your guess is right! Random number was " + random)
        break;
    } else if(guess < random){
        guess = prompt("Hint: Your guess is Smaller than the Random Number");
    }
    else {;
        guess = prompt("Hint: Your guess is Larger than the random number")
    }
}