'use strict';

// setting up all the objects : 
let scisors = { 
    name : "Scisors", 
    lose : "Rock",
    win : "Paper",
};

let paper = { 
    name : "Paper", 
    lose : "Scisors",
    win : "Rock",
};

let rock = { 
    name : "Rock", 
    lose : "Paper",
    win : "Scisors",
};

// map of items :
let variants = new Map(
    [
        [0, rock],
        [1, paper],
        [2, scisors],
    ]
);
function playRound(playerSection, computerSection) {
    console.log('User chosen : ' + playerSection.name);
    console.log('Computer chosen : ' + computerSection.name);

    if (playerSection.lose == computerSection.name) {
        console.log('Computer wins!');
    } else if (playerSection.win == computerSection.name){
        console.log('User wins!');
    } else { 
        console.log('Draw!');
    }
};

function selectComputer() {
    let choise = Math.floor(Math.random() * 3);
    return choise;
};

let computerSection = variants.get(selectComputer());
let playerSection = variants.get(selectComputer());

playRound(playerSection, computerSection);