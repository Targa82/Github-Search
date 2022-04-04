const modeswitch = document.querySelector(".modeswitch");

modeswitch.addEventListener("click", function (e) {
  const target = document.documentElement.getAttribute("data-theme");
  if (target === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
