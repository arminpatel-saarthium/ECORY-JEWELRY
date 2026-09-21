document.getElementById("year").textContent = new Date().getFullYear();
document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector(".nav nav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "22px 7vw";
  nav.style.background = "#f4f0e8";
  nav.style.flexDirection = "column";
});
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", () => {
  document.querySelector(".nav nav").style.display = "";
}));
