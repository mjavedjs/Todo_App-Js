let userInput = document.querySelector("#userInput");
let div = document.querySelector("#Array-output")
let globalArray = [];

function TodoApp() {
    globalArray.push(userInput.value);
    console.log(globalArray);// array output in array

    div.innerHTML = '';
    for (let i = 0; i < globalArray.length; i++) {

        div.innerHTML += `
            <li> ${globalArray[i]}

                <button class="edit-btn" onclick="delet(${i})">Delete</button>

                <button  class="edit-btn" onclick=" edit(${i})"> Edit </button>

            </li>
        `;
    }
    userInput.value = " "
}

function delet(i) {

    globalArray.splice(i, 1);

    div.innerHTML = "";

    for (let i = 0; i < globalArray.length; i++) {
        div.innerHTML += `<li> ${globalArray[i]}
            <button  lass="edit-btn" onclick="delet(${i})">Delete</button>

                <button class="edit-btn" onclick=" edit(${i})"> Edit </button>

            </li>`;
    }
}

function edit(i) {
    let newVlaue = prompt("Ente  a new value");
    globalArray[i] = newVlaue;
    div.innerHTML = ""
    for (let i = 0; i < globalArray.length; i++) {
        div.innerHTML += `<li> ${globalArray[i]}
            <button class="edit-btn" onclick="delet(${i})">Delete</button>

                <button class="edit-btn" onclick=" edit(${i})"> Edit </button>
 </li>`;
    }
}