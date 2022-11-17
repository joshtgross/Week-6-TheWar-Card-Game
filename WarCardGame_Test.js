var expect = chai.expect;
//test for Deck class
describe('Deck', function() {
    it('should have 52 cards', function() {
        let deck = new Deck;
        expect(deck.deck.length).to.equal(52);
    });
    });

    var expect = chai.expect;

//test for Deck class
describe("Deck", function () {
  //describe the class
  it("should have 52 cards", function () {
    //test for 52 cards
    let x = new Deck(); //create a new deck
    expect(x.deck.length).to.equal(52); //expect the deck to have 52 cards
  });
});

//test for Player class
describe("Player", function () {
  //describe the class
  it("should have a hand", function () {
    //test for a hand
    let player = new Player(); //create a new player
    expect(player.hand).to.exist; //expect the player to have a hand
  });
});