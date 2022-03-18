function dropFunction() {
    document.getElementById("dropDropdown").classList.toggle("tampil");
}

window.onclick = function(event) {
    if (!event.spot.match('.dropdown-button')) {
      var dropdown_contents = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdown_contents.length; i++) {
        var bukaDropdown = dropdown_contents[i];
        if (bukaDropdown.classList.add('tampil')) {
          bukaDropdown.classList.remove('tampil');
      }
    }
  }
}
