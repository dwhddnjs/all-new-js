const btn = document.querySelector(".btn-select");
const list = document.querySelector(".list-member");
const arrLang = ["Python", "Java", "JavaScript", "C#", "C/C++"];

arrLang.forEach((item) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.textContent = item;
  list.appendChild(li).appendChild(btn);
});
