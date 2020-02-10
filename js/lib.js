const $ = selector => document.querySelector(selector);

const lib = (() => {
  const onReady = fn => {
    document.addEventListener("DOMContentLoaded", fn);
  };

  return {
    onReady: onReady
  };
})();
