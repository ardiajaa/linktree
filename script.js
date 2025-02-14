document.getElementById("shareBtn").addEventListener("click", function () {
  if (navigator.share) {
    navigator
      .share({
        title: "WPU Linktree",
        url: window.location.href,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    alert(
      "Your browser does not support the share feature. Please copy the URL manually."
    );
  }
});

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  themeToggle.innerHTML = isDarkMode
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

body.classList.add("light-mode");
