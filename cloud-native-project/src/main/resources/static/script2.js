'use strict'

import * as DOM from './dom.js';

let refreshFlyweight = () => {
    DOM.flyweightList.innerHTML = '';
    // let flyweightArray = []
    axios.get(`http://localhost:8080/getAll`).then((res) => {
        console.log(res)
        if (Array.isArray(res.data)) {
            for (let i = 0; i < (res.data).length; i++) {
                if ((res.data[i]).division == "flyweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = ((res.data)[i]).id;
                    childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName} &nbsp Last name: ${((res.data)[i]).lastName}
                     &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins} &nbsp losses: ${((res.data)[i]).losses}
                      &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses} &nbsp Division: ${((res.data)[i]).division} <br>`;
                    let parentElement = DOM.flyweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "flyweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName} &nbsp Last name: ${(res.data).lastName}
                 &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins} &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences}
                  &nbsp Bonuses: ${(res.data).bonuses} &nbsp Division: ${(res.data).division} <br>`;
                let parentElement = DOM.flyweightList;
                parentElement.appendChild(childElement);
            }
        }
    }).catch((err) => {
        console.log(err);
    })
}

let refreshBantamweight = () => {
    DOM.bantamweightList.innerHTML = '';
    axios.get(`http://localhost:8080/getAll`).then((res) => {
        console.log(res)
        if (Array.isArray(res.data)) {
            for (let i = 0; i < (res.data).length; i++) {
                if ((res.data[i]).division == "bantamweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = ((res.data)[i]).id;
                    childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName}
                     &nbsp Last name: ${((res.data)[i]).lastName} &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins}
                      &nbsp losses: ${((res.data)[i]).losses} &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses}
                       &nbsp Division: ${((res.data)[i]).division} <br>`;
                    let parentElement = DOM.bantamweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "bantamweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName} &nbsp Last name: ${(res.data).lastName}
                 &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins} &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences}
                  &nbsp Bonuses: ${(res.data).bonuses} &nbsp Division: ${(res.data).division} <br>`;
                let parentElement = DOM.bantamweightList;
                parentElement.appendChild(childElement);
            }
        }
    }).catch((err) => {
        console.log(err);
    })
}

let refreshFeatherweight = () => {
    DOM.featherweightList.innerHTML = '';
    axios.get(`http://localhost:8080/getAll`).then((res) => {
        console.log(res)
        if (Array.isArray(res.data)) {
            for (let i = 0; i < (res.data).length; i++) {
                if ((res.data[i]).division == "featherweight") {
                    // addChamp((res.data)[i]);
                    let childElement = document.createElement(`li`);
                    childElement.id = ((res.data)[i]).id;
                    childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName}
                     &nbsp Last name: ${((res.data)[i]).lastName} &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins}
                      &nbsp losses: ${((res.data)[i]).losses} &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses}
                       &nbsp Division: ${((res.data)[i]).division} <br>`;
                    let parentElement = DOM.featherweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "featherweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName}
                 &nbsp Last name: ${(res.data).lastName} &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins}
                  &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences} &nbsp Bonuses: ${(res.data).bonuses}
                   &nbsp Division: ${(res.data).division} <br>`;
                let parentElement = DOM.feathweightList;
                parentElement.appendChild(childElement);
            }
        }
    }).catch((err) => {
        console.log(err);
    })
}

let refreshLightweight = () => {
    DOM.lightweightList.innerHTML = '';
    axios.get(`http://localhost:8080/getAll`).then((res) => {
        console.log(res)
        if (Array.isArray(res.data)) {
            for (let i = 0; i < (res.data).length; i++) {
                if ((res.data[i]).division == "lightweight") {
                    // addChamp((res.data)[i]);
                    let childElement = document.createElement(`li`);
                    childElement.id = ((res.data)[i]).id;
                    childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName}
                     &nbsp Last name: ${((res.data)[i]).lastName} &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins}
                      &nbsp losses: ${((res.data)[i]).losses} &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses}
                       &nbsp Division: ${((res.data)[i]).division} <br>`;
                    let parentElement = DOM.lightweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "lightweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName} &nbsp Last name: ${(res.data).lastName}
                 &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins} &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences}
                  &nbsp Bonuses: ${(res.data).bonuses} &nbsp Division: ${(res.data).division} <br>`;
                let parentElement = DOM.lightweightList;
                parentElement.appendChild(childElement);
            }
        }
    }).catch((err) => {
        console.log(err);
    })
}

