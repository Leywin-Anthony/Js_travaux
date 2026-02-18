function construirePyramide() {
  const n = parseInt(document.getElementById("ligne-pyramide").value);

  if (isNaN(n) || n <= 0) {
    alert("Entrez un nombre valide");
    return;
  }

  const maxTirets = "-".repeat(n);
  const maxEtoiles = "*".repeat(n * 2 - 1);

  let resultat = "";

  for (let i = 1; i <= n; i++) {
    const tirets = maxTirets.slice(0, n - i);
    const etoiles = maxEtoiles.slice(0, i * 2 - 1);

    resultat += tirets + etoiles + tirets + "<br>";
  }

  document.getElementById("pyramide").innerHTML = resultat;
}
