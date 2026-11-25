document.addEventListener("DOContentLoaded", function () {

const tabs = document.querySelectorAll(".profile-tab");
const contents = document.querySelectorAll(".profile tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", function () {

        tabs.forEach((item) => 
            item.classList.remove("active"));
            item.setAttribute("aria-selected", "false");
 });

      // Sembunyikan semua konten
      contents.forEach(content => {
        content.classList.remove("active");
      });

      // Aktifkan tab yang diklik
      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      // Tampilkan konten sesuai tab
      const targetId = this.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.add("active");
      }

    });
  });

