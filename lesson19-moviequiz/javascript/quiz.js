// Micheal Jones Sept. 11, 2026 Lesson 19 movie quiz 

// This movie quiz is on the lord of the rings movie although the answers to all are in the first movie if you know where to look

// need variables for all the answers to make them i'll put all the right answers in variables to compare to the prompt variables from the user

let answer1 = "no";
let answer2 = "peter jackson";
let answer3 = 9;
let answer4 = "sting";
let answer5 = "blue";
let answer6 = "imladris";
let score = 0;

function quizStart() {
    // just to keep them different im going to call the prompt variables user + question number
    let user1 = prompt("known as the creature gollum during the first movie, when known as smeagol was he a hobbit");
    user1=user1.toLowerCase();
    // using if statements to check answers
    if(answer1==user1){
        score++
        alert("correct")
        console.log("correct")
    }
    else {
        alert("incorrect")
        console.log("incorrect")
    };
    console.log(score);
    alert("He was described as being 'not unlike a hobbit once', his species is similar but not the same");
    
    let user2 = prompt("who directe the lord of the rings movies - Percy Jackson or Peter Jackson");
    user2=user2.toLowerCase();

    if(answer2==user2){
        score++
        alert("correct")
        console.log("correct")
    }
    else {
        alert("incorrect")
        console.log("incorrect")
    };
    console.log(score);
    alert("Percy Jackson is a character from a young adult novel of the same name");

    let user3 = prompt("How many memebers were there in the original fellowship when they leave Rivendell(type the number, dont spell it out");
    user3=Number(user3);

    if(answer3==user3){
        score++
        alert("correct")
        console.log("correct")
    }
    else{
        alert("incorrect")
        console.log("incorrect")
    };
    console.log(score);

    let user4 = prompt("Bilbo gives frodo a sword and mithril armour when they are in Rivendell. What is the name of the sword?");
    user4=user4.toLowerCase();

    if(answer4==user4){
        score++
        alert("correct")
        console.log("correct")
    }
    else{
        alert("incorrect")
        console.log("incorrect")
    };
    console.log(score);

    let user5 = prompt("Speaking of Frodo's sword, Elven swords have a special quality, glowing when near Orcs or Goblins what colour does it glow?");
    user5=user5.toLowerCase();

    if(answer5==user5){
        score++
        alert("correct")
        console.log("correct")
    }
    else{
        alert("incorrect")
        console.log("incorrect")
    };
    console.log(score);

    let user6 = prompt("The Elven city of Rivendell is where the fellowship meet for the first time, but the Elf-lord Elrond calls it a different name what does Elrond call the city?");
    user6=user6.toLowerCase();

    if(answer6==user6){
        score++
        alert("correct")
        console.log("correct")
    }
    else{
        alert("incorrect")
        console.log("incorrect")
    };
    console.log(score);
    // i want to display the score out of 6
    alert("Your score is " + score + "/6")
}


