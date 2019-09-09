if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then((reg) => {
      reg.onupdatefound = () => {
        const worker = reg.installing;

        worker.onstatechange = () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            const  popup = document.getElementById("js-popup");

            popup.classList.add("visible");

            setTimeout(() => {
              popup.classList.remove("visible");
            }, 6000);
          }
        };
      };
    }).catch(console.log);
  });
}
