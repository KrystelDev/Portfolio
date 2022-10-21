function mover_logo() {
  elemento = document.getElementById("logo");
  elemento.style.alignSelf == "end"
    ? (elemento.style.alignSelf = "start")
    : (elemento.style.alignSelf = "end");
  let timer = setInterval(function () {
    if (timePassed > 2000) clearInterval(timer);
  }, 20);
}
