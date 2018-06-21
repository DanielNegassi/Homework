const cardArray = [{
  name: "Bulbasaur",
  damage: 60
}, {
  name: "Caterpie",
  damage: 40
}, {
  name: "Charmander",
  damage: 60
}, {
  name: "Clefairy",
  damage: 50
}, {
  name: "Jigglypuff",
  damage: 60
}, {
  name: "Mankey",
  damage: 30
}, {
  name: "Meowth",
  damage: 60
}, {
  name: "Nidoran - female",
  damage: 60
}, {
  name: "Nidoran - male",
  damage: 50
}, {
  name: "Oddish",
  damage: 40
}, {
  name: "Pidgey",
  damage: 50
}, {
  name: "Pikachu",
  damage: 50
}, {
  name: "Poliwag",
  damage: 50
}, {
  name: "Psyduck",
  damage: 60
}, {
  name: "Rattata",
  damage: 30
}, {
  name: "Squirtle",
  damage: 60
}, {
  name: "Vulpix",
  damage: 50
}, {
  name: "Weedle",
  damage: 40
}]

//1. Make an object for the player and computer
const player = {
  score: 0,
  cardsInHand: [],
  cardsInDeck: [],
  dealerTracker: true
}

const computer = {
  score: 0,
  cardsInHand: [],
  cardsInDeck: [],
  dealerTracker: false
}
//need to give each player 3 cards randomly
//make a const that will have a function
const dealDecks = () => {
    // loop through the array
    for (let i = 0; i < cardArray.length; i++) {
      const randomPick = Math.floor(Math.random() * ((cardArray.length - 1) + 1))
      if (player.dealerTracker) {
        if (player.cardsInDeck.includes(cardArray[randomPick])) {
          i--
        } else {
          player.cardsInDeck.push(cardArray[randomPick])
          player.dealerTracker = false;
          computer.dealerTracker = true;
        }
      } else {
          if(computer.cardsInDeck.includes(cardArray[randomPick])) {
            i--
          } else {
            computer.cardsInDeck.push(cardArray[randomPick])
            player.cardDealerTracker = true;
            computer.cardDealerTracker = false;
          }
        }
      }
    };
    
