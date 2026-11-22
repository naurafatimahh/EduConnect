document.addEventListener('DOMContentLoaded', function () {

  const elemenAnimasi = document.querySelectorAll(
    '.banner-box, .search-container, .search-forum-box, .card-jenjang, .card-pertanyaan, .card-forum'
  );

  elemenAnimasi.forEach(function (elemen, index) {
    elemen.classList.add('fade-in-awal');

    setTimeout(function () {
      elemen.classList.add('fade-in-tampil');
    }, 70 * index);
  });


  const kartuJenjang = document.querySelectorAll('.card-jenjang');

  kartuJenjang.forEach(function (kartu) {
    kartu.addEventListener('click', function () {
      kartuJenjang.forEach(k => k.classList.remove('active'));
      this.classList.add('active');
    });
  });


  const tombolFab = document.querySelector('.tombol-tanya-fab');

  if (tombolFab) {
    tombolFab.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
