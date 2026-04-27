/* PDP gallery thumbs */
(function () {
  const gal = document.querySelector('[data-pdp-gallery]');
  if (!gal) return;
  const main = gal.querySelector('[data-pdp-main]');
  gal.querySelectorAll('[data-pdp-thumb]').forEach(t => {
    t.addEventListener('click', () => {
      gal.querySelectorAll('[data-pdp-thumb]').forEach(x => x.classList.remove('is-active'));
      t.classList.add('is-active');
      if (main) main.src = t.dataset.full || t.src;
    });
  });
})();
