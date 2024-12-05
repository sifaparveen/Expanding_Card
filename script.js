const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    panels.forEach(function (p) {
      p.classList.remove("active");
    });

    panel.classList.add("active");
  });
});
