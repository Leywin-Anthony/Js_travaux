function tirage() {
  const tableau = ["Pierre", "Feuille", "Ciseaux", "Pistolet", "Dynamite"];
  const indexAleatoire = Math.floor(Math.random() * tableau.length);
  const elementTire = tableau[indexAleatoire];

  document.getElementById("affichage").textContent =
    "Élément tiré : " + elementTire;
}
