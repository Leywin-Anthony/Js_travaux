let mangas = [
  "Naruto",
  "One Piece",
  "DBZ",
  "Bleach",
  "HxH",
  "JJK",
  "Spy x Family",
  "Sakamoto Days",
  "JJBA",
  "HnK",
  "Boruto",
];

function tirage() {
  const indexAleatoire = Math.floor(Math.random() * mangas.length);
  const elementTire = mangas[indexAleatoire];

  document.getElementById("affichage").textContent =
    "Manga tiré au sort : " + elementTire;
}
