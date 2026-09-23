(function () {
  var overlay = document.getElementById('loginOverlay');
  var openers = document.querySelectorAll('[data-open-login]');
  openers.forEach(function (el) {
    el.addEventListener('click', function () {
      overlay.classList.add('open');
    });
  });
  var closeBtn = document.getElementById('closeLogin');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      overlay.classList.remove('open');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay) overlay.classList.remove('open');
  });

  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.querySelector('nav.primary');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = primaryNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('[data-form-confirm]');
      if (note) note.style.display = 'block';
      form.reset();
    });
  });
})();
