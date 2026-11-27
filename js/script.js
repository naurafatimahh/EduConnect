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

const profileKey = 'educonnectFigmaProfile';
const profileDefaults = {
  fullName: 'Naura',
  username: 'naurafatimah',
  email: 'naurff@gmail.com',
  level: 'SMA/SMK',
  schoolClass: 'Kelas 11',
  school: 'SMK Yadika 12',
  bio: '',
  photo: ''
};

let profile;
try {
  profile = Object.assign({}, profileDefaults, JSON.parse(localStorage.getItem(profileKey) || '{}'));
} catch (error) {
  profile = Object.assign({}, profileDefaults);
}

document.querySelectorAll('.profile-tab').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('.profile-tab').forEach(function (tab) {
      tab.classList.remove('active');
    });
    document.querySelectorAll('.profile-tab-content').forEach(function (content) {
      content.classList.remove('active');
    });
    button.classList.add('active');
    const content = document.getElementById(button.dataset.tab);
    if (content) content.classList.add('active');
  });
});

const profileName = document.getElementById('profileName');
if (profileName) {
  profileName.textContent = profile.fullName;
  document.getElementById('profileUsername').textContent = '@' + profile.username;
  document.getElementById('profileEmail').textContent = profile.email;
  document.getElementById('profileLevel').textContent = profile.level;
  document.getElementById('profileClass').textContent = profile.schoolClass;
  document.getElementById('profileSchool').textContent = profile.school || '-';

  if (profile.photo) {
    const photo = document.getElementById('profilePhoto');
    photo.innerHTML = '<img src="' + profile.photo + '" alt="Foto Profil ' + profile.fullName + '">';
  }
}

const profileForm = document.getElementById('profileForm');
if (profileForm) {
  const fieldIds = ['fullName', 'username', 'email', 'level', 'schoolClass', 'school', 'bio'];
  fieldIds.forEach(function (id) {
    const field = document.getElementById(id);
    if (field) field.value = profile[id] || '';
  });

  let selectedPhoto = profile.photo || '';
  const photoInput = document.getElementById('photoInput');
  const photoPreview = document.getElementById('photoPreview');

  if (selectedPhoto) {
    photoPreview.style.backgroundImage = 'url("' + selectedPhoto + '")';
    photoPreview.innerHTML = '';
  }

  photoInput.addEventListener('change', function () {
    const file = photoInput.files[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      alert('Foto harus berformat JPG atau PNG.');
      photoInput.value = '';
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran foto maksimal 2 MB.');
      photoInput.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      selectedPhoto = event.target.result;
      photoPreview.style.backgroundImage = 'url("' + selectedPhoto + '")';
      photoPreview.innerHTML = '';
    };
    reader.readAsDataURL(file);
  });

  profileForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!profileForm.checkValidity()) {
      profileForm.reportValidity();
      return;
    }

    const data = {};
    fieldIds.forEach(function (id) {
      data[id] = document.getElementById(id).value.trim();
    });
    data.photo = selectedPhoto;
    localStorage.setItem(profileKey, JSON.stringify(data));

    const toast = document.getElementById('profileToast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(function () {
        window.location.href = 'profile.html';
      }, 850);
    } else {
      window.location.href = 'profile.html';
    }
  });
};
