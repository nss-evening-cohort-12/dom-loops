const colors = ['red', 'orange', 'white', 'blue', 'gold', 'yellow', 'violet'];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// console.log(colors[5]);

const colorLoop = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
    domString += `<h2>${colors[i]}</h2>`;
  }
  // return domString;
  console.log(domString);
}

// Exercise 1:
// create an array of instructor objects, each with firstName and lastName properties (keys/values)
// create a function that will loop over the instructors array
// console.log() full instructor names i.e. "Luke Lancaster", "Matt Gill", etc etc etc etc
// call the function in init()
const instructors = [
  { firstName: 'Luke', lastName: 'Lancaster' },
  { firstName: 'Michael', lastName: 'Clark' },
  { firstName: 'Matt', lastName: 'Gill' },
];

// Exercise 1.2:
// instead of console.log-ing out the names
// build up a domString of <h2>INSTRUCTOR NAME HERE</h2>
// log out the final domString after the loop

const instructorLoop = () => {
  let domString = '';
  for (let i = 0; i < instructors.length; i++) {
    domString += `<h2>${instructors[i].firstName} ${instructors[i].lastName}</h2>`;
  }
  console.log(domString);
}


const init = () => {
  colorLoop();
  instructorLoop();
}

init();
