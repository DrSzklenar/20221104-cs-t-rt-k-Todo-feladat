theList = document.getElementById('theList');
ptag = document.getElementById('ptag');

let emty = "";



let tempelement;

let listOfElements = [];

let index = 1;

function addToList(inputText) {
    if (inputText != "") {
        listOfElements.push(inputText);
        theList.innerHTML += `<div class="listElement" onclick="select(this)"><p>${index}. ${inputText}</p> <button onclick="deleteItem(this.parentElement   )">Törlés</button></div>`;
        console.log(inputText);
        ptag.innerText = "";
        index++;
    }
    else
    {
        ptag.innerText = "Üres a Text meződ hapsikám mit viszel fel?";
        console.log("ures"); 
        
    }
}

function deleteItem(parnet)
{
    parnet.remove();
    for (let i = 0; i < listOfElements.length; i++) {
        console.log(`${listOfElements[i]} - ${i}`);
        
    }

    console.log(parnet +"parnet");

}

function moveBottom() {
    for (let i = 0; i < listOfElements.length; i++) {
        console.log(`${listOfElements[i]} - ${i}`);
        
    }
    tempelement
}



function select(element) {


    element.classList.toggle("selected");
    tempelement = element;
}