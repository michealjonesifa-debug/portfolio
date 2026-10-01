// micheal jones, Sept.28,2026, lab23

// decomp - task 1 - make a loop to check the shields modules and count how many are damaged
//          then display how many need repairs
//          task 2 - make a loop to find the first and last working engine modules
//          then display their positions
//          task 3 - make a loop to find the nearest working docking bay
//          then display which bay we can use
//          task 4 - make a loop to count the working modules to calculate fuel efficiency
//          then display the results in navigation
//          task 5 - make a loop to find all the broken modules and repair them
//          then display the updated array
//          task 6 - make a loop to go through the ship's path
//          then display each module's status in order
//          task 7 - make a loop to check if every module is working
//          if everything works tell the captain we can leave
//          otherwise give a warning about the broken systems

// pattern - all 7 tasks need arrays and loops to check the modules
//         - tasks 1 and 4 both count modules, just looking for different values
//         - tasks 2 and 3 both search arrays for working modules
//         - task 5 uses a loop and an if statement to change broken modules
//         - task 6 uses a loop to display every value in the array
//         - task 7 uses a loop and an if statement to check if anything is broken
//         - all tasks use 0 for broken modules and 1 for working modules
//         - the website uses the same display changes for each room

// not in the instructions but something i want for my page requires functions which i will define first
// since my functions are in a set order i am intializing an array called functions and one called buttons
let buttons = [
  "attack",
  "shields-display",
  "engine-display",
  "bridge-display",
  "comms-display",
  "nav-display",
  "operational",
];
let functions = [
  checkDamage,
  checkShields,
  checkEngines,
  checkFuel,
  repairComms,
  checkNavigation,
  finalSystemCheck,
];
for (let x = 0; x < buttons.length; x++) {
  document.getElementById(buttons[x]).addEventListener("click", functions[x]);
}
function checkDamage() {
  // abstraction task 1 variables - spaceModules = array holding the ships status
  //          damagedCount = counts how many modules are broken
  //          i = controls the loop
  // task 1 happens whem user clicks #attack and reveals #shield-damaged
  // algorithm task 1 - 1.intialize the spacemodules and the damagedCount
  let spaceModules = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];
  let damagedCount = 0;
  // make the loop to check the status of each module
  for (let i = 0; i < spaceModules.length; i++) {
    // 3.using i as the array number to check if which arrays are 0's
    if (spaceModules[i] == 0) {
      damagedCount++;
    }
  }
  // make a message for the console and to alert the user
  captainsMessage = `there are ${damagedCount} modules not working`;
  console.log(captainsMessage);
  alert(captainsMessage);
  //   we need to hide the normal sections and reveal the first damaged section
  // intialize normalShip array
  let normalShip = [
    "captain-normal",
    "shield-normal",
    "engine-normal",
    "comms-normal",
    "bridge-normal",
    "nav-normal",
  ];
  // set a loop to hide all these ids
  for (let a = 0; a < normalShip.length; a++) {
    document.getElementById(normalShip[a]).style.display = "none";
  }
  document.getElementById("captain-damaged").style.display = "block";
  document.getElementById("shield-damaged").style.display = "block";
}
function checkShields() {
  // abstraction task 2 variables - shieldModules = array holding the shields status
  //          firstModule = position of the first working module
  //          lastModule = position of the last working module
  //          i = controls the loop
  // task 2 happens when user clocks the shield-display button and reveals #engine-damaged

  // 1. intialize spaceModules array and firstModule and lastModule as -1 so that we can confirm we havent found the modules yet
  let shieldModules = [0, 1, 1, 0, 1, 0, 1, 0, 1, 1];
  let firstModule = -1;
  let lastModule = -1;
  // 2 setup the loop to check the array
  for (let i = 0; i < shieldModules.length; i++) {
    // 2. use an if statement to check for the first 1
    if (firstModule < 0 && shieldModules[i] == 1) {
      // 3. put the module as index, to mark its position in the array
      firstModule = i;
    }
    if (shieldModules[i] == 1) {
      // 4. just going the set the last module to change everytime to make it work in every array
      lastModule = i;
    }
  }
  // 5. make a message to be able to be added to the console
  shieldMessage = `the first working module is ${firstModule} and the last working module is ${lastModule}`;
  console.log(shieldMessage);
  alert(shieldMessage);
  // now we need to show engine-damaged
  document.getElementById("engine-damaged").style.display = "block";
}
function checkEngines() {
  // abstraction task 3 variables - engineStatus = array holding the engine status
  //          workingEngine = position of the first working engine
  //          i = controls the loop
  // task 3 happens when the user clicks engine-display and reveals #bridge-damaged
  // 1. intialize the engineStatus and workingEngine
  let engineStatus = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0];
  let workingEngine = -1;
  // 2. setup the for loop to check until the we find the engine
  for (let i = 0; i < engineStatus.length; i++) {
    // make an if statement to change the workingEngine when we find it
    if (engineStatus[i] == 1 && workingEngine < 0) {
      workingEngine = i;
    }
  }
  engineMessage = `the first working engine is ${workingEngine}.`;
  console.log(engineMessage);
  alert(engineMessage);
  // now we need to show the bridge
  document.getElementById("bridge-damaged").style.display = "block";
}
function checkFuel() {
  // abstraction task 4 variables - fuelSystem = array holding the module status
  //          fuelEfficiency = counts the working modules
  //          i = controls the loop
  // task 4 happens when user presses #bridge-display and reveals #comm-damaged
  // 1.intialize fuelSystem and fuelEfficiency
  let fuelSystem = [1, 0, 1, 1, 1, 0, 0, 1, 1];
  let fuelEfficiency = 0;
  // 2. make the loop count the 1's
  for (let i = 0; i < fuelSystem.length; i++) {
    // 3. make the fuelEfficiency go up when module is one
    if (fuelSystem[i] == 1) {
      fuelEfficiency++;
    }
  }
  // 4. make a variable to hold the efficiency for the message
  totalEfficiency = Math.round((fuelEfficiency / fuelSystem.length) * 100);
  bridgeMessage = `we are running at ${totalEfficiency} efficiency`;
  console.log(fuelEfficiency, bridgeMessage);
  alert(bridgeMessage);
  // now we need to display comms-damaged
  document.getElementById("comms-damaged").style.display = "block";
}
function repairComms() {
  // abstraction task 5 variables - commSwitches = array holding the broken and working modules
  //          i = controls the loop and lets us change the broken values
  // task 5 appears when user presses #comm-display and reveals #nav-damaged
  // 1.intialize the commSwitches array
  let commSwitches = [0, 1, 0, 1, 0, 0, 1];
  // 2.make the loop to move through the array
  for (let i = 0; i < commSwitches.length; i++) {
    // 3. use a if statment to check and change the 0's to 1'
    if (commSwitches[i] == 0) {
      commSwitches[i] = 1;
    }
  }
  // print the new all ones array
  console.log(commSwitches);
  // now we need to display nav-damaged
  document.getElementById("nav-damaged").style.display = "block";
}
function checkNavigation() {
  // abstraction task 6 variables - spaceshipPath = array holding the status of each module
  //          i = controls the loop and displays the modules in order
  // task 6 happens when the user presses #nav-display and reveals #operational
  // intialize spaceshipPath
  let spaceshipPath = [1, 0, 1, 1, 0, 1, 1, 0, 1, 0];

  // 2. make the loop to check which paths are good and which is bad
  for (let i = 0; i < spaceshipPath.length; i++) {
    if (spaceshipPath[i] == 1) {
      // i need the path number to be one more because a person would not call a path, path 0
      console.log("Path " + (i + 1) + " is safe");
    } else {
      console.log("Path " + (i + 1) + " is not safe");
    }
  }
  // now we need to reveal the button for the final function
  document.getElementById("operational").style.display = "block";
}
function finalSystemCheck() {
  // abstraction task 7 variables - systemStatus = array holding the final module status
  //          allWorking = boolean to check if all modules are operational
  //          i = controls the loop
  // task 7 goes when the user click #operational
  // 1.intialize systemStatus and allWorking =true, this will let us change it later if its not working
  let systemStatus = [1, 1, 1, 1, 1, 1, 0, 1];
  let allWorking = true;
  //2. set the for loop to check every function
  for (let i = 0; i < systemStatus.length; i++) {
    // set an if statement to check if the array has a 0
    if (systemStatus[i] == 0) {
      allWorking = false;
    }
  }
  // 4.intialize workingMessage and notWorkingMessage we need both so it still works with a different array
  let workingMessage = `All systems go!`;
  let notWorkingMessage = "Warning: System Malfunction";
  if (allWorking === true) {
    alert(
      workingMessage +
        " the message appears on the captains console, and you tell the crew to prepare for the journey home",
    );
    console.log(workingMessage);
  } else {
    alert(
      notWorkingMessage +
        " displays on the console, your crew must work to finish repairs before you can head home",
    );
    console.log(notWorkingMessage);
  }
}
