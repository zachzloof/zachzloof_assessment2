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
      firstName: DOM.createFirstNameInput.value,
      lastName: DOM.createLastNameInput.value,
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
            for (let champInfo of res.data) {
                addChamp(champInfo);}
        } else {
            addChamp(res.data);
        }}).catch((err) => {
        console.log(err);
      })
  }

  const readById = () => {
    let id = DOM.readByIdInput.value;
    let childElement = DOM.output;
    axios.get(`http://localhost:8080/get/` + id).then((res) => {
      console.log(res);
      childElement.innerHTML = "";
      addChamp(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }

  const readByFirstName = () => {
    let firstName = DOM.readByFirstNameInput.value;
    let childElement = DOM.output;
    axios.get(`http://localhost:8080/getByFName/` + firstName).then((res) => {
      console.log(res);
      childElement.innerHTML = "";
      for (let champInfo of res.data) {
        addChamp(champInfo);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const readByLastName = () => {
    let lastName = DOM.readByLastNameInput.value;
    let childElement = DOM.output;
    axios.get(`http://localhost:8080/getByLName/` + lastName).then((res) => {
      console.log(res);
      childElement.innerHTML = "";
      for (let champInfo of res.data) {
        addChamp(champInfo);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const readByDefences = () => {
    let defences = DOM.readByDefencesInput.value;
    let childElement = DOM.output;
    axios.get(`http://localhost:8080/getByDefences/` + defences).then((res) => {
      console.log(res);
      childElement.innerHTML = "";
      for (let champInfo of res.data) {
        addChamp(champInfo);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const readByDivision = () => {
    let division = DOM.readByDivisionInput.value;
    let childElement = DOM.output;
    axios.get(`http://localhost:8080/getByDivision/` + division).then((res) => {
      console.log(res);
      childElement.innerHTML = "";
      for (let champInfo of res.data) {
        addChamp(champInfo);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  const updateChamp = () => {
    let id = DOM.updateIdInput.value
    axios.put(`/replace/` + id, {
      firstName: DOM.updateFirstNameInput.value,
      lastName: DOM.updateLastNameInput.value,
      age: DOM.updateAgeInput.value,
      wins: DOM.updateWinsInput.value,
      losses: DOM.updateLossesInput.value,
      defences: DOM.updateDefencesInput.value,
      bonuses: DOM.updateBonusesInput.value,
      division: DOM.updateDivisionInput.value
    }).then((res) => {
      console.log(res);
      refresh()
    }).catch((err) => {
      console.log(err);
    });
  }

  const deleteChamp = () => {
    let id = DOM.deleteIdInput.value;
    axios.delete(`/remove/` + id)
      .then((res) => {
        console.log(res);
        refresh();
      }).catch((err) => {
        console.log(err);
      });
  }

  const darkMode = () => {
    let body = document.querySelector(`body`); //CHILD AND PARENT FOR BUTTONS AND INPUTS
    let html = document.querySelector(`html`); //MAIN PARENT
    let buttons = document.querySelectorAll(`button`);
    let inputs = document.querySelectorAll(`input`);
    body.style.backgroundColor = `#1C1C1C`;
    body.style.color = `darkgray`;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = `#1C1C1C`;
      buttons[i].style.color = `darkgray`;
    }
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.backgroundColor = `darkgray`;
    }
    // child2[9].style.backgroundColor = `darkgray`;
    html.appendChild(body); 
    body.appendChild(buttons); // FOR THESE TWO THE BODY IS NOW THE PARENT
    body.appendChild(inputs);
  }
  
  DOM.createButton.onclick = () => createChamp();
  DOM.readAllButton.onclick = () => refresh();
  DOM.readByIdButton.onclick = () => readById();
  DOM.readByDivisionButton.onclick = () => readByDivision();
  DOM.readByFirstNameButton.onclick = () => readByFirstName();
  DOM.readByLastNameButton.onclick = () => readByLastName();
  DOM.readByDefencesButton.onclick = () => readByDefences();
  DOM.updateButton.onclick = () => updateChamp();
  DOM.deleteButton.onclick = () => deleteChamp();
  DOM.darkModeButton.onclick = () => darkMode();