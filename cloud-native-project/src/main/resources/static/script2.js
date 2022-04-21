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
                    childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                    let parentElement = DOM.flyweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "flyweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `${JSON.stringify(res.data)}`;
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
                    childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                    let parentElement = DOM.bantamweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "bantamweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `${JSON.stringify(res.data)}`;
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
                    childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                    let parentElement = DOM.featherweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "featherweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `${JSON.stringify(res.data)}`;
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
                    childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                    let parentElement = DOM.lightweightList;
                    parentElement.appendChild(childElement);
                }
            }
        } else {
            if (res.data.division == "lightweight") {
                let childElement = document.createElement(`li`);
                childElement.id = (res.data).id;
                childElement.innerHTML = `${JSON.stringify(res.data)}`;
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
                        childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                        let parentElement = DOM.welterweightList;
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "welterweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `${JSON.stringify(res.data)}`;
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
                        childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                        let parentElement = DOM.middleweightList;
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "middleweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `${JSON.stringify(res.data)}`;
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
                        childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                        let parentElement = DOM.lightHeavyweightList;
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "light-heavyweight" || res.data.division == "lightheavyweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `${JSON.stringify(res.data)}`;
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
                        childElement.innerHTML = `${JSON.stringify((res.data)[i])}`;
                        let parentElement = DOM.heavyweightList
                        parentElement.appendChild(childElement);
                    }
                }
            } else {
                if (res.data.division == "heavyweight") {
                    let childElement = document.createElement(`li`);
                    childElement.id = (res.data).id;
                    childElement.innerHTML = `${JSON.stringify(res.data)}`;
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