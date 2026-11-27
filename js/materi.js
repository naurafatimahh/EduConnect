

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('[data-dropdown]').forEach((dropdown) => {
    const trigger = dropdown.querySelector('.filter-button');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !menu.classList.contains('is-open');
      document.querySelectorAll('.dropdown-menu.is-open').forEach((otherMenu) => {
        if (otherMenu !== menu) {
          otherMenu.classList.remove('is-open');
          otherMenu.closest('[data-dropdown]')?.querySelector('.filter-button')?.setAttribute('aria-expanded', 'false');
        }
      });
      menu.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });

    menu.querySelectorAll('.dropdown-option').forEach((option) => {
      option.addEventListener('click', () => {
        const value = option.dataset.value || option.textContent.trim();
        const label = dropdown.querySelector('span[id]');
        if (label) label.textContent = value;
        menu.querySelectorAll('.dropdown-option').forEach((item) => item.classList.remove('selected'));
        option.classList.add('selected');
        menu.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        filterMaterials();
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-dropdown]')) {
      document.querySelectorAll('.dropdown-menu.is-open').forEach((menu) => {
        menu.classList.remove('is-open');
        menu.closest('[data-dropdown]')?.querySelector('.filter-button')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    const initialQuery = new URLSearchParams(window.location.search).get('q') || '';
    searchInput.value = initialQuery;
    searchInput.addEventListener('input', filterMaterials);
    if (initialQuery) filterMaterials();
  }

  function filterMaterials() {
    const list = document.getElementById('materialList');
    if (!list) return;
    const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    const level = document.getElementById('levelLabel')?.textContent.trim() || '';
    const subject = document.getElementById('subjectLabel')?.textContent.trim() || '';
    const cards = [...list.querySelectorAll('.material-card')];
    let visible = 0;

    cards.forEach((card) => {
      const textMatch = card.textContent.toLowerCase().includes(query);
      const levelMatch = !level || level === 'Pilih Jenjang' || card.dataset.level === level || (level === 'SMA/SMK' && card.dataset.level === 'SMK');
      const subjectMatch = !subject || subject === 'Pilih Mata Pelajaran' || card.dataset.subject === subject;
      const show = textMatch && levelMatch && subjectMatch;
      card.style.display = show ? 'flex' : 'none';
      if (show) visible++;
    });
    const empty = document.getElementById('emptyState');
    if (empty) empty.style.display = visible ? 'none' : 'block';
  }

  document.querySelectorAll('.pagination .page-button').forEach((button) => {
    button.addEventListener('click', () => {
      const buttons = [...document.querySelectorAll('.pagination .page-button')];
      if (button.classList.contains('prev') || button.classList.contains('next')) return;
      buttons.forEach((item) => item.classList.remove('current'));
      button.classList.add('current');
      buttons.forEach((item) => item.removeAttribute('aria-current'));
      button.setAttribute('aria-current', 'page');
    });
  });

  const saveButton = document.getElementById('saveLesson');
  if (saveButton) {
    saveButton.addEventListener('click', () => {
      const saved = saveButton.classList.toggle('saved');
      saveButton.querySelector('span').textContent = saved ? 'Materi Tersimpan' : 'Simpan Materi';
      saveButton.setAttribute('aria-pressed', String(saved));
    });
  }
});
