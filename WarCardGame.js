// Defined Deck of Cards by assigning suits, values and value ranks
const suits = [ 'Diamonds', 'Clubs', 'Hearts', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9','10','J', 'Q', 'K', 'A'];

const valueRank=  {
  '2' : 2,
  '3' : 3,
  '4' : 4,
  '5' : 5,
  '6' : 6, 
  '7' : 7,
  '8' : 8, 
  '9' : 9,
  '10': 10,
  'J' : 11,
  'Q' : 12,
  'K' : 13, 
  'A' : 14
}

//Created the class Card using this keyword for the value & suit
class Card {
    constructor (value, suit) {
        this.value = value;
        this.suit = suit;
    }
}



//Populating the class Deck with the values and suits above with a nested for loop within a for loop and pushing them onto the array
class Deck {
    constructor (){
        this.deck =[];
        for (let i =0; i < suits.length; i++) {
           
            //console.log (i); --- shows outer loop progress

            for (let z = 0; z < values.length; z++) {

                //console.log (suits[i], values[z]); -- shows inner loop progress

       this.deck.push(new Card (values[z], suits[i]));
            }
        }
        
    }
    //looked up ways to shuffle and settled on the code below found at the link below
    cardShuffle() { //(https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
            
        let currentIndex = this.deck.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [this.deck[currentIndex], this.deck[randomIndex]] = [
            this.deck[randomIndex], this.deck[currentIndex]];
        }
    }

    //this removes one card off the deck and returns it to the calling function
    returnCard(){

        
       let card = this.deck.pop();
        //console.log (card); test
        return card;


    }

}

//Assigns the class Player with a hand and score then created functions to take a card, add points, get the player's score, show the player's hand, and play card
class Player {
    constructor (){
    this.hand = [];
    this.score = 0;
    }

    takeCard(card){

       // console.log("take card", card); test
        this.hand.push(card);
    }

    addPoint (){
        this.score++;
    }

    getScore (){
        return this.score;
    }
    
    showHand (){
        //console.log(this.hand); test
        return this.hand;
    }

    playCard (){

        //TO DO:check to make sure hand isn't empty; test
        return this.hand.pop();
        //risk of unhandled errors if there are no cards left in players hand
    }
}

let deck = new Deck;
//console.log (deck); prints test deck
deck.cardShuffle();
//console.log (deck); test

let playerOne = new Player;
let playerTwo = new Player;


//For Loop to deal cards to players
for (let i =0; i < (values.length * suits.length); i+=2){
    //console.log("Test")
    playerOne.takeCard(deck.returnCard());
    playerTwo.takeCard(deck.returnCard());
}


//For Loop to play game, if/else statements that evaluate turns to see each value and suit of card each player plays, who wins each round, prints the scores per round
for (let turn = 0; turn < (values.length * suits.length)/2; turn++){
    cardOne = playerOne.playCard();
    cardTwo = playerTwo.playCard();
    console.log ( "Turn: ", turn+1);
    console.log("Player One played", cardOne.value, "of", cardOne.suit);
    console.log("Player Two played", cardTwo.value, "of", cardTwo.suit);
   // console.log(valueRank[cardOne.value]); test

   //if the value of card one in player one's hand is greater than the value of card two in player two's hand print the following and add a point to the players' scores
   if (valueRank[cardOne.value] > valueRank[cardTwo.value]){
        playerOne.addPoint();
        console.log("Player One gets the point! Their scores are now P1:", playerOne.getScore(), ", P2:", playerTwo.getScore(), ".");
   } // else if statement if the value of card two in player two's hand is greater than the value of card one in player one's hand print the following and add a point to the players' scores
   else if (valueRank[cardOne.value] < valueRank[cardTwo.value]){
        playerTwo.addPoint();
        console.log("Player Two gets the point! Their scores are now P1:", playerOne.getScore(), ", P2:", playerTwo.getScore(), ".");
   } else { // or print no points if neither
        console.log ("No Points Awarded!");
    }
}

//prints final rounds scores for players, if/else statements evaluate which player won and prints
console.log ("Final Scores are... Player One.. ", playerOne.getScore(),"Player Two..", playerTwo.getScore());

if (playerOne.getScore() > playerTwo.getScore()){
    console.log ("Player One Wins!");
}
    else if (playerOne.getScore() < playerTwo.getScore()){
        console.log ("Player Two Wins!");
    }
    else {
        console.log ("You are both losers!");
    }




