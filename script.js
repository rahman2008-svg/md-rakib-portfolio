/* =========================================================
   MD RAKIB ISLAM — PORTFOLIO SCRIPT
   ========================================================= */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* =======================================================
     CONFIGURATION — keep editable data near the top
     ======================================================= */
  const GAMES = [
    {
      name: 'Free Fire',
      genre: 'Battle Royale',
      glow: 'rgba(255, 176, 32, 0.16)',
      icon: '<path d="M12 3l7 4v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z"/><path d="M9 12l2 2 4-4"/>'
    },
    {
      name: 'PUBG',
      genre: 'Battle Royale',
      glow: 'rgba(0, 200, 255, 0.16)',
      icon: '<circle cx="12" cy="12" r="8"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4"/>'
    },
    {
      name: 'Clash of Clans',
      genre: 'Strategy',
      glow: 'rgba(255, 92, 92, 0.14)',
      icon: '<path d="M4 21l7-14 7 14z"/><path d="M8 15h8"/>'
    },
    {
      name: 'E-Football',
      genre: 'Football / Sports',
      glow: 'rgba(36, 230, 122, 0.16)',
      icon: '<circle cx="12" cy="12" r="8"/><path d="M12 8l3 2-1 4h-4l-1-4z"/>'
    }
  ];

  const GAMING_INTERESTS = [
    { title: 'Competition', desc: 'Enjoys the challenge of competing and testing skills against others.' },
    { title: 'Strategy', desc: 'Drawn to games that reward planning, timing and smart decisions.' },
    { title: 'Teamwork', desc: 'Values coordinating with teammates to reach a shared goal.' },
    { title: 'Improvement', desc: 'Motivated by getting a little better with every session.' }
  ];

  // Prepared for future verified data — empty until supplied.
  const achievements = [];

  // Optional gaming data structure — for future verified info.
  // Not displayed until actual values are provided.
  const optionalGamingData = {
    freeFireUID: null,
    freeFireRank: null,
    pubgUID: null,
    pubgRank: null,
    coCPlayerTag: null,
    townHall: null,
    clan: null,
    eFootballDivision: null,
    favoriteTeam: null,
    favoritePlayer: null,
    gamingDevice: null,
    gamingSetup: null,
    tournamentHistory: null,
    youtube: null,
    tiktok: null,
    telegram: null,
    discord: null
  };

  const EDUCATION_TIMELINE = [
    { year: '2019', label: 'PSC Passed', sub: 'Primary School Certificate' },
    { year: '2025', label: 'SSC Passed', sub: 'Secondary School Certificate' },
    { year: 'Present', label: 'HSC Running', sub: 'Sunflower School and College — Humanities' }
  ];

  const JOURNEY_TIMELINE = [
    { year: '2019', label: 'PSC Passed', sub: 'The beginning of an academic journey.' },
    { year: '2025', label: 'SSC Passed', sub: 'A milestone in secondary education.' },
    { year: 'Present', label: 'HSC Running', sub: 'Continuing studies in Humanities.' },
    { year: 'Humanities', label: 'Academic Growth', sub: 'Building knowledge and perspective.' },
    { year: 'Gaming', label: 'Exploring Games and Strategy', sub: 'Free Fire, PUBG, Clash of Clans and E-Football.' },
    { year: 'Future', label: 'Higher Education & Personal Growth', sub: 'Looking ahead with curiosity.' }
  ];

  const GALLERY_IMAGES = [
    { file: 'rakib-01.jpg', kind: 'featured' },
    { file: 'rakib-02.jpg', kind: 'tall' },
    { file: 'rakib-03.jpg', kind: 'normal' },
    { file: 'rakib-04.jpg', kind: 'normal' },
    { file: 'rakib-05.jpg', kind: 'wide' },
    { file: 'rakib-06.jpg', kind: 'normal' },
    { file: 'rakib-07.jpg', kind: 'tall' },
    { file: 'rakib-08.jpg', kind: 'normal' },
    { file: 'rakib-09.jpg', kind: 'normal' },
    { file: 'rakib-10.jpg', kind: 'wide' }
  ];

  const SOCIALS = [
    {
      name: 'Facebook',
      handle: 'MD Rakib Islam',
      url: 'https://www.facebook.com/rakib2026bd',
      icon: '<path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.15 4.32 15 4.23 13.65 4.23c-2.8 0-4.72 1.71-4.72 4.85V10.5H6.4v3h2.53V21h4.57z"/>'
    },
    {
      name: 'Instagram',
      handle: '@mdrakibul2026123',
      url: 'https://www.instagram.com/mdrakibul2026123?igsi=MWNqamNpazdzaTVoNg==&utm_source=ig_contact_invite',
      icon: '<path d="M12 2.2c2.7 0 3 0 4.1.06 1 .05 1.6.2 1.9.34.5.2.8.4 1.2.8.4.4.6.7.8 1.2.14.4.3.9.34 1.9.06 1.1.06 1.4.06 4.1s0 3-.06 4.1c-.05 1-.2 1.6-.34 1.9-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.14-.9.3-1.9.34-1.1.06-1.4.06-4.1.06s-3 0-4.1-.06c-1-.05-1.6-.2-1.9-.34-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.14-.4-.3-.9-.34-1.9C2.66 15 2.66 14.7 2.66 12s0-3 .06-4.1c.05-1 .2-1.6.34-1.9.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.14.9-.3 1.9-.34C8.1 2.2 8.4 2.2 12 2.2zm0 1.8c-2.65 0-2.96 0-4.02.06-.86.04-1.32.18-1.63.3-.4.16-.7.34-1 .64-.3.3-.48.6-.64 1-.12.3-.26.77-.3 1.63C4.35 8.7 4.35 9 4.35 12s0 2.96.06 4.02c.04.86.18 1.32.3 1.63.16.4.34.7.64 1 .3.3.6.48 1 .64.3.12.77.26 1.63.3 1.06.06 1.37.06 4.02.06s2.96 0 4.02-.06c.86-.04 1.32-.18 1.63-.3.4-.16.7-.34 1-.64.3-.3.48-.6.64-1 .12-.3.26-.77.3-1.63.06-1.06.06-1.37.06-4.02s0-2.96-.06-4.02c-.04-.86-.18-1.32-.3-1.63-.16-.4-.34-.7-.64-1-.3-.3-.6-.48-1-.64-.3-.12-.77-.26-1.63-.3C14.96 4 14.65 4 12 4zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2zm4.6-2a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06z"/>'
    },
    {
      name: 'WhatsApp',
      handle: 'Chat / Call',
      url: 'https://call.whatsapp.com/video/oO8HdWrYZbzyc8LQhD1Bda',
      icon: '<path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2zm0 18.13c-1.7 0-3.28-.5-4.6-1.36l-.33-.2-3.02.79.8-2.95-.21-.3A8.07 8.07 0 0 1 3.9 12c0-4.48 3.65-8.13 8.12-8.13S20.14 7.52 20.14 12s-3.64 8.13-8.12 8.13zm4.47-6.1c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.92-1.18-.7-.63-1.19-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.33.98 2.49c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>'
    }
  ];

  const TYPED_ROLES = ['Gamer', 'Student', 'Gaming Enthusiast', 'Humanities Student', 'Future Creator'];

  /* =======================================================
     BACK TO TOP (defined early — referenced by scroll handler)
     ======================================================= */
  const backToTop = document.getElementById('back-to-top');

  function toggleBackToTop() {
    const show = window.scrollY > 600;
    backToTop.hidden = false;
    backToTop.classList.toggle('is-visible', show);
  }
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  /* =======================================================
     NAVIGATION — scrolled state
     ======================================================= */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
    toggleBackToTop();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* =======================================================
     MOBILE MENU
     ======================================================= */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
  }
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }
  hamburger.addEventListener('click', toggleMobileMenu);
  mobileMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* =======================================================
     ACTIVE SECTION HIGHLIGHT
     ======================================================= */
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.dataset.section === id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* =======================================================
     TYPING ANIMATION
     ======================================================= */
  const typedEl = document.getElementById('typed-role');

  function startTypingAnimation() {
    if (!typedEl) return;

    if (prefersReducedMotion) {
      typedEl.textContent = TYPED_ROLES[0];
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = TYPED_ROLES[roleIndex];

      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1500);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % TYPED_ROLES.length;
        }
      }

      setTimeout(tick, deleting ? 40 : 90);
    }

    tick();
  }
  startTypingAnimation();

  /* =======================================================
     SCROLL REVEAL
     ======================================================= */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* =======================================================
     TIMELINE NODE GLOW ON SCROLL
     ======================================================= */
  function initTimelineGlow() {
    const nodes = document.querySelectorAll('.timeline__node');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-lit'));
      return;
    }
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-lit');
            timelineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    nodes.forEach((n) => timelineObserver.observe(n));
  }

  /* =======================================================
     GAMING DATA — render games, interests, achievements
     ======================================================= */
  function renderGames() {
    const grid = document.getElementById('game-grid');
    if (!grid) return;
    grid.innerHTML = GAMES.map(
      (game) => `
      <div class="game-card reveal" style="--glow:${game.glow}">
        <span class="game-card__icon">
          <svg viewBox="0 0 24 24">${game.icon}</svg>
        </span>
        <h3 class="game-card__name">${game.name}</h3>
        <p class="game-card__genre">${game.genre}</p>
      </div>`
    ).join('');
  }

  function renderInterests() {
    const grid = document.getElementById('interest-grid');
    if (!grid) return;
    grid.innerHTML = GAMING_INTERESTS.map(
      (item) => `
      <div class="interest-card reveal">
        <p class="interest-card__title">${item.title}</p>
        <p class="interest-card__desc">${item.desc}</p>
      </div>`
    ).join('');
  }

  function renderAchievements() {
    const section = document.getElementById('achievements-section');
    const grid = document.getElementById('achievements-grid');
    if (!section || !grid) return;

    if (!achievements.length) {
      section.hidden = true;
      return;
    }

    section.hidden = false;
    grid.innerHTML = achievements
      .map(
        (a) => `
      <div class="achievement-card reveal">
        <p class="dashboard__stat-label">${a.game || ''}</p>
        <h4 class="timeline__label">${a.achievement || ''}</h4>
        <p class="timeline__sub">${a.description || ''}</p>
      </div>`
      )
      .join('');
  }

  /* =======================================================
     TIMELINES — render
     ======================================================= */
  function renderTimeline(targetId, items) {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = items
      .map(
        (item) => `
      <li class="timeline__item reveal">
        <span class="timeline__node"></span>
        <span class="timeline__year">${item.year}</span>
        <p class="timeline__label">${item.label}</p>
        <p class="timeline__sub">${item.sub}</p>
      </li>`
      )
      .join('');
  }

  /* =======================================================
     GALLERY — render with graceful missing-image handling
     ======================================================= */
  const galleryPhotos = []; // populated with successfully-loaded images, in order

  function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    GALLERY_IMAGES.forEach((item) => {
      const src = `assets/images/${item.file}`;
      const figure = document.createElement('div');
      let classes = 'gallery__item reveal';
      if (item.kind === 'featured') classes += ' gallery__item--featured';
      else if (item.kind === 'wide') classes += ' gallery__item--wide';
      else if (item.kind === 'tall') classes += ' gallery__item--tall';
      figure.className = classes;

      const img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = 'MD Rakib Islam — gallery photo';
      img.src = src;

      img.addEventListener('error', () => {
        // Image doesn't exist — skip it entirely, as specified.
        figure.remove();
      });

      img.addEventListener('load', () => {
        const index = galleryPhotos.length;
        galleryPhotos.push(src);
        figure.dataset.index = String(index);
      });

      figure.appendChild(img);
      figure.addEventListener('click', () => {
        const idx = Number(figure.dataset.index);
        if (!Number.isNaN(idx)) openLightbox(idx);
      });

      grid.appendChild(figure);
    });
  }

  /* =======================================================
     LIGHTBOX
     ======================================================= */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  let currentLightboxIndex = 0;
  let lastFocusedEl = null;

  function updateLightbox() {
    const src = galleryPhotos[currentLightboxIndex];
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = `MD Rakib Islam — photo ${currentLightboxIndex + 1}`;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${galleryPhotos.length}`;
  }

  function openLightbox(index) {
    if (!galleryPhotos.length) return;
    currentLightboxIndex = index;
    updateLightbox();
    lastFocusedEl = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function showPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    updateLightbox();
  }
  function showNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryPhotos.length;
    updateLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Mobile swipe support
  (function initSwipe() {
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        if (dx > 0) showPrev();
        else showNext();
      }
    }, { passive: true });
  })();

  /* =======================================================
     SOCIAL LINKS — render connect cards
     ======================================================= */
  function renderSocials() {
    const grid = document.getElementById('social-grid');
    if (!grid) return;
    grid.innerHTML = SOCIALS.map(
      (s) => `
      <a class="social-card reveal" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name} — ${s.handle}">
        <span class="social-card__icon"><svg viewBox="0 0 24 24">${s.icon}</svg></span>
        <span class="social-card__body">
          <span class="social-card__name">${s.name}</span><br>
          <span class="social-card__handle">${s.handle}</span>
        </span>
        <span class="social-card__btn">Visit</span>
      </a>`
    ).join('');
  }

  /* =======================================================
     CONTACT MENU (floating button)
     ======================================================= */
  const floatingContact = document.getElementById('floating-contact');
  const floatingBtn = document.getElementById('floating-btn');

  function toggleFloatingMenu(forceState) {
    const willOpen = typeof forceState === 'boolean' ? forceState : !floatingContact.classList.contains('is-open');
    floatingContact.classList.toggle('is-open', willOpen);
    floatingBtn.setAttribute('aria-expanded', String(willOpen));
    floatingBtn.setAttribute('aria-label', willOpen ? 'Close contact menu' : 'Open contact menu');
  }

  floatingBtn.addEventListener('click', () => toggleFloatingMenu());

  document.addEventListener('click', (e) => {
    if (!floatingContact.contains(e.target)) toggleFloatingMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleFloatingMenu(false);
  });

  /* =======================================================
     INITIALIZATION
     ======================================================= */
  function init() {
    renderGames();
    renderInterests();
    renderAchievements();
    renderTimeline('education-timeline', EDUCATION_TIMELINE);
    renderTimeline('journey-timeline', JOURNEY_TIMELINE);
    renderGallery();
    renderSocials();
    initScrollReveal();
    initTimelineGlow();
    toggleBackToTop();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
