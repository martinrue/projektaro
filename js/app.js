const app = (() => {
  const init = () => {
    lib.onReady(() => {
      $("#en").addEventListener("click", event => {
        event.preventDefault();
        document.body.className = "en";
      });

      $("#eo").addEventListener("click", event => {
        event.preventDefault();
        document.body.className = "eo";
      });
    });
  };

  return {
    init: init
  };
})();
