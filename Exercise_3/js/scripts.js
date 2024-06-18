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
  document.getElementById("squares-container").style.display = "flex";
  for (let i = 0; i < person_name.length; i++) {
    addRectangle();
  }
}

function initSongs() {
  let song_container = document.getElementById("songs-container");
  song_container.style.display = "none";
  fetch("data/music.json")
    .then((response) => response.json())
    .then((data) => {
      let new_title = `<h1>${data.title}</h1><ul id="songs-list"></ul>`;
      song_container.innerHTML += new_title;
      song_container = document.getElementById("songs-list");
      for (let i = 0; i < data.songs.length; i++) {
        let song = data.songs[i];
        let new_song = `<li>${song.id}. ${song.artist} - ${song.name}</li>`;
        song_container.innerHTML += new_song;
      }
    })
    .catch((error) =>
      console.error("Parsing or dawnloading of JSON error:", error)
    );
}
function initButton() {
  let header_buttons = document.getElementsByClassName("header-button");
  for (let i = 0; i < header_buttons.length; i++) {
    let button = header_buttons[i];
    button.addEventListener("mouseover", function () {
      button.style.backgroundColor = "#C0C0C0";
    });
    button.addEventListener("mouseout", function () {
      button.style.backgroundColor = "#FFFFFF";
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
      default:
        break;
    }
  }
}

function addRectangle() {
  if (document.getElementById("squares-container").style.display != "none") {
    let squares_container = document.getElementById("squares-container");
    let new_square = `<section class="square" style="background-color: ${colors[colors_index]}">${person_name[name_index]}</section>`;
    squares_container.innerHTML += new_square;
    nameIndexChange(1);
    colorIndexChange(1);
  }
}

function subtractRectangle() {
  if (document.getElementById("squares-container").style.display != "none") {
    let squares_container = document.getElementsByClassName("square");
    if (squares_container.length > 0) {
      squares_container[squares_container.length - 1].remove();
      nameIndexChange(-1);
      colorIndexChange(-1);
    }
  }
}

function switchRectanglesSongs() {
  let Rectangles = document.getElementById("squares-container");
  let Songs = document.getElementById("songs-container");
  let switch_button = document.getElementById("switch-button");
  if (Rectangles.style.display == "flex") {
    switch_button.innerHTML = "Switch to rectangles";
    Rectangles.style.display = "none";
    Songs.style.display = "block";
  } else {
    switch_button.innerHTML = "Switch to songs";
    Rectangles.style.display = "flex";
    Songs.style.display = "none";
  }
}

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
