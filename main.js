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

const assignments = [
  {
    title: 'product cards',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
  },
  {
    title: 'product cards2',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
  },
  {
    title: 'product cards3',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
  },
  {
    title: 'product cards4',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
  },
  {
    title: 'product cards5',
    dueDate: '03/05/2019',
    topic: 'HTML/CSS',
    notes: 'Use flexbox',
  }
];

const buildAssignmentCards = (assignmentCollection) => {
  let domString = '';
  for (let j = 0; j < assignmentCollection.length; j++) {
    domString += `<div class="assignment">`
    domString += `<div class="assignment-title">${assignmentCollection[j].title}</div>`;
    domString += `<strong>Due Date: ${assignmentCollection[j].dueDate}</strong>`
    domString += `<div>Topic: ${assignmentCollection[j].topic}</div>`
    domString += `<div>Notes: ${assignmentCollection[j].notes}</div>`
    domString += `</div>`
  }

  printToDom('#assignments', domString)
};

const init = () => {
  buildDinoCards(dinos);
  buildAssignmentCards(assignments);
}

init();

// exercise 2:
// create an assignments array, which has several assignment objects in it
// assignment should have: title, dueDate, topic, notes
// loop over assignments array, and create 'cards' for each assignment
// bonus points for using printToDom to print them to the dom
// hint: create a div for the assignment cards to go to
