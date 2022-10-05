document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelector(".projects-images");
  const items = document.querySelectorAll(".projects-item");
  const imageItems = document.querySelectorAll('.projects-images__image')
  const body = document.body;

  if(images) {
    function moveMouse(e) {
      if (e.clientX < 5 || e.clientY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)) {
        images.style.opacity = 0;
      } else if(e.target.closest('.projects-items')) {
        images.style.opacity = 1;
        images.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
      } else {
        images.style.opacity = 0;
      }
    };

    document.addEventListener('mousemove', moveMouse);

    /* Можно было сделать один eventListener но мне лень) */

    items?.forEach(el => {

      el.addEventListener('mouseenter', e => {
        const self = e.currentTarget
        const path = self.dataset.imagePath;

        imageItems.forEach(el => el.classList.remove('active'))

        const target = document.querySelector(`.projects-images__image[data-image-target='${path}']`)

        target.classList.add('active')
      })
    })

    // window.addEventListener('scroll', () => {
    //   imageItems.forEach(el => el.classList.remove('active'))
    // })

    body.addEventListener("mouseeneter", () => {
      images.cssText = ''
    })
  }
})