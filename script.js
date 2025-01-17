/*
  Elaborar um programa para gerar uma tabela com os jogos de uma fase
eliminatória de um campeonato. O programa deve conter três funções (a
serem executadas no evento click de cada botão) para: 1) validar o
preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os
clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x
último, segundo x penúltimo e assim por diante. Exibir mensagem e não
listar a tabela de jogos, caso o número de clubes informados seja ímpar. A
Figura 6.14 ilustra a página gerada com a tabela de jogos.
*/

// obtém os elementos do HTML
const frm = document.querySelector("form");
const lista = document.getElementById("outLista");
const tabela = document.getElementById("outTabela");

// declaro array global
let clubes = [];

// evento de "click" do botão "Adicionar"
btAdicionar.addEventListener("click", (e) => {

  // evita o envio do form
  e.preventDefault();

  // obtém o valor do input clube
  const clube = frm.inClube.value.trim(); // .Trim() remove os espaços em branco extras do início e do final de uma string 

  // Verifica se o time já existe no array
  if (clubes.some(item => item.clube === clube)) {
    alert("Clube já cadastrado.");
    return;
  }  
 
  // Verifica se o input está vazio 
  if(clube === "") {
    alert("Informe o nome do clube!");
    frm.inClube.focus();
    return;
  }

  // Adiciona o clube ao array
  clubes.push({ clube });

  // Reseta o form
  frm.reset();

  // Foca no input clube
  frm.inClube.focus();
  
});
 
// evento de "click" do botão "Listar"
frm.btListar.addEventListener("click", () => {

 // Veridica se tem algum clube cadastrado
  if(clubes.length === 0) {
    window.alert("Nenhum clube foi cadastrado ainda.");
    return
  } else {
    // Pega os clubes e mostra na pag
    clubes.forEach((clube, index) => {
      const item = document.createElement("li")
       item.textContent = `${index + 1}. ${clube.clube}`
       lista.appendChild(item)
    })
  }
})

// Evento de click para o botão tabela 
frm.btTabela.addEventListener("click", () => {

  // Verifica se o número de clubes é par
  if(clubes.length % 2 !== 0) {
    alert("Número de clubes deve ser par!")
    return
  }

  // Lógica para criar a tabela 
  for (let i = 0, j = clubes.length - 1; i < j; i++, j--) {
    const itemTabela = document.createElement("li")

    // Aqui coloco .clube porque na web ele vai me retornar um object
    itemTabela.textContent = `${clubes[i].clube} x ${clubes[j].clube}`
    tabela.appendChild(itemTabela)
    console.log(clubes)
  }
})