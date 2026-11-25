(function () {
    'use strict';

    var SESSION_KEY = 'educonnectSession';
    var root = window.location.pathname.indexOf('/pages/') !== -1 ? '../' : '';
    var loginUrl = root + 'pages/login.html';

    function readSession(storage) {
        try {
            return JSON.parse(storage.getItem(SESSION_KEY) || 'null');
        } catch (e) {
            return null;
        }
    }

    var session = readSession(localStorage) || readSession(sessionStorage);

    if (!session) {
        document.documentElement.style.visibility = 'hidden';
        window.location.replace(loginUrl);
        return;
    }

    function logout(event) {
        event.preventDefault();
        localStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(SESSION_KEY);
        window.location.href = loginUrl;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var menu = document.querySelector('.dropdown-menu');
        if (!menu) return;

        var header = menu.querySelector('.dropdown-header');
        if (header && session.fullName) header.textContent = session.fullName;

        var loginLink = menu.querySelector('a[href$="login.html"]');
        var signupLink = menu.querySelector('a[href$="signup.html"]');

        if (signupLink && signupLink.parentElement) {
            signupLink.parentElement.remove();
        }
        if (loginLink) {
            loginLink.setAttribute('href', '#');
            loginLink.innerHTML = '<i class="bi bi-box-arrow-right text-primary"></i> Keluar';
            loginLink.addEventListener('click', logout);
        }
    });
})();