let person_name = "RodionNovakovskiy";
let colors = ["MediumSpringGreen", "MediumVioletRed", "MediumTurquoise", "MediumPurple"];
let colors_index = 0;
let name_index = 0;

window.onload = () => {
  initRectangles();
};

function initRectangles() {
  for (i = 0; i < person_name.length; i++) {
    addRectangle();
  }
}

function initSongs() {}

function chooseRectangleColor() {}

function addRectangle() {
  let squares_container = document.getElementById("squares-container");
  let new_square = `<section class="square" style="background-color: ${colors[colors_index]}">${person_name[name_index]}</section>`;
  squares_container.innerHTML += new_square;
  nameIndexChange(1);
  colorIndexChange(1);
}

function subtractRectangle() {}

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