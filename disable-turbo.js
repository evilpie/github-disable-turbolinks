"use strict";

(() => {
  let body;
  const observer = new MutationObserver(() => {
    if (body === document.body) {
      disableTurbo();
    }
  });

  function disableTurbo() {
    if (body !== document.body) {
      observer.disconnect();
      body = document.body;
      if (body) {
        observer.observe(body, { attributes: true, attributeFilter: ["data-turbo"] });
      }
    }

    if (body && body.getAttribute("data-turbo") !== "false") {
      body.setAttribute("data-turbo", "false");
    }
  }

  document.addEventListener("turbo:render", disableTurbo);
  disableTurbo();
})();
