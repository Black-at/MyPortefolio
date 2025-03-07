document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading");
  const mainContent = document.querySelector(".main-content");

  // 
  //
  window.stopLoading = function() {
    loadingScreen.classList.add("loaded");
    mainContent.classList.add("loaded");
  };
});

