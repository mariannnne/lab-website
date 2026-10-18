// Mobile menu toggle
(function () {
  var btn = document.querySelector('.hamburger');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Gallery images open full size in a new tab (replaces Weebly's lightbox)
document.querySelectorAll('.imageGallery a[href]').forEach(function (a) {
  a.target = '_blank';
  a.rel = 'noopener';
});
