function abrirImagem(img) {
  document.getElementById("modalImagem").style.display = "block";
  document.getElementById("imgAmpliada").src = img.src;
}

function fecharImagem() {
  document.getElementById("modalImagem").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("modalImagem");
  if (e.target === modal) fecharImagem();
}
