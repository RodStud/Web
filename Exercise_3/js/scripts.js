let person_name = "RodionNovakovskiy";
let name_index = 0;
let colors_index = 0;
let colors = [
  "MediumSpringGreen",
  "MediumVioletRed",
  "MediumTurquoise",
  "MediumPurple",
];

window.onload = () => {
  initRectangles();
  initSongs();
  initButton();
};

function initRectangles() {
  for (let i = 0; i < person_name.length; i++) {
    addRectangle();
  }
}

function initSongs() {}

function initButton() {
  let header_buttons = document.getElementsByClassName("header-button");
  for (let i = 0; i < header_buttons.length; i++) {
    let button = header_buttons[i];
    button.addEventListener("mouseover", function () {
      button.style.backgroundColor = "#a0a0a0";
    });
    button.addEventListener("mouseout", function () {
      button.style.backgroundColor = "#f0f0f0";
    });
    switch (button.id) {
      case "add-button":
        button.addEventListener("click", addRectangle);
        break;
      case "switch-button":
        button.addEventListener("click", switchRectanglesSongs);
        break;
      case "sub-button":
        button.addEventListener("click", subtractRectangle);
        break;
    }
  }
}

function chooseRectangleColor() {}

function addRectangle() {
  let squares_container = document.getElementById("squares-container");
  let new_square = `<section class="square" style="background-color: ${colors[colors_index]}">${person_name[name_index]}</section>`;
  squares_container.innerHTML += new_square;
  nameIndexChange(1);
  colorIndexChange(1);
}

function subtractRectangle() {
  let squares_container = document.getElementsByClassName("square");
  if (squares_container.length > 0) {
    squares_container[squares_container.length - 1].remove();
    nameIndexChange(-1);
    colorIndexChange(-1);
  }
}

function switchRectanglesSongs() {}

function populateSongsInList() {}

function nameIndexChange(number) {
  if (name_index + number >= person_name.length) {
    name_index = 0;
  } else if (name_index + number < 0) {
    name_index = person_name.length - 1;
  } else {
    name_index += number;
  }
}

function colorIndexChange(number) {
  if (colors_index + number >= colors.length) {
    colors_index = 0;
  } else if (colors_index + number < 0) {
    colors_index = colors.length - 1;
  } else {
    colors_index += number;
  }
}
