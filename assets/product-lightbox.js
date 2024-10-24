document.addEventListener('DOMContentLoaded', function () {
  // Check if the lightbox has been shown before
  if (!getCookie('lightboxShown')) {
    setTimeout(function () {
      document.getElementById('product-lightbox').style.display = 'flex';
    }, 7000);
  }

  // Close button click event
  document.getElementById('close-lightbox').onclick = function () {
    document.getElementById('product-lightbox').style.display = 'none';
    // Set cookie to prevent showing again
    setCookie('lightboxShown', 'true', 365);
  };

  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
});
