document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".profile-tab");
    const contents = document.querySelectorAll(".profile-tab-content");

    tabs.forEach((tab) => {

        tab.addEventListener("click", function () {

          
            tabs.forEach((item) => {
                item.classList.remove("active");
            });

           
            contents.forEach((content) => {
                content.classList.remove("active");
            });

        
            this.classList.add("active");

           
            const target = this.getAttribute("data-tab");

            document.getElementById(target).classList.add("active");

        });

    });

});