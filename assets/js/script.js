const ele = document.getElementById("ele1");

function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

ele.addEventListener("click", () => {
  pintar(ele, "yellow");
});
