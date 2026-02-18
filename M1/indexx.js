const citation = document.getElementById("citation").textContent;

const phrasePropre = citation.replace(/[.,’']/g, "");
const mots = phrasePropre.split(" ");

let motPlusLong = "";

for (let i = 0; i < mots.length; i++) {
  if (mots[i].length > motPlusLong.length) {
    motPlusLong = mots[i];
  }
}

document.getElementById("motPlusLong").textContent = motPlusLong;
