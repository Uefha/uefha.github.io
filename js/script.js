// Update project and skill data here; the page builds cards from these lists.
const skills = [
  { title: { id: 'Administrasi', en: 'Administration' }, icon: '▤', items: [{ id: 'Perencanaan administrasi', en: 'Administrative planning' }] },
  { title: { id: 'Kompetensi kerja', en: 'Work skills' }, icon: '◇', items: [{ id: 'Problem solving', en: 'Problem solving' }, { id: 'Time management', en: 'Time management' }, { id: 'Kerja sama tim', en: 'Teamwork' }] },
  { title: { id: 'Perangkat & aplikasi', en: 'Tools & applications' }, icon: '⌘', items: [{ id: 'Microsoft Office', en: 'Microsoft Office' }, { id: 'Visual Studio Code', en: 'Visual Studio Code' }] },
  { title: { id: 'Keuangan', en: 'Finance' }, icon: 'Rp', items: [{ id: 'Manajemen keuangan', en: 'Financial management' }, { id: 'CFO Junior', en: 'Junior CFO' }] },
];

const projects = [
  { title: 'SI-HARBANG', description: { id: 'Sistem informasi pelaporan kerusakan sarana, prasarana, dan bangunan.', en: 'An information system for reporting damage to facilities, infrastructure, and buildings.' }, image: 'assets/images/project-1.svg', alt: { id: 'Ilustrasi dashboard sistem informasi SI-HARBANG', en: 'Illustration of the SI-HARBANG information system dashboard' }, technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'], github: '#', demo: 'https://siharbang.smatnikn.sch.id/login' },
  { title: 'Finance Performance Tracker', description: { id: 'Aplikasi untuk memantau performa keuangan.', en: 'An application for tracking financial performance.' }, image: 'assets/images/project-2.svg', alt: { id: 'Ilustrasi dashboard Finance Performance Tracker', en: 'Illustration of the Finance Performance Tracker dashboard' }, technologies: [], github: '#', demo: 'https://itsfadil.infinityfree.me/login' },
  { title: 'Portfolio Website', description: { id: 'Website portofolio personal yang ringan, responsif, dan mudah dikembangkan.', en: 'A lightweight, responsive personal portfolio website that is easy to extend.' }, image: 'assets/images/project-3.svg', alt: { id: 'Ilustrasi website portofolio personal', en: 'Illustration of a personal portfolio website' }, technologies: ['HTML', 'CSS', 'JavaScript'], github: '#', demo: '#' },
  { title: 'Dapur RKB', description: { id: 'Platform Digitalisasi Form Operasional Dapur Umum', en: 'Digital platform for public kitchen operations forms.' }, image: 'assets/images/project-4.svg', alt: { id: 'Ilustrasi dashboard digitalisasi form operasional Dapur RKB', en: 'Illustration of the Dapur RKB operations form dashboard' }, technologies: [], github: '#', demo: 'https://rkb-dapur.freedev.app/' },
];

const translations = {
  id: {
    nav_home: 'Home', nav_about: 'Tentang', nav_skills: 'Keahlian', nav_projects: 'Proyek', nav_experience: 'Pengalaman', nav_contact: 'Kontak', nav_talk: 'Mari bicara',
    nav_aria: 'Navigasi utama', skip: 'Lewati ke konten utama', hero_status: 'Fresh graduate · 2026', hero_greeting: 'Halo, saya', hero_role: 'Fresh Graduate Teknik Informatika', hero_focus: 'Administrasi & Organisasi',
    hero_description: 'Lulusan Teknik Informatika dengan pengalaman administrasi perusahaan dan sekolah, organisasi, serta pengelolaan keuangan. Saya juga mendirikan komunitas studi pasar modal FreshStock.',
    view_work: 'Lihat karya saya', contact_me: 'Hubungi saya', download_cv: 'Download CV', hero_chip: 'FADIL', location: 'Malang', scroll_cue: 'Scroll', hero_visual: 'Foto profil Muhammad Nur Fadila',
    about_eyebrow: 'Sedikit tentang saya', about_title_first: 'Tentang', about_title_second: 'saya', about_lead: 'Kenali saya lebih dekat dan hal-hal yang saya tekuni.',
    photo_caption: 'Belajar, membangun,<br>dan terus bertumbuh.',
    about_paragraph_one: 'Nama saya <strong>Muhammad Nur Fadila</strong>, fresh graduate program studi Teknik Informatika di Universitas Islam Raden Rahmat Malang dengan IPK 3,75. Saya memiliki pengalaman di bidang administrasi perusahaan dan sekolah, termasuk pengelolaan data serta pengurusan legalitas tingkat kota dan kabupaten.',
    about_paragraph_two: 'Saya aktif berorganisasi dan membuat komunitas studi pasar modal di Malang yang berfokus pada saham IPO dengan nama <strong>FreshStock</strong>. Pengalaman saya juga mencakup administrasi, pengelolaan keuangan, dan pengembangan software.',
    label_location: 'Lokasi', label_education: 'Pendidikan', fact_education: 'Teknik Informatika · IPK 3,75', label_focus: 'Fokus', fact_focus: 'Administrasi & organisasi', label_experience: 'Pengalaman kerja', about_link: 'Perjalanan saya',
    skills_eyebrow: 'Kekuatan & keterampilan', skills_title_first: 'Keahlian', skills_title_second: 'saya', skills_lead: 'Keterampilan yang tercantum dalam CV saya.',
    projects_eyebrow: 'Karya pilihan', projects_title_first: 'Proyek', projects_title_second: 'pilihan', projects_lead: 'Beberapa hal yang pernah saya bangun dan pelajari.',
    experience_eyebrow: 'Pengalaman profesional', experience_title_first: 'Pengalaman &', experience_title_second: 'pendidikan', experience_lead: 'Perjalanan kerja, pendidikan, dan kontribusi organisasi saya.',
    work_heading: 'Pengalaman kerja & magang', date_company: 'April 2023 — Desember 2025', date_shackfood: 'September 2023 — Desember 2023', date_school: 'September 2021 — Mei 2022', date_freshstock: 'Mei 2025 — Sekarang', date_association: 'September 2023 — September 2024', date_badminton: 'Mei 2022 — Mei 2024', date_babussalam: 'Juli 2021 — Mei 2023', date_osis: 'Juni 2019 — Mei 2020', job_admin: 'Staf Administrasi', job_admin_company: 'Mengoperasikan website OSS, merekap data pegawai, dan membantu pengurusan legalitas perusahaan.',
    job_cfo: 'Chief Financial Officer', job_cfo_desc: 'Mengatur keuangan, termasuk laporan pemasukan dan pengeluaran serta pembagian hasil.', job_school_desc: 'Mengelola data EMIS dan Dapodik, merancang jadwal pembelajaran, serta merekap absensi guru dan siswa.',
    education_heading: 'Pendidikan', graduated: 'Lulus 2026', faculty_degree: 'Sains dan Teknologi · Teknik Informatika', gpa: 'IPK 3,75', high_school_major: 'Ilmu Pengetahuan Alam', score_86: 'Nilai 86', entrepreneurship: 'Kewirausahaan', score_a: 'Nilai A',
    org_heading: 'Pengalaman organisasi', role_lead: 'Ketua', freshstock_desc: 'Mendirikan dan memimpin komunitas studi pasar modal yang berfokus pada pencarian return tinggi di saham IPO.',
    role_communications: 'Koordinator Komunikasi dan Jaringan', role_social: 'Admin Media Sosial', role_arts: 'Koordinator Seni dan Dakwah', role_secretary: 'Sekretaris',
    achievements_heading: 'Prestasi & kegiatan', award_2017: 'Juara 1 Musabaqah Qira’atil Kutub Aqidatul Awam tingkat Kabupaten Malang.', award_2018: 'Wisudawan terbaik ke-2 MTs Babussalam.', award_2019: 'Peserta Olimpiade Sains Kabupaten bidang Fisika.', award_2022: 'Menjadi divisi jurnalistik selama KKN dan menyelesaikan proyek artikel.',
    contact_eyebrow: 'Hubungi saya', contact_title_first: 'Mari terhubung', contact_title_second: 'dan berkolaborasi.', contact_lead: 'Saya berdomisili di Malang. Silakan hubungi saya melalui email, telepon, atau LinkedIn.', send_email: 'Kirim email',
    email: 'Email', phone: 'Telepon', linkedin: 'LinkedIn', footer_text: 'Dibuat dengan <span class="heart">♥</span> dan HTML, CSS & JavaScript.', back_top: 'Kembali ke atas',
    menu_open: 'Buka menu navigasi', menu_close: 'Tutup menu navigasi', switch_language: 'Bahasa Indonesia, ganti ke Inggris', theme_dark: 'Aktifkan mode gelap', theme_light: 'Aktifkan mode terang',
    project_technology: 'Teknologi', project_github: 'Kode sumber', project_demo: 'Demo langsung', unavailable: '(tautan belum tersedia)', title: 'Muhammad Nur Fadila — Portofolio', meta_description: 'Portofolio Muhammad Nur Fadila, fresh graduate Teknik Informatika dengan pengalaman administrasi, organisasi, dan manajemen keuangan di Malang.'
  },
  en: {
    nav_home: 'Home', nav_about: 'About', nav_skills: 'Skills', nav_projects: 'Projects', nav_experience: 'Experience', nav_contact: 'Contact', nav_talk: 'Let’s talk',
    nav_aria: 'Main navigation', skip: 'Skip to main content', hero_status: 'Fresh graduate · 2026', hero_greeting: 'Hello, I’m', hero_role: 'Informatics Graduate', hero_focus: 'Administration & Organization',
    hero_description: 'An Informatics graduate with experience in company and school administration, organizations, and financial management. I also founded FreshStock, a capital-market study community.',
    view_work: 'View my work', contact_me: 'Contact me', download_cv: 'Download CV', hero_chip: 'Fadil', location: 'Malang', scroll_cue: 'Scroll', hero_visual: 'Profile photo of Muhammad Nur Fadila',
    about_eyebrow: 'A little about me', about_title_first: 'About', about_title_second: 'me', about_lead: 'Get to know me and the work I care about.',
    photo_caption: 'Learning, building,<br>and growing along the way.',
    about_paragraph_one: 'I’m <strong>Muhammad Nur Fadila</strong>, an Informatics graduate from Universitas Islam Raden Rahmat Malang with a 3.75 GPA. I have experience in company and school administration, including data management and handling legal documents at city and regency levels.',
    about_paragraph_two: 'I’m active in organizations and founded <strong>FreshStock</strong>, a capital-market study group in Malang focused on IPO stocks. My experience also includes administration, financial management, and software development.',
    label_location: 'Location', label_education: 'Education', fact_education: 'Informatics · GPA 3.75', label_focus: 'Focus', fact_focus: 'Administration & organizations', label_experience: 'Work experience', about_link: 'My journey',
    skills_eyebrow: 'Strengths & skills', skills_title_first: 'My', skills_title_second: 'skills', skills_lead: 'Skills listed in my CV.',
    projects_eyebrow: 'Selected work', projects_title_first: 'Featured', projects_title_second: 'projects', projects_lead: 'A few things I have built and learned along the way.',
    experience_eyebrow: 'Professional experience', experience_title_first: 'Experience &', experience_title_second: 'education', experience_lead: 'My work, education, and organizational journey.',
    work_heading: 'Work & internship experience', date_company: 'April 2023 — December 2025', date_shackfood: 'September 2023 — December 2023', date_school: 'September 2021 — May 2022', date_freshstock: 'May 2025 — Present', date_association: 'September 2023 — September 2024', date_badminton: 'May 2022 — May 2024', date_babussalam: 'July 2021 — May 2023', date_osis: 'June 2019 — May 2020', job_admin: 'Administrative Staff', job_admin_company: 'Operated the OSS website, maintained employee records, and assisted with company licensing.',
    job_cfo: 'Chief Financial Officer', job_cfo_desc: 'Managed finances, including income and expense reports and profit sharing.', job_school_desc: 'Managed EMIS and Dapodik data, prepared class schedules, and recorded teacher and student attendance.',
    education_heading: 'Education', graduated: 'Graduated 2026', faculty_degree: 'Science and Technology · Informatics', gpa: 'GPA 3.75', high_school_major: 'Natural Sciences', score_86: 'Score 86', entrepreneurship: 'Entrepreneurship', score_a: 'Grade A',
    org_heading: 'Organizational experience', role_lead: 'Chairperson', freshstock_desc: 'Founded and led a capital-market study community focused on seeking strong returns in IPO stocks.',
    role_communications: 'Communications & Networking Coordinator', role_social: 'Social Media Administrator', role_arts: 'Arts & Outreach Coordinator', role_secretary: 'Secretary',
    achievements_heading: 'Achievements & activities', award_2017: 'First place, Musabaqah Qira’atil Kutub Aqidatul Awam, Malang Regency.', award_2018: 'Second-best graduate, MTs Babussalam.', award_2019: 'Participant in the Regency Physics Science Olympiad.', award_2022: 'Worked in the journalism division during KKN and completed an article project.',
    contact_eyebrow: 'Get in touch', contact_title_first: 'Let’s connect', contact_title_second: 'and collaborate.', contact_lead: 'I’m based in Malang. You can reach me by email, phone, or LinkedIn.', send_email: 'Send me an email',
    email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', footer_text: 'Built with <span class="heart">♥</span> and HTML, CSS & JavaScript.', back_top: 'Back to top',
    menu_open: 'Open navigation menu', menu_close: 'Close navigation menu', switch_language: 'English language, switch to Indonesian', theme_dark: 'Enable dark mode', theme_light: 'Enable light mode',
    project_technology: 'Technologies', project_github: 'Source code', project_demo: 'Live demo', unavailable: '(link not available yet)', title: 'Muhammad Nur Fadila — Portfolio', meta_description: 'Muhammad Nur Fadila’s portfolio: Informatics graduate with experience in administration, organizations, and financial management in Malang.'
  }
};
let currentLanguage = document.documentElement.lang === 'en' ? 'en' : 'id';

const skillsGrid = document.querySelector('#skills-grid');
const projectsGrid = document.querySelector('#projects-grid');
let revealObserver = null;

function renderSkills() {
skillsGrid.innerHTML = skills.map(({ title, icon, items }) => `
  <article class="skill-card reveal">
    <div class="skill-head"><span class="skill-symbol" aria-hidden="true">${icon}</span><h3>${title[currentLanguage]}</h3></div>
    <div class="skill-list">${items.map(item => `<span>${item[currentLanguage]}</span>`).join('')}</div>
  </article>`).join('');
}

function renderProjects() {
projectsGrid.innerHTML = projects.map((project, index) => `
  <article class="project-card reveal">
    <div class="project-image"><img src="${project.image}" alt="${project.alt[currentLanguage]}" loading="lazy"></div>
    <div class="project-content">
      <div class="project-topline"><h3>${project.title}</h3><span class="project-index">0${index + 1}</span></div>
      <p>${project.description[currentLanguage]}</p>
      ${project.technologies.length ? `<div class="tech-list" aria-label="${translations[currentLanguage].project_technology}">${project.technologies.map(tech => `<span>${tech}</span>`).join('')}</div>` : ''}
      <div class="project-actions"><a href="${project.github}" ${project.github !== '#' ? 'target="_blank" rel="noreferrer"' : ''} aria-label="${translations[currentLanguage].project_github} ${project.title}${project.github === '#' ? ` ${translations[currentLanguage].unavailable}` : ''}">GitHub <span aria-hidden="true">↗</span></a><a href="${project.demo}" ${project.demo !== '#' ? 'target="_blank" rel="noreferrer"' : ''} aria-label="${translations[currentLanguage].project_demo} ${project.title}${project.demo === '#' ? ` ${translations[currentLanguage].unavailable}` : ''}">${translations[currentLanguage].project_demo} <span aria-hidden="true">↗</span></a></div>
    </div>
</article>`).join('');
}
renderSkills();
renderProjects();

// Mobile menu opens on demand and closes after a navigation choice.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', translations[currentLanguage].menu_open);
  navLinks.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', translations[currentLanguage][isOpen ? 'menu_open' : 'menu_close']);
  navLinks.classList.toggle('open', !isOpen);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

// Persist the visitor's theme choice between visits.
const themeToggle = document.querySelector('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  const dark = theme === 'dark';
  themeToggle.setAttribute('aria-label', dark ? translations[currentLanguage].theme_light : translations[currentLanguage].theme_dark);
  themeToggle.title = translations[currentLanguage][dark ? 'theme_light' : 'theme_dark'];
  themeToggle.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
  document.querySelector('meta[name="theme-color"]').content = dark ? '#101c24' : '#f5fbfe';
}
setTheme(document.documentElement.dataset.theme || 'light');
themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

// Header state, back-to-top visibility, and active section link share one scroll listener.
const header = document.querySelector('.site-header');
const topButton = document.querySelector('.floating-top');
const sections = [...document.querySelectorAll('main section[id]')];
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
function updateOnScroll() {
  header.classList.toggle('scrolled', window.scrollY > 12);
  topButton.classList.toggle('visible', window.scrollY > 500);
  let current = sections[0]?.id;
  for (const section of sections) {
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  }
  sectionLinks.forEach(link => {
    const active = link.getAttribute('href') === `#${current}`;
    if (active && link.getAttribute('href') !== '#') link.classList.add('active');
    else link.classList.remove('active');
  });
}
window.addEventListener('scroll', updateOnScroll, { passive: true });
window.addEventListener('resize', updateOnScroll);
updateOnScroll();
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Reveal content as it enters view. Keep content visible if reduced motion is preferred.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
}

