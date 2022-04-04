const modeswitch = document.querySelector(".modeswitch");
const btnSearch = document.querySelector(".btn-search");
const formMain = document.querySelector(".form");
const input = document.querySelector("input");
const userName = document.querySelector(".user-name");

let img = document.createElement("img");
let userImg = document.querySelector(".user-img");

modeswitch.addEventListener("click", function (e) {
  const target = document.documentElement.getAttribute("data-theme");
  if (target === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

btnSearch.addEventListener("click", function () {
  const apiUrl = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    img.src = data.avatar_url;
    userImg.appendChild(img);
    userImg.style.border = "none";
    userName.textContent = data.login;
  }
  getUrl();
});
