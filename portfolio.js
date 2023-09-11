//listar de botton indicando conteudo no header
const bottonHome = document.getElementById("buttonHome");
const bottonSobre = document.getElementById("buttonSobre");
const bottonProjetos = document.getElementById("buttonProjetos");
const bottonContatos = document.getElementById("buttonContatos");

bottonHome.addEventListener("click", function (){
  window.scroll(0, 0);
  
})

bottonSobre.addEventListener("click", function(){
  window.scroll(0, 400)
})

bottonProjetos.addEventListener("click", function(){
  window.scroll(0, 740)
})

bottonContatos.addEventListener("click", function(){
  window.scroll(0, 1300)
})
//Escrevendo
function texto(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 80 * i);
  });
}
const titulo = document.getElementById("titulo");
texto(titulo);

//button voltar ao topo

const voltarTopo = document.getElementById("arrow");
voltarTopo.addEventListener("click", function () {
  window.scroll(0, 0);
});
