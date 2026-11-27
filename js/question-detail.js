

document.addEventListener('DOMContentLoaded', () => {

  initLikePertanyaan();
  initBookmarkPertanyaan();
  initSharePertanyaan();
  initVoteJawaban();
  initFormJawaban();
  initEditorToolbar();
  initFilterJawaban();
});


function showToast(message, iconClass = 'bi-check-circle-fill text-success') {
  let toast = document.getElementById('eduToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'eduToast';
    toast.className = 'toast-notif';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="bi ${iconClass}"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}


function initLikePertanyaan() {
  const btnLike = document.getElementById('btnLikePertanyaan');
  if (!btnLike) return;

  let liked = false;
  let count = 18;

  btnLike.addEventListener('click', (e) => {
    e.preventDefault();
    liked = !liked;
    count = liked ? count + 1 : count - 1;

    const countSpan = btnLike.querySelector('.like-count');
    const icon = btnLike.querySelector('i');

    if (countSpan) countSpan.textContent = count;

    if (liked) {
      btnLike.classList.add('active');
      icon.className = 'bi bi-arrow-up-circle-fill text-primary';
      showToast('Anda menyukai pertanyaan ini!', 'bi-hand-thumbs-up-fill text-primary');
    } else {
      btnLike.classList.remove('active');
      icon.className = 'bi bi-arrow-up-circle';
    }
  });
}


function initBookmarkPertanyaan() {
  const btnBookmark = document.getElementById('btnBookmarkPertanyaan');
  if (!btnBookmark) return;

  let saved = false;

  btnBookmark.addEventListener('click', (e) => {
    e.preventDefault();
    saved = !saved;

    const icon = btnBookmark.querySelector('i');
    const text = btnBookmark.querySelector('.btn-text');

    if (saved) {
      btnBookmark.classList.add('active');
      icon.className = 'bi bi-bookmark-fill text-primary';
      if (text) text.textContent = 'Tersimpan';
      showToast('Pertanyaan disimpan ke koleksi profil Anda');
    } else {
      btnBookmark.classList.remove('active');
      icon.className = 'bi bi-bookmark';
      if (text) text.textContent = 'Simpan';
      showToast('Pertanyaan dihapus dari simpanan');
    }
  });
}


function initSharePertanyaan() {
  const btnShare = document.getElementById('btnSharePertanyaan');
  if (!btnShare) return;

  btnShare.addEventListener('click', (e) => {
    e.preventDefault();
    const url = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast('Tautan berhasil disalin ke clipboard!');
      }).catch(() => {
        showToast('Tautan berhasil disalin!');
      });
    } else {
      showToast('Tautan siap dibagikan!');
    }
  });
}


function initVoteJawaban() {
  document.addEventListener('click', (e) => {
    const btnVote = e.target.closest('.btn-vote-jawaban');
    if (!btnVote) return;

    e.preventDefault();
    const isVoted = btnVote.dataset.voted === 'true';
    let count = parseInt(btnVote.dataset.count || '0', 10);

    if (isVoted) {
      count -= 1;
      btnVote.dataset.voted = 'false';
      btnVote.classList.remove('active');
      btnVote.querySelector('.vote-label').textContent = `Membantu (${count})`;
    } else {
      count += 1;
      btnVote.dataset.voted = 'true';
      btnVote.classList.add('active');
      btnVote.querySelector('.vote-label').textContent = `Membantu (${count})`;
      showToast('Terima kasih atas tanggapan Anda!', 'bi-check-circle-fill text-success');
    }

    btnVote.dataset.count = count;
  });
}


function initFormJawaban() {
  const form = document.getElementById('formKirimJawaban');
  const textarea = document.getElementById('inputJawaban');
  const answersList = document.getElementById('daftarJawaban');
  const countDisplay = document.getElementById('totalJawabanCount');

  if (!form || !textarea || !answersList) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isiJawaban = textarea.value.trim();

    if (!isiJawaban) {
      textarea.focus();
      textarea.classList.add('is-invalid');
      showToast('Silakan tuliskan jawaban Anda sebelum mengirim.', 'bi-exclamation-triangle-fill text-warning');
      return;
    }

    textarea.classList.remove('is-invalid');

    const newAnswerCard = document.createElement('div');
    newAnswerCard.className = 'card-jawaban mb-3 border-primary-subtle';
    newAnswerCard.style.animation = 'fadeIn 0.4s ease';

    const paragraphs = isiJawaban.split('\n').filter(p => p.trim() !== '')
      .map(p => `<p class="mb-2">${escapeHtml(p)}</p>`).join('');

    newAnswerCard.innerHTML = `
      <div class="d-flex align-items-start gap-3 mb-3">
        <div class="detail-user-avatar user-blue-light">
          <i class="bi bi-person-fill"></i>
        </div>
        <div class="flex-grow-1">
          <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div>
              <h6 class="fw-bold mb-0 text-dark">Budi Santoso (Anda)</h6>
              <div class="d-flex align-items-center gap-2 small text-muted">
                <span>Pelajar SMA</span>
                <span>•</span>
                <span class="text-primary fw-medium"><i class="bi bi-clock me-1"></i>Baru saja</span>
              </div>
            </div>
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1 small">
              Jawaban Anda
            </span>
          </div>
        </div>
      </div>

      <div class="pertanyaan-body ps-md-5 ms-md-2 mb-3">
        ${paragraphs}
      </div>

      <div class="d-flex align-items-center justify-content-between pt-2 border-top ps-md-5 ms-md-2">
        <button class="btn-action btn-vote-jawaban" data-count="1" data-voted="true">
          <i class="bi bi-hand-thumbs-up-fill text-success"></i>
          <span class="vote-label">Membantu (1)</span>
        </button>
        <span class="small text-muted">Belum ada komentar</span>
      </div>
    `;

    answersList.appendChild(newAnswerCard);

    if (countDisplay) {
      const currentTotal = parseInt(countDisplay.textContent || '3', 10);
      countDisplay.textContent = currentTotal + 1;
    }

    textarea.value = '';

    showToast('Jawaban Anda berhasil dikirim dan ditambahkan!', 'bi-check-circle-fill text-success');

    newAnswerCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  textarea.addEventListener('input', () => {
    if (textarea.value.trim().length > 0) {
      textarea.classList.remove('is-invalid');
    }
  });
}


function initEditorToolbar() {
  const textarea = document.getElementById('inputJawaban');
  if (!textarea) return;

  document.querySelectorAll('.btn-tool').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = textarea.value.substring(start, end);

      let replacement = '';

      switch (tool) {
        case 'bold':
          replacement = selected ? `**${selected}**` : '**teks tebal**';
          break;
        case 'italic':
          replacement = selected ? `_${selected}_` : '_teks miring_';
          break;
        case 'list':
          replacement = selected ? `\n- ${selected}` : '\n1. Langkah pertama\n2. Langkah kedua';
          break;
        case 'formula':
          replacement = selected ? `$$${selected}$$` : '$$x = (-b ± √(b² - 4ac)) / (2a)$$';
          break;
        case 'code':
          replacement = selected ? `\`${selected}\`` : '`rumus / kode`';
          break;
        default:
          return;
      }

      textarea.focus();
      textarea.setRangeText(replacement, start, end, 'end');
    });
  });
}


function initFilterJawaban() {
  const filterBtns = document.querySelectorAll('.btn-filter-jawaban');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const sortType = btn.dataset.sort;
      if (sortType === 'terbaru') {
        showToast('Menampilkan urutan jawaban terbaru');
      } else {
        showToast('Menampilkan Jawaban Terbaik di posisi teratas');
      }
    });
  });
}


function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
