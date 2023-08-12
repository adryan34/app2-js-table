function createRow(carte) {
    let text = null;
    text = `<td>${carte.titlu}</td>
            <td>${carte.autor}</td>
            <td>${carte.an}</td>`
    return text;
}

function populeazaTabel() {
    let table = document.querySelector(".carti-container");
    table.innerHTML = "";
    for (let i = 0; i < librarie.length; i++) {
        table.innerHTML += createRow(librarie[i]);
    }
}

let inputCarte = document.querySelector("#nume");
let inputAutor = document.querySelector("#autor");
let inputAn = document.querySelector("#an");
let buttonAdd = document.querySelector(".add");



//to do titlu sa fie 1-20 char, sa inceapa cu litera mare, sa nu contina duplicate

function validareTitlu(titlu) {
    if (titlu.length <= 0 || titlu.length > 20) {
        return {
            msg: "lungimea titlului nu este intre 1 si 20 de caractere",
            flag: false
        };
    }

    if (titlu[0].toUpperCase() != titlu[0]) {
        return {
            msg: "Titlu nu incepe cu litera mare",
            flag: false
        };
    }
    if (functieGasesteDuplicat(titlu) !== null) {
        return {
            msg: "titlu este un duplicat",
            flag: false
        };
    }
    return {
        msg:   "Titlu este valid",
        flag: true
    }
    }

function functieGasesteDuplicat(titlu) {
    for(let i = 0; i < librarie.length; i++) {
        if(titlu == librarie[i]){
            return librarie[i];
        }
        return null;
    }
}
