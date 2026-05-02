// â”€â”€ SKELETON DISMISS â”€â”€
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('skeleton').classList.add('hidden');
    }, 900);
  });

  // â”€â”€ NAV SCROLL â”€â”€
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // â”€â”€ HAMBURGER â”€â”€
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  function closeMobile() { mobileMenu.classList.remove('open'); }

  // â”€â”€ SCROLL REVEAL â”€â”€
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // â”€â”€ SCREENSHOT TABS â”€â”€
  const urls = [
    'app.growthOS.io/dashboard',
    'app.growthOS.io/leads',
    'app.growthOS.io/automations/new-lead-flow',
    'app.growthOS.io/messages/whatsapp',
    'app.growthOS.io/analytics'
  ];
  function switchTab(idx) {
    document.querySelectorAll('.screen-tab').forEach((t,i) => t.classList.toggle('active', i===idx));
    document.querySelectorAll('.screen-panel').forEach((p,i) => p.classList.toggle('active', i===idx));
    document.getElementById('screenUrl').textContent = urls[idx];
  }
  const ctaForm = document.getElementById('ctaForm');
  const submitButton = document.getElementById('submitButton');
  const formSuccess = document.getElementById('formSuccess');
  const formEndpoint = ctaForm.action;

  ctaForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: new FormData(ctaForm),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      ctaForm.reset();
      ctaForm.style.display = 'none';
      formSuccess.style.display = 'block';
    } catch (error) {
      alert('Something went wrong. Please try again or message us on WhatsApp.');
      submitButton.disabled = false;
      submitButton.textContent = 'Book Free Demo';
    }
  });
