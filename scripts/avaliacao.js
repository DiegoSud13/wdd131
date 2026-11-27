// Lê o contador, soma 1 e salva de volta
let totalAvaliacoes = Number(localStorage.getItem("totalAvaliacoes")) || 0;
totalAvaliacoes++;
localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

document.querySelector("#contador").textContent = totalAvaliacoes;

// Rodapé
document.querySelector("#anoAtual").textContent = new Date().getFullYear();
document.querySelector("#ultimaModificacao").textContent = document.lastModified;