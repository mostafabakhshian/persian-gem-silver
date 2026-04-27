/**
 * Persian Gem Silver – main JS
 */
(function () {
  // Mobile menu
  const nav = document.querySelector('[data-main-nav]');
  const open = document.querySelector('[data-menu-toggle]');
  const close = document.querySelector('[data-menu-close]');
  if (open && nav) {
    open.addEventListener('click', () => nav.classList.add('is-open'));
  }
  if (close && nav) {
    close.addEventListener('click', () => nav.classList.remove('is-open'));
  }

  // Search overlay
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchOverlay = document.querySelector('[data-search-overlay]');
  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', () => {
      searchOverlay.classList.toggle('is-open');
      const input = searchOverlay.querySelector('input[type="search"]');
      if (searchOverlay.classList.contains('is-open') && input) input.focus();
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  // Accordion (FAQ)
  document.querySelectorAll('[data-accordion]').forEach((acc) => {
    acc.querySelectorAll('[data-accordion-item]').forEach((item) => {
      const btn = item.querySelector('[data-accordion-trigger]');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  });

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach((tabs) => {
    const triggers = tabs.querySelectorAll('[data-tab-trigger]');
    const panels = tabs.querySelectorAll('[data-tab-panel]');
    triggers.forEach((t) => {
      t.addEventListener('click', () => {
        const tab = t.dataset.tabTrigger;
        triggers.forEach(x => x.classList.toggle('is-active', x === t));
        panels.forEach(p => p.classList.toggle('is-active', p.dataset.tabPanel === tab));
      });
    });
  });

  // Newsletter dummy submit
  document.querySelectorAll('[data-newsletter-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'عضویت انجام شد ✓'; }
    });
  });

  // Bespoke / generic forms
  document.querySelectorAll('[data-bespoke-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('is-success');
    });
  });
})();
