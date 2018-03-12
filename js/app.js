/*
 * Create a list that holds all of your cards
 */

//'array' descendants 'li'
const cards = document.querySelectorAll('.deck li');

//possible className for the <li> element are 'card', 'card open show', 'card match'

const icons = document.querySelectorAll('.deck li i');

const icon_array = [];

icons.forEach(function (icon) {
    icon_array.push(icon.className);
});

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


//flip the cards to face down
window.onload = function flipCardsFacingDown() {
    shuffle(icon_array);
    let i = 0;
    icons.forEach(function (icon) {
        icon.className = icon_array[i];
        i++;
    });

    cards.forEach(function (card) {
        card.className = 'card';
    });
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}


let noOfClicks = 0;

//the className of the <i> target element
let currentIcon = ''; 

//a string that will hold the className of the first <i> element's className
let previousIcon = '';

//temp holder of the className of the <i> element
let tempIconHolder = '';

//holds the value of the target <li> which is the card
let previousTarget = '';


document.querySelector('.deck').addEventListener('click', function (evt) {


    noOfClicks++;

    //show the card
    flipCardOpen(evt);

    currentIcon = evt.target.firstElementChild.className; 
    
    if (noOfClicks === 2) {


        //if previous icon same as new icon then change both classNames to  'card match'
        //else change previous and new icon classNames to 'card'
        if (currentIcon == previousIcon) {
            flipCardMatchFace(evt);
            flipCardMatchFace(previousTarget);
            noOfClicks = 0;
            
        } else {
           flipCardDown(evt);
            flipCardDown(previousTarget)
            noOfClicks= 0;
        }
        //noOfClicks = 0;
    }
    previousTarget = evt;
    previousIcon = currentIcon;

}, false);

function flipCardOpen(evt) {
    evt.target.className = 'card open show';
}

function flipCardDown(evt){
    evt.target.className = 'card';
}

function flipCardMatchFace(evt){
    evt.target.className = 'card match';
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


