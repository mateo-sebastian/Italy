// ====== EFECTO ESCRIBIR TITULO ======
const textoTitulo = "Para ti, Italy ✨";
const titulo = document.getElementById("titulo");
let i = 0;

function escribirTitulo() {
  if (i < textoTitulo.length) {
    titulo.textContent += textoTitulo.charAt(i);
    i++;
    setTimeout(escribirTitulo, 120);
  }
}
escribirTitulo();

// ====== MODAL CON FRASE LETRA POR LETRA ======
const fotos = document.querySelectorAll(".galeria img");
const modal = document.getElementById("modal");
const texto = document.getElementById("texto");
const cerrar = document.querySelector(".cerrar");

let intervalo;

fotos.forEach(foto => {
  foto.addEventListener("click", () => {
    modal.classList.remove("oculto");
    texto.textContent = "";

    const frase = foto.dataset.frase;
    let j = 0;

    clearInterval(intervalo);
    intervalo = setInterval(() => {
      if (j < frase.length) {
        texto.textContent += frase.charAt(j);
        j++;
      } else {
        clearInterval(intervalo);
      }
    }, 70); // velocidad de escritura
  });
});

cerrar.addEventListener("click", () => {
  modal.classList.add("oculto");
  clearInterval(intervalo);
});