let refreshWeltwerweight = () => {
    DOM.welterweightList.innerHTML = ''; +
        axios.get(`http://localhost:8080/getAll`).then((res) => {
            console.log(res)
            if (Array.isArray(res.data)) {
                for (let i = 0; i < (res.data).length; i++) {
                    if ((res.data[i]).division == "welterweight") {
                        // addChamp((res.data)[i]);
                        let childElement = document.createElement(`li`);
                        childElement.id = ((res.data)[i]).id;
                        childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName} 
                        &nbsp Last name: ${((res.data)[i]).lastName} &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins}
                         &nbsp losses: ${((res.data)[i]).losses} &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses}
                          &nbsp Division: ${((res.data)[i]).division} <br>`;
                        let parentElement = DOM.welterweightList;
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "welterweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName} &nbsp Last name: ${(res.data).lastName}
                     &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins} &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences}
                      &nbsp Bonuses: ${(res.data).bonuses} &nbsp Division: ${(res.data).division} <br>`;
                    let parentElement = DOM.welterweightList;
                    parentElement.appendChild(childElement);
                }
            }
        }).catch((err) => {
            console.log(err);
        })
}

let refreshMiddleweight = () => {
    DOM.middleweightList.innerHTML = ''; +
        axios.get(`http://localhost:8080/getAll`).then((res) => {
            console.log(res)
            if (Array.isArray(res.data)) {
                for (let i = 0; i < (res.data).length; i++) {
                    if ((res.data[i]).division == "middleweight") {
                        // addChamp((res.data)[i]);
                        let childElement = document.createElement(`li`);
                        childElement.id = ((res.data)[i]).id;
                        childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName}
                         &nbsp Last name: ${((res.data)[i]).lastName} &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins}
                          &nbsp losses: ${((res.data)[i]).losses} &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses}
                           &nbsp Division: ${((res.data)[i]).division} <br>`;
                        let parentElement = DOM.middleweightList;
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "middleweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName}
                     &nbsp Last name: ${(res.data).lastName} &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins}
                      &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences} &nbsp Bonuses: ${(res.data).bonuses}
                       &nbsp Division: ${(res.data).division} <br>`;
                    let parentElement = DOM.middleweightList;
                    parentElement.appendChild(childElement);
                }
            }
        }).catch((err) => {
            console.log(err);
        })
}

let refreshLightHeavyweight = () => {
    DOM.lightHeavyweightList.innerHTML = ''; +
        axios.get(`http://localhost:8080/getAll`).then((res) => {
            console.log(res)
            if (Array.isArray(res.data)) {
                for (let i = 0; i < (res.data).length; i++) {
                    if ((res.data[i]).division == "light-heavyweight" || (res.data[i]).division == "lightheavyweight") {
                        // addChamp((res.data)[i]);
                        let childElement = document.createElement(`li`);
                        childElement.id = ((res.data)[i]).id;
                        childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName}
                         &nbsp Last name: ${((res.data)[i]).lastName} &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins}
                          &nbsp losses: ${((res.data)[i]).losses} &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses}
                           &nbsp Division: ${((res.data)[i]).division} <br>`;
                        let parentElement = DOM.lightHeavyweightList;
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "light-heavyweight" || res.data.division == "lightheavyweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName}
                     &nbsp Last name: ${(res.data).lastName} &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins}
                      &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences} &nbsp Bonuses: ${(res.data).bonuses} &nbsp Division: ${(res.data).division} <br>`;
                    let parentElement = DOM.lightHeavyweightList;
                    parentElement.appendChild(childElement);
                }
            }
        }).catch((err) => {
            console.log(err);
        })
}

let refreshHeavyweight = () => {
    DOM.heavyweightList.innerHTML = ''; +
        axios.get(`http://localhost:8080/getAll`).then((res) => {
            console.log(res)
            if (Array.isArray(res.data)) {
                for (let i = 0; i < (res.data).length; i++) {
                    if ((res.data[i]).division == "heavyweight") {
                        // addChamp((res.data)[i]);
                        let childElement = document.createElement(`li`);
                        childElement.id = ((res.data)[i]).id;
                        childElement.innerHTML = `<b>ID: ${((res.data)[i]).id}</b> &nbsp First name: ${((res.data)[i]).firstName}
                         &nbsp Last name: ${((res.data)[i]).lastName} &nbsp age: ${((res.data)[i]).age} &nbsp Wins: ${((res.data)[i]).wins}
                          &nbsp losses: ${((res.data)[i]).losses} &nbsp Defences: ${((res.data)[i]).defences} &nbsp Bonuses: ${((res.data)[i]).bonuses}
                           &nbsp Division: ${((res.data)[i]).division} <br>`;
                        let parentElement = DOM.heavyweightList
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "heavyweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `<b>ID: ${(res.data).id}</b> &nbsp First name: ${(res.data).firstName}
                     &nbsp Last name: ${(res.data).lastName} &nbsp age: ${(res.data).age} &nbsp Wins: ${(res.data).wins}
                      &nbsp losses: ${(res.data).losses} &nbsp Defences: ${(res.data).defences} &nbsp Bonuses: ${(res.data).bonuses}
                       &nbsp Division: ${(res.data).division} <br>`;
                    let parentElement = DOM.heavyweightList;
                    parentElement.appendChild(childElement);
                }
            }
        }).catch((err) => {
            console.log(err);
        })
}

refreshFlyweight();
refreshBantamweight();
refreshFeatherweight();
refreshLightweight();
refreshWeltwerweight();
refreshMiddleweight();
refreshLightHeavyweight();
refreshHeavyweight();