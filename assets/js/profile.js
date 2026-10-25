/* Small, dependency-free interactions; all content works without JavaScript. */
(function () {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('nav-toggle');
  const nav = document.getElementById('profile-nav');
  function updateThemeButton() {
    const dark = root.dataset.theme === 'dark';
    if (!themeButton) return;
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
  }
  updateThemeButton();
  if (themeButton) themeButton.addEventListener('click', function () {
    const dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
    try { localStorage.setItem('yunze-theme', dark ? 'dark' : 'light'); } catch (e) {}
    updateThemeButton();
  });
  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu(); menuButton.focus();
      }
    });
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.profile-masthead')) closeMenu();
    });
  }
})();
