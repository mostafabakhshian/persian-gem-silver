/* PLP minimal interactions */
(function () {
  const toggle = document.querySelector('[data-filter-toggle]');
  const sidebar = document.querySelector('[data-plp-sidebar]');
  if (toggle && sidebar) toggle.addEventListener('click', () => sidebar.classList.toggle('is-open'));
})();
