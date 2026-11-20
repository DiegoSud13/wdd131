(function () {
  const galeria = document.querySelector(".galeria");
  const tituloSecao = document.querySelector("#titulo-secao");
  const linksFiltro = document.querySelectorAll("#menu-nav a");

  // Rodapé (só preenche se o seu templos.js ainda não preencheu)
  const ano = document.querySelector("#anoatual");
  const modificacao = document.querySelector("#ultimaModificacao");
  if (ano && !ano.textContent) {
    ano.textContent = new Date().getFullYear();
  }
  if (modificacao && !modificacao.textContent) {
    modificacao.textContent = `Última modificação: ${document.lastModified}`;
  }

  function exibirTemplos(lista) {
    galeria.innerHTML = "";

    if (lista.length === 0) {
      galeria.innerHTML = "<p>Nenhum templo encontrado neste filtro.</p>";
      return;
    }

    lista.forEach((templo) => {
      const cartao = document.createElement("figure");
      cartao.innerHTML = `
        <img src="${templo.imageUrl}"
             alt="${templo.templeName}"
             width="400"
             height="250"
             loading="lazy">
        <figcaption>
          <strong>${templo.templeName}</strong><br>
          Localização: ${templo.location}<br>
          Consagrado: ${templo.dedicated}<br>
          Área: ${templo.area.toLocaleString("pt-BR")} pés quadrados
        </figcaption>
      `;
      galeria.appendChild(cartao);
    });
  }

  // "2005, August, 7" -> 2005
  function obterAno(templo) {
    return parseInt(templo.dedicated.split(",")[0], 10);
  }

  const filtros = {
    inicio:   { titulo: "Página Inicial",   filtrar: () => templos },
    antigos:  { titulo: "Templos Antigos",  filtrar: () => templos.filter((t) => obterAno(t) < 1900) },
    novos:    { titulo: "Templos Novos",    filtrar: () => templos.filter((t) => obterAno(t) > 2000) },
    grandes:  { titulo: "Templos Grandes",  filtrar: () => templos.filter((t) => t.area > 90000) },
    pequenos: { titulo: "Templos Pequenos", filtrar: () => templos.filter((t) => t.area < 10000) }
  };

  linksFiltro.forEach((link) => {
    link.addEventListener("click", (evento) => {
      evento.preventDefault();

      const { titulo, filtrar } = filtros[link.dataset.filtro];
      tituloSecao.textContent = titulo;
      exibirTemplos(filtrar());

      linksFiltro.forEach((a) => a.classList.remove("ativo"));
      link.classList.add("ativo");
    });
  });

  // Carga inicial
  exibirTemplos(templos);
})();