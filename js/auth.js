(function () {
    'use strict';

    var USERS_KEY = 'educonnectUsers';
    var SESSION_KEY = 'educonnectSession';
    var PROFILE_KEY = 'educonnectFigmaProfile';
    var HOME_URL = '../index.html';

    function readJSON(storage, key, fallback) {
        try {
            var raw = storage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            return fallback;
        }
    }

    function getUsers() {
        return readJSON(localStorage, USERS_KEY, []);
    }

    function saveUsers(users) {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    function getSession() {
        return readJSON(localStorage, SESSION_KEY, null) || readJSON(sessionStorage, SESSION_KEY, null);
    }

    function startSession(user, remember) {
        localStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(SESSION_KEY);
        var data = JSON.stringify({
            email: user.email,
            fullName: user.fullName,
            level: user.level,
            at: Date.now()
        });
        (remember ? localStorage : sessionStorage).setItem(SESSION_KEY, data);
    }

    function levelLabel(level) {
        return level === 'smp' ? 'SMP' : 'SMA/SMK';
    }

    function syncProfile(user) {
        var current = readJSON(localStorage, PROFILE_KEY, null);
        if (current && current.email === user.email) return;
        localStorage.setItem(PROFILE_KEY, JSON.stringify({
            fullName: user.fullName,
            username: user.email.split('@')[0],
            email: user.email,
            level: levelLabel(user.level),
            schoolClass: '',
            school: '',
            bio: '',
            photo: ''
        }));
    }

    var alertBox = document.getElementById('authAlert');

    function showAlert(type, message) {
        if (!alertBox) return;
        var icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill';
        alertBox.className = 'auth-alert-notification ' +
            (type === 'success' ? 'alert-success-custom' : 'alert-danger-custom');
        alertBox.innerHTML = '<i class="bi ' + icon + '"></i><span></span>';
        alertBox.lastChild.textContent = message;
    }

    function hideAlert() {
        if (!alertBox) return;
        alertBox.className = 'auth-alert-notification';
        alertBox.innerHTML = '';
    }

    function setInvalid(input, isInvalid) {
        input.classList.toggle('is-invalid', isInvalid);
        if (!isInvalid) input.classList.remove('is-valid');
    }

    function isEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function setLoading(button, loading, idleText) {
        button.disabled = loading;
        button.textContent = loading ? 'Memproses...' : idleText;
    }

    function goHome() {
        window.location.href = HOME_URL;
    }

    if (getSession()) {
        window.location.replace(HOME_URL);
        return;
    }

    document.querySelectorAll('.auth-toggle-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var input = document.getElementById(btn.dataset.target);
            if (!input) return;
            var show = input.type === 'password';
            input.type = show ? 'text' : 'password';
            btn.setAttribute('aria-label', show ? 'Sembunyikan password' : 'Tampilkan password');
            var icon = btn.querySelector('i');
            if (icon) icon.className = show ? 'bi bi-eye-slash' : 'bi bi-eye';
        });
    });

    document.querySelectorAll('.auth-control').forEach(function (input) {
        input.addEventListener('input', function () {
            setInvalid(input, false);
            hideAlert();
        });
        input.addEventListener('change', function () {
            setInvalid(input, false);
        });
    });

    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        var loginEmail = document.getElementById('loginEmail');
        var loginPassword = document.getElementById('loginPassword');
        var rememberMe = document.getElementById('rememberMe');
        var loginBtn = document.getElementById('loginSubmitBtn');
        var googleBtn = document.getElementById('googleSignInBtn');

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            hideAlert();

            var email = loginEmail.value.trim().toLowerCase();
            var password = loginPassword.value;
            var ok = true;

            if (!isEmail(email)) { setInvalid(loginEmail, true); ok = false; }
            if (!password) { setInvalid(loginPassword, true); ok = false; }
            if (!ok) {
                showAlert('error', 'Email atau password belum diisi dengan benar.');
                return;
            }

            var user = getUsers().filter(function (u) { return u.email === email; })[0];
            if (!user) {
                setInvalid(loginEmail, true);
                showAlert('error', 'Akun dengan email ini belum terdaftar. Silakan daftar dulu.');
                return;
            }
            if (user.password !== password) {
                setInvalid(loginPassword, true);
                showAlert('error', 'Password salah. Coba lagi.');
                return;
            }

            startSession(user, rememberMe.checked);
            syncProfile(user);
            setLoading(loginBtn, true, 'Masuk');
            showAlert('success', 'Berhasil masuk! Mengarahkan ke dashboard...');
            setTimeout(goHome, 700);
        });

        if (googleBtn) {
            googleBtn.addEventListener('click', function () {
                showAlert('error', 'Masuk dengan Google belum tersedia. Gunakan email dan password.');
            });
        }
    }

    var signupForm = document.getElementById('signupForm');
    if (signupForm) {
        var signupName = document.getElementById('signupName');
        var signupEmail = document.getElementById('signupEmail');
        var signupLevel = document.getElementById('signupLevel');
        var signupPassword = document.getElementById('signupPassword');
        var signupConfirm = document.getElementById('signupConfirmPassword');
        var confirmFeedback = document.getElementById('confirmPasswordFeedback');
        var signupBtn = document.getElementById('signupSubmitBtn');

        function checkConfirm(showWhenEmpty) {
            if (!confirmFeedback) return true;
            confirmFeedback.className = 'auth-feedback-msg';
            confirmFeedback.textContent = '';
            if (!signupConfirm.value) return !showWhenEmpty;

            if (signupConfirm.value !== signupPassword.value) {
                confirmFeedback.className = 'auth-feedback-msg show-error';
                confirmFeedback.textContent = 'Password tidak sama.';
                signupConfirm.classList.add('is-invalid');
                signupConfirm.classList.remove('is-valid');
                return false;
            }
            confirmFeedback.className = 'auth-feedback-msg show-success';
            confirmFeedback.textContent = 'Password cocok.';
            signupConfirm.classList.remove('is-invalid');
            signupConfirm.classList.add('is-valid');
            return true;
        }

        signupConfirm.addEventListener('input', function () { checkConfirm(false); });
        signupPassword.addEventListener('input', function () {
            if (signupConfirm.value) checkConfirm(false);
        });

        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            hideAlert();

            var fullName = signupName.value.trim();
            var email = signupEmail.value.trim().toLowerCase();
            var level = signupLevel.value;
            var password = signupPassword.value;
            var ok = true;

            if (fullName.length < 2) { setInvalid(signupName, true); ok = false; }
            if (!isEmail(email)) { setInvalid(signupEmail, true); ok = false; }
            if (!level) { setInvalid(signupLevel, true); ok = false; }
            if (password.length < 6) { setInvalid(signupPassword, true); ok = false; }
            if (!signupConfirm.value || signupConfirm.value !== password) {
                setInvalid(signupConfirm, true);
                confirmFeedback.className = 'auth-feedback-msg show-error';
                confirmFeedback.textContent = signupConfirm.value
                    ? 'Password tidak sama.'
                    : 'Konfirmasi password wajib diisi.';
                ok = false;
            }

            if (!ok) {
                showAlert('error', 'Periksa lagi data yang kamu isi. Password minimal 6 karakter.');
                return;
            }

            var users = getUsers();
            var exists = users.some(function (u) { return u.email === email; });
            if (exists) {
                setInvalid(signupEmail, true);
                showAlert('error', 'Email ini sudah terdaftar. Silakan masuk.');
                return;
            }

            var user = { fullName: fullName, email: email, level: level, password: password };
            users.push(user);
            saveUsers(users);

            startSession(user, true);
            syncProfile(user);
            setLoading(signupBtn, true, 'Daftar');
            showAlert('success', 'Akun berhasil dibuat! Mengarahkan ke dashboard...');
            setTimeout(goHome, 800);
        });
    }
})();