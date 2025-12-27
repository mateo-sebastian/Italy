const imagenes = document.querySelectorAll(".galeria img");
const modal = document.getElementById("modal");
const texto = document.getElementById("texto");

let escribiendo = false;

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    if (escribiendo) return;

    modal.classList.remove("oculto");
    escribirTexto(img.dataset.frase);

    if (navigator.vibrate) navigator.vibrate(25);
  });
});

modal.addEventListener("click", () => {
  modal.classList.add("oculto");
  texto.textContent = "";
});

/* EFECTO ESCRITURA */
function escribirTexto(frase) {
  escribiendo = true;
  texto.textContent = "";
  let i = 0;

  const intervalo = setInterval(() => {
    texto.textContent += frase.charAt(i);
    i++;

    if (i >= frase.length) {
      clearInterval(intervalo);
      escribiendo = false;
    }
  }, 45);
}
