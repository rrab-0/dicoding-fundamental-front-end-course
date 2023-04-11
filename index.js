// These functions aims to select the
// root color properties and changes it
// into the complementary version of the color.
//
// In this case, it changes
// white to black, black to white, and
// neon-green to neon-purple, neon-purple to neon-green.
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("night-mode-logo").onclick = function () {
    document.querySelector(":root").style.setProperty("--black", "#ffffff");
    document
      .querySelector(":root")
      .style.setProperty("--white", "rgb(10, 8, 8)");
    document
      .querySelector(":root")
      .style.setProperty("--neon-green", "#FF87FF");
  };
  document.getElementById("light-mode-logo").onclick = function () {
    document
      .querySelector(":root")
      .style.setProperty("--black", "rgb(10, 8, 8)");
    document.querySelector(":root").style.setProperty("--white", "#ffffff");
    document
      .querySelector(":root")
      .style.setProperty("--neon-green", "#24e500");
  };
});
