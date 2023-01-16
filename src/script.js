const sidenav = document.getElementById("sidenav");
const navBar = document.getElementById("navBar");
const menuBar = document.getElementById("menuButton")

if (document.body.clientWidth > 930) {
  navBar.style.visibility = "visible";
}

const menuButton = document.getElementById("menuButton");
const containers = document.getElementsByClassName("home-texts-container");

// Open sidenav menu
function openSidenav() {
  if (document.body.clientWidth < 500) {
    sidenav.style.width = "100%";
  } else {
    sidenav.style.width = "10em";
    sidenav.style.height = "100%";
  }
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
  menuBar.style.backgroundColor = "rgba(0,0,0,0.6)";
  for (let div of containers) div.style.backgroundColor = "rgba(0,0,0,0.6)";
}

// Close sidenav menu
function closeSidenav() {
  sidenav.style.width = "0";
  document.body.style.backgroundColor = "initial";
  menuBar.style.backgroundColor = "initial";
  for (let div of containers) div.style.backgroundColor = "initial";
}
