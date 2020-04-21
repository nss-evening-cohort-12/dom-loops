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

const init = () => {
  colorLoop();
}

init();
