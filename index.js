let character = document.querySelector(".character");
character.style.top = "380px";

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "ArrowUp") {
    character.style.top = parseInt(character.style.top) - 10 + "px";
  }
});
