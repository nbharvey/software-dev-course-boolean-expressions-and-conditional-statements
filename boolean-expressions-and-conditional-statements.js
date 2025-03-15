/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch && hasSword) { //user can proceed through the mountains only if they type 'mountains' and they have a torch and a sword
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch || !hasSword) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap && hasCompass) {//User can proceed to village by choosing to type 'village', but hasMap && hasCompass should not execute, even though user has a compass. They do not have a map.
  console.log("You find your way to the village");
} else {
  console.log("You get lost and wander aimlessly.");
}

setTimeout(() => {
  console.log("You have made it safely, but you still must reach your final destination. A forked road stands before you. On one side there is a dragon, the other a cave troll.");
  const choice2 = readline.question("Do you choose to fight the 'dragon' or 'troll'?")

if (choice2 === "dragon" && hasSword) {
  console.log("You defeat the dragon and continue to your final destination!")
} else if (choice2 === "dragon" && !hasSword) {
  console.log("The dragon won the fight, you retreat back to the mountains.");
} else if (choice2 === "troll" && hasTorch) {
  console.log("You defeat the cave troll and continue to your final destination!")
} else {
  console.log("You did not defeat the beast. You do not reach your final destination.")
}
}, 3000);
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

//add a sword to fight dangerous creatures in the mountain
//add a compass to navigate to the village
//user safely navigates out of the dark mountains, but a dragon stands in their way and they must defeat the dragon. they must have a sword to meet this requirement and move forward.

/* ORIGINAL CODE
const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}
*/