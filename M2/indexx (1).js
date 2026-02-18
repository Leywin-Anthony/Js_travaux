function palindrome() {
  const mot = document.getElementById("id-mot-saisi").value;
  const motMinuscule = mot.toLowerCase();
  const motInverse = motMinuscule.split("").reverse().join("");

  if (motMinuscule === motInverse) {
    document.getElementById("resultat").textContent = "C'est un palindrome";
  } else {
    document.getElementById("resultat").textContent = "Ce n'est pas un palindrome ";
  }
}
