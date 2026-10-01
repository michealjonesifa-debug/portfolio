// Micheal Jones sept.15, 2026 Lab 20 Haunted Mansion 

// decomp
// 1. Get the user's name so messages can be personalized.
// 2. Set up variables to track whether the user has found the key and code.
// 3. Set up the three buttons and their event listeners.
// 4. Create the exit-door behaviour, which checks whether the user has the key and code before allowing them to leave.
// 5. Create the strange-door behaviour where the user can obtain the key.
// 6. Create the chest behaviour where the user can obtain the code.
// 7. Track the user's panic level and increase it after actions, eventually triggering the lose condition.

// PATTERN
// All three buttons will follow a similar event-listener structure.
// Finding the key and finding the code will follow a similar process: interact with something to obtain item to update its variable.
// Different actions can use the same pattern for increasing the panic level.
// The key and code can both be checked by the exit-door logic to determine whether the user can leave.

// variables needed for all functions are hasKey, hasCode, and panic which i want to have consequences if it cant be solved
// algorithms from here will be marked by numbers in the notes
// 1. define our outside variables
let hasKey = false;
let hasCode = false;
let panic = 0;


// 2.setup a prompt to get the user's name
let victim = prompt("fill in your name for a personlized experience");
console.log(victim);
// 3. I am going to setup my buttons first 
let exitDoor = document.getElementById("exit");
let strangeDoor = document.getElementById("lightSource");
let trunk = document.getElementById("chest");

// 4.setting up the event listeners to work when user clicks the button
exitDoor.addEventListener("click", tryExitDoor);
strangeDoor.addEventListener("click", tryForKey);
trunk.addEventListener("click", tryForCode);

// 5.making the tryExitDoor function that will run when the user clicks on the rounded door.
function tryExitDoor() {
    // I want every function to start with a panic action 
    // to ensure that once panic counter gets to high the user has to reset the page so i put a return to stop the function
    // i want some sound playing on some of the functions
    let exitSound = new Audio("./sound/door-creaking.mp3");
    exitSound.play();
    panic++;
    if(panic>=10){
        alert("you hear the sound of the strange door opening quickly you try to get the door open panicked and fumbling, when a heavy hand wraps around you ankle pulling you into the darkness never heard from again (you will have to refresh the page to try again)");
        return;
    };
    // now i want the function to check if the user has what they need to escape
    // i realized you can lose by exiting a bunch so i added panic-- to fix that
    if(hasKey && hasCode){
        alert("as you approach the door you hear the strange door opening slowly\nyou feel your heartrate go up, then a scream.\n'"+ victim + "!' you panic hearing that it knows your name, fumbling you manage to unlock the door and you say the code.\nThe door opens but you can hear something moving up the stairs.\nyou slam it behind you and relock it, the door shudders as something heavy hits it, but it doesn't matter you escaped");
        panic--
    }
    else if(hasKey){
        alert("'Where would I even put a code'\nyou think to yourself as you walk up the stairs\nYou put the key into the lock, the handle turns but it feels like something heavy is holding it shut\n '" + victim + " I SAID YOU NEED THE CODE' \nmuch louder than its whispers have been, so you go back down the stairs to get the code");
    }
    else if(hasCode){
        alert("you walk up the stairs cautiously, you couldn't get the key but who knows. \nyou say the code, then try the handle still locked but honestly what did you expect");
    }
    // i want there to be extra consequences for pounding on the door uselessly
    else{
        alert("you walk up the stairs, more annoyed than anything and pound on the door\n'Come on guys this isn't funny unlock the door' you say grumpily nothing happens\nso you head back down the stairs");
        panic++;
    };
    // I want the counter in the html to go up
    let displayDiv = document.getElementById("panic-counter");

    displayDiv.textContent = panic;
    console.log(panic);
};

// 6.Making the strange door function that goes when the user clicks on the rectanle door
// I need an answer variable for the riddle
let riddleAnswer = "shadow";

