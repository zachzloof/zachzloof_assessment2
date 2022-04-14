'use strict'

import * as DOM from './dom.js';

let addChamp = champ => {
    let childElement = document.createElement(`li`);
    childElement.id = champ.id;
    childElement.innerHTML = `${JSON.stringify(champ)}`;
    let parentElement = DOM.output;
    parentElement.appendChild(childElement);
}

const createChamp = () => {
    axios.post(`http://localhost:8080/create`, {
      firstName: DOM.createFNameInput.value,
      lastName: DOM.createLNameInput.value,
      age: DOM.createAgeInput.value,
      wins: DOM.createWinsInput.value,
      losses: DOM.createLossesInput.value,
      defences: DOM.createDefencesInput.value,
      bonuses: DOM.createBonusesInput.value,
      division: DOM.createDivisionInput.value
    }).then((res) => {
        console.log(res); // SO I CAN SEE IF IT IS GETTING A RESPONSE BUT NOT GOING ONTO THE INDEX
        refresh(); //CALLS REFRESH WHICH SHOWS CHANGES TO THE USER
      }).catch((err) => {
        console.log(err);
      });
  }

  const refresh = () => {
      DOM.output.innerHTML = '';
      
      axios.get(`http://localhost:8080/getAll`).then((res) => {
        console.log(res);
        if (Array.isArray(res.data)) {
            for (let champ of res.data) {
                addChamp(champ);}
        } else {
            addChamp(res.data);
        }}).catch((err) => {
        console.log(err);
      })
  }

  DOM.createButton.onclick = () => createChamp();
  DOM.readAllButton.onclick = () => refresh();