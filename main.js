const dinos = [
  {
    dinoType: 't-rex',
    name: 'Tommy',
    age: 100
  },
  {
    dinoType: 'stegosaurus',
    name: 'Steve',
    age: 10
  },
  {
    dinoType: 'velociraptor',
    name: 'Ian',
    age: 23
  },
  {
    dinoType: 'flyingguy',
    name: 'Ian',
    age: 23
  },
];

const printToDom = (selector, textToPrint) => {
  console.log('in printToDom', selector, textToPrint);
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildDinoCards = (dinoCollection) => {
  let domString = '';

  for (let i = 0; i < dinoCollection.length; i++) {
    domString += '<div class="dino">';
    domString += `<h3>${dinoCollection[i].name}</h3>`;
    domString += `<p>This dino is a ${dinoCollection[i].dinoType} and is ${dinoCollection[i].age} years old</p>`
    domString += '</div>';
  }

  printToDom('#dino-pen', domString);
}

const init = () => {
  buildDinoCards(dinos);
}

init();

// exercise 2:
// create an assignments array, which has several assignment objects in it
// assignment should have: title, dueDate, topic, notes
// loop over assignments array, and create 'cards' for each assignment
// bonus points for using printToDom to print them to the dom
// hint: create a div for the assignment cards to go to
