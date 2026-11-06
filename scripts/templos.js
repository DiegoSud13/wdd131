// Ano atual e data da última modificação no rodapé
document.getElementById("anoatual").textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;

// Menu hambúrguer
const botao = document.querySelector("#menu");
const menu = document.querySelector("#menu-nav");

botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.textContent = aberto ? "✕" : "☰";
    botao.setAttribute("aria-expanded", aberto);
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});