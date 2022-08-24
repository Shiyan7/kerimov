import {
  Fancybox,
} from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', () => {

  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Navigation: {
      display: [
        "prevBut"
      ]
    },
    Toolbar: {
      display: [
        "counter",
        "zoom",
        "slideshow",
        "close",
      ],
    },
  });
});