function tryForKey(){
    // every function starts with giving one panic and checking panic
    let doorSound = new Audio("./sound/lightning.mp3");
    doorSound.play();
    panic++;
    if (panic>=10){
        alert("'This place is so creepy'\nYou think to yourself, you stare at the riddle.\n your heart is beating so fast as you hear scraping behind you.\n'fwoosh' the lantern goes out\n'Too slow " + victim + "' all you can do is scream.\n you end up in the news as a missing person, no evidence of where you went is ever found\n(You will have to refresh the page to try again");
        return;
    };
    // I want the riddle to show only if they dont have the key, with a panic penalty for each mistake
    if(!hasKey){
        alert("you approach the door again still locked.\nYou notice something out of the corner of your eye.\nYou swear it wasnt there before but beside the door is a riddle written in blood");
        let userAnswer = prompt("I follow you when there is light\nbut disappear in the darkest night\nI copy your shape but make no sound").toLowerCase();
        if(userAnswer===riddleAnswer){
            // if the user gets it right i want to give them the key and wrong = panic
            alert("you say the answer out loud, not really sure why you even cared about the riddle.\nYou hear a soft click, but it can't be.\nThe door opens, its a closet and on the shelf right in front is a key.");
            hasKey=true;
            panic--;
        }
        else{
            // I am using the same variable because it wont be useful wrong anyway
            panic++;
            alert("you can't help feel anxious when nothing happens\nWhen you look back at the riddle its different, but how?");
            userAnswer = prompt("Born from light, yet made from dark,\nI mimic your form but leave no mark.\nI grow and shrink, yet never age,\nand flee when darkness takes the stage.").toLowerCase();
            if(userAnswer===riddleAnswer){
                alert("you say the answer out loud, not really sure why you even cared about the riddle.\nYou hear a soft click, but it can't be.\nThe door opens, its a closet and on the shelf right in front is a key.");
                hasKey=true;
                panic--;
            }
            else{
                panic++;
                alert("nothing happens when you say it out loud\n you can feel your heartrate going up and decide to try again later");
            };
        };
    }
    // we dont want to punish for being a little stuck so just the one panic for starting the function
    else{
        alert("you walk over to the open closet.\nIt's still empty so you walk away");
    };
    let displayDiv = document.getElementById("panic-counter");

    displayDiv.textContent = panic;
    console.log(hasKey, panic);
};

// 7. the last function for the chest containing the code
// We need to define another variable for the answer to the riddle to get the code
let numRiddle = 7;

function tryForCode(){
    let chestSound = new Audio("./sound/wind-howling.mp3");
    chestSound.play();
    panic++;
    if(panic>=10){
        alert("As you step closer to the trunk\n'THUMP' the lid shakes, you stand frozen in fear\n'" + victim + "' It sounded like it came from the chest\nstill frozen in fear the lid flys open\nTwo large hands drag you into the chest and you are never heard from again");
        return;
    };
    // I only want to prompt the riddle if the user doesnt have the code
    if(!hasCode){
        alert("there's a small piece of chalk beside it is written:\n5 4 1 _\n with a riddle written beneath\n you're not sure how writing on the floor is going to help but nothing else in here made sense");
        let numAnswer = Number(prompt("I am an odd number\n but take away one letter and I become even"));
        if(numAnswer===numRiddle){
            alert("You write out the number,\na second later you hear a soft click\n'how' you can't help but ask out loud.\nNot fully believing it will work you push the chest open\ninside is small piece of paper that says:\n'Hello " + victim + "'\ncreepy but i guess it's the code");
            hasCode = true
            panic--;
        }
        else{
            alert("nothing happens right away\nyou look at the chest and back at the ground\nthe number you wrote is gone weird");
            panic++;
        };
    }
    else{
        alert("you walk over to the open chest not sure why\n you kick the dirt nearby a little not sure what to do next");
    };
    let displayDiv = document.getElementById("panic-counter");

    displayDiv.textContent = panic;
    console.log(hasCode,panic)
}