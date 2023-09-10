let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let key = document.getElementById("key");
let key2 = document.getElementById("key2");
const nuevodiv = `
  <div 
    id="nuevokey"
    style="width: 200px; height: 200px; border: 1px solid black;">
  </div>
`;
var color;

const cambiandoColor = function (elemento) {
  elemento.style.backgroundColor = "black";
};

div1.addEventListener("click", () => {
  cambiandoColor(div1);
});

div2.addEventListener("click", () => {
  cambiandoColor(div2);
});

div3.addEventListener("click", () => {
  cambiandoColor(div3);
});

div4.addEventListener("click", () => {
  cambiandoColor(div4);
});

function creandoDiv(element) {
  element.innerHTML = nuevodiv;
  let nuevokey = document.getElementById("nuevokey");
  return nuevokey;
}

document.addEventListener("keydown", function (event) {
  if (event.key.toLocaleLowerCase() === "a") {
    color = "pink";
    key.style.backgroundColor = color;
  } else if (event.key.toLocaleLowerCase() === "s") {
    color = "orange";
    key.style.backgroundColor = color;
  } else if (event.key.toLocaleLowerCase() === "d") {
    color = "lightblue";
    key.style.backgroundColor = color;
  } else if (event.key.toLocaleLowerCase() === "q") {
    color = "purple";
    creandoDiv(key2);
    nuevokey.style.backgroundColor = color;
  } else if (event.key.toLocaleLowerCase() === "w") {
    color = "gray";
    creandoDiv(key2);
    nuevokey.style.backgroundColor = color;
  } else if (event.key.toLocaleLowerCase() === "e") {
    color = "brown";
    creandoDiv(key2);
    nuevokey.style.backgroundColor = color;
  }
});
