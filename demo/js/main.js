/* ===== Mobile Menu ===== */
function toggleMenu() {
  document.querySelector('nav ul').classList.toggle('open');
}

/* ===== Logo Mark SVG ===== */
function logoMarkup() {
  return `<svg class="logo-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18.5" stroke="#c9a227" stroke-width="1"/>
    <path d="M20 8 L31 30 H9 Z" stroke="#ffffff" stroke-width="1" fill="none"/>
    <circle cx="20" cy="20" r="2.5" fill="#c9a227"/>
  </svg>`;
}

/* ===== Ticker ===== */
function renderTicker() {
  const el = document.getElementById('ticker');
  if (!el) return;
  const active = notices.filter(n => n.pinned || true).slice(0, 5);
  el.innerHTML = active.map(n => `&nbsp;&nbsp;&nbsp;${n.title}&nbsp;&nbsp;&nbsp;·`).join('');
}

/* ===== Popup ===== */
function showPopup() { const el = document.getElementById('noticePopup'); if (el) el.classList.add('open'); }
function closePopup() { const el = document.getElementById('noticePopup'); if (el) el.classList.remove('open'); }

/* ===== Home: Latest Notices ===== */
function renderHomeNotices() {
  const el = document.getElementById('homeNotices');
  if (!el) return;
  el.innerHTML = notices.slice(0, 4).map(n => {
    const d = new Date(n.date);
    const day = d.getDate().toString().padStart(2, '0');
    const mon = d.toLocaleString('en', { month: 'short' }).toUpperCase();
    return `
      <div class="notice-item ${n.pinned ? 'pinned' : ''}">
        <div class="notice-date">${day}<br><span style="font-size:0.7rem;letter-spacing:2px;color:var(--ink-mute);">${mon}</span></div>
        <div class="notice-body" style="flex:1;">
          <h3>${n.pinned ? '<span class="notice-pin">Pinned</span>' : ''}${n.title}</h3>
          <div class="notice-meta">${n.category}</div>
        </div>
        <a href="notices.html" class="notice-link">View Notice</a>
      </div>
    `;
  }).join('');
}

/* ===== Home: Institutions — editorial rows ===== */
function renderHomeInstitutions() {
  const el = document.getElementById('homeInstitutions');
  if (!el) return;
  el.innerHTML = institutions.map((i, idx) => {
    const reverse = idx % 2 === 1 ? ' reverse' : '';
    const isSchool = i.type === 'school';
    const meta = isSchool
      ? `<div class="inst-meta-item"><span>Classes</span><strong>${i.classes}</strong></div>
         <div class="inst-meta-item"><span>Board</span><strong>${i.board}</strong></div>`
      : `<div class="inst-meta-item"><span>Courses</span><strong>${i.courses.slice(0,2).join(' · ')}</strong></div>
         <div class="inst-meta-item"><span>Batches</span><strong>${i.batches.length} Batches</strong></div>`;
    return `
      <div class="inst-row reveal${reverse}">
        <div class="inst-media">
          <img src="${i.photo}" alt="${i.name}" loading="lazy">
        </div>
        <div class="inst-body">
          <span class="badge">${isSchool ? 'School' : 'Coaching Centre'}</span>
          <h2>${i.name}</h2>
          <p class="inst-address">${i.address}</p>
          <div class="inst-meta">${meta}</div>
          <a href="${isSchool ? 'school.html' : 'coaching.html'}?slug=${i.slug}" class="btn btn-outline">View Institution</a>
        </div>
      </div>
    `;
  }).join('');
}

/* ===== Testimonials ===== */
function renderTestimonials() {
  const el = document.getElementById('testimonials');
  if (!el) return;
  el.innerHTML = testimonials.map(t => `
    <div class="testimonial">
      <div class="testimonial-quote">“${t.message}”</div>
      <div class="testimonial-name">${t.name}</div>
      <div class="testimonial-role">${t.role}</div>
    </div>
  `).join('');
}

/* ===== Institutions page ===== */
function renderInstitutionsPage() {
  const el = document.getElementById('institutionsList');
  if (!el) return;
  el.innerHTML = institutions.map(i => `
    <div class="inst-card reveal">
      <div class="inst-card-img"><img src="${i.photo}" alt="${i.name}" loading="lazy"></div>
      <div class="inst-card-body">
        <span class="badge">${i.type === 'school' ? 'School' : 'Coaching Centre'}</span>
        <h3>${i.name}</h3>
        <p>${i.address}</p>
        <p>${i.phone}</p>
        <a href="${i.type === 'school' ? 'school.html' : 'coaching.html'}?slug=${i.slug}" class="link">View Details</a>
      </div>
    </div>
  `).join('');
}

