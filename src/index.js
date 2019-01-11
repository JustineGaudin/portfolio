let anArrayOfAnything = ["Justine", "Gaudin", "UX/UI Designer"];
console.log(anArrayOfAnything);

let balanceTeam = ["Project:", "Interflora", "Wethere", "Spotify", "Uny"];
for (let name of balanceTeam) {
  console.log(name);
}

let button = document.querySelector("button");

let nbLike = 0;

button.addEventListener("click", () => 
{ button.style.animation = "blink 0.5s linear 2 alternate";
  nbLike++;
  if (nbLike > 1) {
    button.innerHTML = nbLike + " likes";
  } else {
    button.innerHTML = nbLike + " like";
  }
});

button.addEventListener("animationend", () => {
  button.style.animation = "none";
});
