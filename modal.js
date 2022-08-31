(() => {
  const list = document.querySelectorAll(".item-list");
  function activoClass() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activoClass));
})();
