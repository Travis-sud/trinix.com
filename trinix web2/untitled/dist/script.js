const gamesBtn = document.getElementById("gamesBtn");
const gamesSection = document.getElementById("gamesSection");

gamesBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (gamesSection.style.display === "block") {
    gamesSection.style.display = "none";
  } else {
    gamesSection.style.display = "block";
    gamesSection.scrollIntoView({ behavior: "smooth" });
  }
});
const mountingBtn = document.getElementById("mountingBtn");
const mountingSection = document.getElementById("mountingSection");

mountingBtn.addEventListener("click", function () {
  if (mountingSection.style.display === "block") {
    mountingSection.style.display = "none";
  } else {
    mountingSection.style.display = "block";
    mountingSection.scrollIntoView({ behavior: "smooth" });
  }
});