/* ===== Institution Detail ===== */
function loadInstitutionDetail() {
  const el = document.getElementById('instDetail');
  if (!el) return;
  const slug = new URLSearchParams(window.location.search).get('slug') || 'alok-dhara-vidyalaya';
  const inst = institutions.find(i => i.slug === slug) || institutions[0];
  const isSchool = inst.type === 'school';
  const extra = isSchool ? `
    <div class="inst-meta-item"><span>Classes</span><strong>${inst.classes}</strong></div>
    <div class="inst-meta-item"><span>Board</span><strong>${inst.board}</strong></div>
    <div class="inst-meta-item"><span>Principal</span><strong>${inst.principalName}</strong></div>
    <div class="inst-meta-item"><span>Phone</span><strong>${inst.phone}</strong></div>
  ` : `
    <div class="inst-meta-item"><span>Courses</span><strong>${inst.courses.join(' · ')}</strong></div>
    <div class="inst-meta-item"><span>Batches</span><strong>${inst.batches.join(' · ')}</strong></div>
    <div class="inst-meta-item"><span>Fees</span><strong>${inst.fees}</strong></div>
    <div class="inst-meta-item"><span>Phone</span><strong>${inst.phone}</strong></div>
  `;
  el.innerHTML = `
    <div class="inst-row">
      <div class="inst-media"><img src="${inst.photo}" alt="${inst.name}"></div>
      <div class="inst-body">
        <span class="badge">${isSchool ? 'School' : 'Coaching Centre'}</span>
        <h1 style="font-size:2.6rem;margin:8px 0 16px;">${inst.name}</h1>
        <p class="inst-address">${inst.address}</p>
        <div class="inst-meta">${extra}</div>
        <a href="admissions.html" class="btn btn-gold">Apply for Admission</a>
      </div>
    </div>
    ${isSchool ? `
    <div class="content-block" style="margin-top:40px;">
      <h2>Facilities</h2>
      <div class="features">
        ${inst.facilities.map((f, i) => `<div class="feature"><span class="feature-num">0${i+1}</span><h3>${f}</h3></div>`).join('')}
      </div>
    </div>` : `
    <div class="content-block" style="margin-top:40px;">
      <h2>Our Faculty</h2>
      <ul class="info-list">
        ${inst.faculty.map(f => `<li><strong>Faculty</strong>${f}</li>`).join('')}
      </ul>
    </div>`}
    <div class="content-block" style="margin-top:24px;">
      <h2>Location</h2>
      <iframe src="https://www.google.com/maps?q=Purulia,West+Bengal&output=embed" width="100%" height="340" style="border:0;" loading="lazy"></iframe>
    </div>
  `;
  bindReveal();
}

/* ===== Gallery ===== */
let galleryFilter = { institution: 'all', eventType: 'all' };
function renderGallery() {
  const el = document.getElementById('galleryGrid');
  if (!el) return;
  let items = gallery;
  if (galleryFilter.institution !== 'all') items = items.filter(g => g.institution === galleryFilter.institution);
  if (galleryFilter.eventType !== 'all') items = items.filter(g => g.eventType === galleryFilter.eventType);
  el.innerHTML = items.map(g => `
    <div class="gallery-item" onclick="openLightbox('${g.image}')">
      <img src="${g.image}" alt="${g.caption}" loading="lazy">
      <div class="gallery-caption">${g.caption}</div>
    </div>
  `).join('') || '<p style="grid-column:1/-1;text-align:center;color:var(--ink-mute);">No images match this filter.</p>';
}
function filterGallery(type, value, btn) {
  galleryFilter[type] = value;
  document.querySelectorAll(`[data-filter="${type}"]`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery();
}
function openLightbox(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }

/* ===== Notices ===== */
let noticeFilter = 'all';
function renderNotices() {
  const el = document.getElementById('noticesList');
  if (!el) return;
  let items = notices;
  if (noticeFilter !== 'all') items = items.filter(n => n.category === noticeFilter);
  items = [...items].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  el.innerHTML = items.map(n => {
    const d = new Date(n.date);
    const day = d.getDate().toString().padStart(2, '0');
    const mon = d.toLocaleString('en', { month: 'short' }).toUpperCase();
    const yr = d.getFullYear();
    return `
      <div class="notice-item ${n.pinned ? 'pinned' : ''}">
        <div class="notice-date">${day}<br><span style="font-size:0.7rem;letter-spacing:2px;color:var(--ink-mute);">${mon} ${yr}</span></div>
        <div class="notice-body" style="flex:1;">
          <h3>${n.pinned ? '<span class="notice-pin">Pinned</span>' : ''}${n.title}</h3>
          <div class="notice-meta">${n.category}</div>
        </div>
        <a href="${n.pdf}" class="notice-link">View PDF</a>
      </div>
    `;
  }).join('') || '<p style="text-align:center;color:var(--ink-mute);">No notices in this category.</p>';
}
function filterNotices(category, btn) {
  noticeFilter = category;
  document.querySelectorAll('[data-notice-filter]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderNotices();
}

/* ===== Careers ===== */
function renderCareers() {
  const el = document.getElementById('careersList');
  if (!el) return;
  el.innerHTML = careers.map((c, i) => `
    <div class="content-block reveal">
      <span class="eyebrow">Position 0${i+1}</span>
      <h2>${c.position}</h2>
      <p><strong style="color:var(--navy);">Qualifications:</strong> ${c.qualifications}</p>
      <p>${c.description}</p>
      <a href="#apply" class="btn btn-outline" style="margin-top:16px;">Apply</a>
    </div>
  `).join('');
}

/* ===== Form demo ===== */
function demoSubmit(e) {
  e.preventDefault();
  alert('Demo only — in the live site, this form will save to the database and send an email notification.');
  return false;
}

/* ===== Scroll reveal ===== */
function bindReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Inject logo mark everywhere
  document.querySelectorAll('.logo').forEach(el => {
    if (!el.querySelector('.logo-mark')) el.insertAdjacentHTML('afterbegin', logoMarkup());
  });
  renderTicker();
  renderHomeNotices();
  renderHomeInstitutions();
  renderTestimonials();
  renderInstitutionsPage();
  loadInstitutionDetail();
  renderGallery();
  renderNotices();
  renderCareers();
  bindReveal();
  if (document.getElementById('noticePopup') && window.location.pathname.endsWith('index.html')) {
    setTimeout(showPopup, 2000);
  }
});