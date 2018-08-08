function showMenu() {
  var nav = document.getElementById("myTopnav");
  var identity = document.getElementById("myIdentity");

  if (nav.className === "topnav") {
    nav.className += " responsive";
    identity.className += " responsive";
  } else {
    nav.className = "topnav";
    identity.className = "identity";
  }
}
