let character = document.querySelector(".character");
let pilon = document.querySelector(".pilon1");
let pilon2 = document.querySelector(".pilon2");
let pilon3 = document.querySelector(".pilon3");
let pilon4 = document.querySelector(".pilon4");

let progress_bar_1 = document.querySelector(".progress-bar-1");
let progress_bar_2 = document.querySelector(".progress-bar-2");
let progress_bar_3 = document.querySelector(".progress-bar-3");
let progress_bar_4 = document.querySelector(".progress-bar-4");
let rocket = document.querySelector(".rocket");
let gameOn = true;
let power = false;
let touchRightEdge = false;

character.style.top = "380px";
character.style.right = "1530px";
pilon.style.top = "-85px";
pilon2.style.bottom = "-85px";
pilon.style.right = "-120px";
pilon2.style.right = "-120px";
pilon3.style.right = "-530px";
pilon4.style.right = "-730px";

const handleProgressBar = (element) => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      setTimeout(() => {
        element.style.backgroundColor = "rgb(0, 199, 0)";
      }, 500);
      element.style.backgroundColor = "";
    }, i * 1000);
  }
};

const handleRevertProgressBar = (element) => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      setTimeout(() => {
        element.style.backgroundColor = "";
      }, 500);
      element.style.backgroundColor = "rgb(0, 199, 0)";
    }, i * 1000);
  }
};

const rocketMove = () => {
  power = false;
  if (!touchRightEdge) {
    for (let i = 0; i < 200; i++) {
      if (rocket.style.right < "-120px") {
        touchRightEdge = true;
      } else {
        setTimeout(() => {
          rocket.style.right = parseInt(rocket.style.right) - 10 + "px";
          const positionPilon1 =
            parseInt(rocket.style.right) - parseInt(pilon.style.right);
          const positionPilon2 =
            parseInt(rocket.style.right) - parseInt(pilon2.style.right);

          //Pilon 1 touch
          if (
            positionPilon1 <= 50 &&
            parseInt(rocket.style.top) <= 260 &&
            parseInt(rocket.style.top) > -100
          ) {
            pilon.style.visibility = "hidden";
            rocket.style.visibility = "hidden";
            setTimeout(() => {
              pilon.style.visibility = "visible";
            }, 2000);
          }

          //Pilon 2 touch
          if (
            positionPilon2 <= 50 &&
            parseInt(rocket.style.top) <= 880 &&
            parseInt(rocket.style.top) > 540
          ) {
            pilon2.style.visibility = "hidden";
            rocket.style.visibility = "hidden";
            setTimeout(() => {
              pilon2.style.visibility = "visible";
            }, 2000);
          }
        }, 10 * i);
      }
    }
  }
};

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    character.style.top = parseInt(character.style.top) - 20 + "px";
    rocket.style.top = parseInt(rocket.style.top) - 20 + "px";
    console.log(character.style.top);
  }
  if (event.key === "ArrowLeft") {
    character.style.right = parseInt(character.style.right) + 20 + "px";
    rocket.style.right = parseInt(character.style.right) - 10 + "px";
  }
  if (event.key === "ArrowRight") {
    character.style.right = parseInt(character.style.right) - 20 + "px";
    rocket.style.right = parseInt(character.style.right) - 10 + "px";
  }
  if (event.key === "ArrowDown") {
    character.style.top = parseInt(character.style.top) + 20 + "px";
    rocket.style.top = parseInt(rocket.style.top) + 20 + "px";
    console.log(character.style.top);
  }
});

window.addEventListener("keydown", (event) => {
  if (power == true && event.key === " ") {
    touchRightEdge = false;
    rocket.style.visibility = "visible";
    rocket.style.top = parseInt(character.style.top) + 50 + "px";
    rocket.style.right = parseInt(character.style.right) - 10 + "px";
    rocketMove();
    handleRevertProgressBar(progress_bar_4);
    setTimeout(() => {
      handleRevertProgressBar(progress_bar_3);
    }, 1000);
    setTimeout(() => {
      handleRevertProgressBar(progress_bar_2);
    }, 2000);
    setTimeout(() => {
      handleRevertProgressBar(progress_bar_1);
    }, 3000);
    setTimeout(() => {
      handleProgressBar(progress_bar_1);
    }, 4000);
    setTimeout(() => {
      handleProgressBar(progress_bar_2);
    }, 5000);
    setTimeout(() => {
      handleProgressBar(progress_bar_3);
    }, 6000);
    setTimeout(() => {
      handleProgressBar(progress_bar_4);
      power = true;
    }, 7000);
  }
});

setInterval(() => {
  if (gameOn) {
    pilon.style.right = parseInt(pilon.style.right) + 5 + "px";
    if (parseInt(pilon.style.right) > 1760) {
      pilon.style.right = "-320px";
    }
  }
}, 10);
setInterval(() => {
  if (gameOn) {
    pilon2.style.right = parseInt(pilon.style.right) + 5 + "px";
    if (parseInt(pilon2.style.right) > 1760) {
      pilon2.style.right = "-320px";
    }
  }
}, 10);

setTimeout(() => {
  setInterval(() => {
    if (gameOn) {
      pilon3.style.right = parseInt(pilon3.style.right) + 3 + "px";
      if (parseInt(pilon3.style.right) > 1760) {
        pilon3.style.right = "-530px";
      }
    }
  }, 10);
}, 900);

setTimeout(() => {
  setInterval(() => {
    if (gameOn) {
      pilon4.style.right = parseInt(pilon4.style.right) + 3 + "px";
      if (parseInt(pilon4.style.right) > 1760) {
        pilon4.style.right = "-730px";
      }
    }
  }, 10);
}, 2050);

handleProgressBar(progress_bar_1);
setTimeout(() => {
  handleProgressBar(progress_bar_2);
}, 1000);
setTimeout(() => {
  handleProgressBar(progress_bar_3);
}, 2000);
setTimeout(() => {
  handleProgressBar(progress_bar_4);
  power = true;
}, 3000);
