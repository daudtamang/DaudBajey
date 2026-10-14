const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
document.getElementById('year').textContent = new Date().getFullYear();

// Let the owner preview a personal photo immediately in the browser.
const heroPhotoInput = document.getElementById('heroPhotoInput');
heroPhotoInput.addEventListener('change', event => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) { alert('Please choose an image file.'); return; }
  const image = document.getElementById('heroImage');
  image.src = URL.createObjectURL(file);
  image.hidden = false;
  document.getElementById('heroPlaceholder').hidden = true;
});

// Add selected gallery images as temporary browser previews.
const galleryInput = document.getElementById('galleryInput');
galleryInput.addEventListener('change', event => {
  const files = Array.from(event.target.files || []).filter(file => file.type.startsWith('image/'));
  const grid = document.getElementById('galleryGrid');
  files.forEach(file => {
    const card = document.createElement('div');
    card.className = 'gallery-photo';
    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    image.alt = file.name;
    const caption = document.createElement('span');
    caption.textContent = file.name;
    card.append(image, caption);
    grid.appendChild(card);
  });
});

// CV picker reports the selected file. Browsers cannot publish it to the site automatically.
const cvInput = document.getElementById('cvInput');
cvInput.addEventListener('change', event => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  document.getElementById('cvFileName').textContent = file.name;
  const valid = /\.(pdf|doc|docx)$/i.test(file.name);
  if (!valid) alert('Please choose a PDF, DOC, or DOCX file.');
});

// Highlight the navigation link for the section currently in view.
const sections = Array.from(document.querySelectorAll('main section[id]'));
const navLinks = Array.from(nav.querySelectorAll('a'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(section => observer.observe(section));
}