function observeRevealItems() {
  const items = document.querySelectorAll('.reveal');
  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
    if (revealObserver) revealObserver.observe(item);
    else item.classList.add('is-visible');
  });
}

function setLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'id';
  const copy = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  localStorage.setItem('portfolio-language', currentLanguage);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = copy[element.dataset.i18n];
    if (translation !== undefined) element.innerHTML = translation;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    const translation = copy[element.dataset.i18nAria];
    if (translation !== undefined) element.setAttribute('aria-label', translation);
  });
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.meta_description;
  document.querySelector('meta[property="og:title"]').content = copy.title;
  document.querySelector('meta[property="og:description"]').content = copy.meta_description;
  document.querySelector('nav').setAttribute('aria-label', copy.nav_aria);
  const darkModeActive = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', darkModeActive ? copy.theme_light : copy.theme_dark);
  themeToggle.title = darkModeActive ? copy.theme_light : copy.theme_dark;
  menuToggle.setAttribute('aria-label', translations[currentLanguage][menuToggle.getAttribute('aria-expanded') === 'true' ? 'menu_close' : 'menu_open']);
  const languageButton = document.querySelector('.language-toggle');
  languageButton.querySelector('.language-current').textContent = currentLanguage.toUpperCase();
  languageButton.setAttribute('aria-label', copy.switch_language);
  languageButton.setAttribute('aria-pressed', String(currentLanguage === 'en'));
  languageButton.title = copy.switch_language;
  document.querySelector('.hero-image-wrap img').alt = currentLanguage === 'id' ? 'Foto Muhammad Nur Fadila' : 'Photo of Muhammad Nur Fadila';
  document.querySelector('.hero-visual').setAttribute('aria-label', copy.hero_visual);
  document.querySelector('.about-photo img').alt = currentLanguage === 'id' ? 'Muhammad Nur Fadila mengenakan seragam biru muda' : 'Muhammad Nur Fadila wearing a light blue uniform';
  document.querySelector('.social-links').setAttribute('aria-label', currentLanguage === 'id' ? 'Kontak' : 'Contact links');
  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks[0].setAttribute('aria-label', 'LinkedIn — Muhammad Nur Fadila');
  socialLinks[1].setAttribute('aria-label', currentLanguage === 'id' ? 'Kirim email' : 'Send an email');
  socialLinks[2].setAttribute('aria-label', currentLanguage === 'id' ? 'Telepon Muhammad Nur Fadila' : 'Call Muhammad Nur Fadila');
  renderSkills();
  renderProjects();
  observeRevealItems();
}

document.querySelector('.language-toggle').addEventListener('click', () => setLanguage(currentLanguage === 'id' ? 'en' : 'id'));
setLanguage(currentLanguage);

document.querySelector('#year').textContent = new Date().getFullYear();
