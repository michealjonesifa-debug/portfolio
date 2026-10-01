// Micheal Jones Sept.10 Lab 19 Space quiz

// i want the quiz to show after the user clicks the button

function startQuiz() {
    // Want the score to start at zero so i can play two different messages if they pass or fail
    let score = 0;
    let answer1 = "mars";
    let answer2 = "ganymede";
    let bonus1 = "auroras";
    let answer3 = "space debris"
    let answer4 = "event horizon"
    // answer 5 is a boolean and i didnt want to confuse myself
    let answer6 = "orion arm"
    alert("i hope you are ready cadet, there's no going back now");

    let user1 = prompt("Mission 1. You spacecraft has detected a mysterious red planet. which planet are you approaching?");
    // i want the answer to be right wheter they write it in uppercase or lower case
    user1 = user1.toLowerCase();
    
    if(user1 == answer1) {
        score++
        alert("Good job cadet");
    }
    else {
        alert("Not this time cadet the answer is Mars");
    }
    // i want to log the core while im debugging to make sure its working right, im leaving it in when i hand it in but will probably grey it out if i use this in portfolio
    console.log(score)
    
    let user2 = prompt("Mission 2. Upon nearing Jupiter HQ asks you find the largest moon to test its gravitional pull compared to the giant planet, which moon are you going to? (Europa, Cyllene, IO, Ganymede)");
    user2 = user2.toLowerCase();
    
    if(user2 == answer2) {
        score ++
        alert("You better not be cheating");
    }
    else {
        alert("Hit the textbooks maggot");
    }
    console.log(score)

    let user3 = prompt("Mission2 continued. As you approach the moon you see glowing lights in the distance. What are you seeing?");
    user3 = user3.toLowerCase();
    // I wanted a bonus to see if i could get an else if working
    if(user3 == bonus1) {
        score += 2
        alert("Don't get cocky")
    }
    else if(user3 == answer3) {
        score++
        alert("Halfway there")
    }
    else {
        alert("you're lucky this is a test")
    };
    console.log(score)

    alert("fun fact: this is the only moon large enough to have its own magnetic poles which is why it can have Auroras")

    let user4 = prompt("Emergency Alert. You wake to a emergency lights, it seems while exploring outside of our galaxy you have encountered a black hole. Once you pass a certain point you cannot excape what is that boundry called?");
    user4 = user4.toLowerCase()
    if(user4 == answer4) {
        score++
        alert("Keep up the good work cadet")
    }
    else {
        alert("It won't just be you out there maggot")
    };
    console.log(score)

    let user5 = confirm("Mission3. After narrowly escaping the black hole your navigation systems seem to be funcioning incorrectly, you enter what you think is the milky way galaxy. you see a total of 7 planets are you in the right galaxy?(confirm = true and cancel=false)")
    if (user5) {
        alert("that wasnt even a trick question maggot")
    }
    else {
        score++
        alert("that was an easy one")
    };
    console.log(score);
    let user6 = prompt("Final Mission. You enter the Milky Way galaxy finally, with navigation still not working where would you head towards?");
    user6 = user6.toLowerCase();

    if(user6 == answer6) {
        score++
        alert("Nice one")
    }
    else {
        alert("I won't be asking you for directions anytime soon maggot")
    };

    console.log(score);
    if (score >= 4 && score < 7){   
    // this means the user passed
        let passMessage = "Good work Maggot, not quite perfect but we will get you there " + score + "/7"
    
        let displayDiv = document.getElementById("results");

        displayDiv.textContent = passMessage;
    }
    else if (score === 7) {
        let perfectMessage = "Perfect score Maggot, maybe next year I'll let you teach " + score + "/7"

        let displayDiv = document.getElementById("results");

        displayDiv.textContent = perfectMessage;
    }
    else {
        let failMessage = "I wouldnt even let you clean toilets up there Maggot " + score + "/7"

        let displayDiv = document.getElementById("results");

        displayDiv.textContent = failMessage;
    };
}