        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger-menu');
            const navMenu = document.querySelector('.nav-menu'); // IMPORTANT: Targets the new class 'nav-menu'

            if (hamburger && navMenu) {
                hamburger.addEventListener('click', function() {
                    navMenu.classList.toggle('active'); // IMPORTANT: Toggles 'active' on navMenu
                });
            }
        });