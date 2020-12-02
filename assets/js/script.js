const imgLogo = document.querySelector('nav img.navbarLogo');

if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', (user) => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}

imgLogo.onclick = () => {
  location.href = '/';
};
