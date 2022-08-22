document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll(".anchor-link");

  anchorLinks?.forEach(el => {
    el.addEventListener("click", function (e) {

      const blockID = el.getAttribute("href")?.substr(1);
      const block = document.getElementById(blockID)

      document.documentElement.style.scrollBehavior = 'smooth';

      e.preventDefault();

      if(blockID) {
        window.scrollTo(0, block.offsetTop)
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    });
  });
});