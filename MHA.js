        const menuToggle = document.getElementById('menuToggle');
        const nav = document.getElementById('nav');
        const overlay = document.getElementById('overlay');
        const navItems = document.querySelectorAll('.nav-item');
        const pages = document.querySelectorAll('.page');
        const updateCards = document.querySelectorAll('.update-card');
        const backButtons = document.querySelectorAll('.back-button');
        const systemCards = document.querySelectorAll('.system-card');
        const footerNavLinks = document.querySelectorAll('.footer-nav');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            closeMenu();
        });

        function closeMenu() {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
        }

        navItems.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageName = link.getAttribute('data-page');
                navItems.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                pages.forEach(page => page.classList.remove('active'));
                const targetPage = document.getElementById(pageName);
                if (targetPage) {
                    targetPage.classList.add('active');
                }
                closeMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        updateCards.forEach(card => {
            card.addEventListener('click', () => {
                const updateId = card.getAttribute('data-update');
                pages.forEach(page => page.classList.remove('active'));
                const updatePage = document.getElementById(updateId);
                if (updatePage) {
                    updatePage.classList.add('active');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        backButtons.forEach(button => {
            button.addEventListener('click', () => {
                const backPage = button.getAttribute('data-back');
                pages.forEach(page => page.classList.remove('active'));
                const targetPage = document.getElementById(backPage);
                if (targetPage) {
                    targetPage.classList.add('active');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        systemCards.forEach(card => {
            card.addEventListener('click', () => {
                const pageName = card.getAttribute('data-page');
                pages.forEach(page => page.classList.remove('active'));
                const systemPage = document.getElementById(pageName);
                if (systemPage) {
                    systemPage.classList.add('active');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        footerNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageName = link.getAttribute('data-page');
                navItems.forEach(l => l.classList.remove('active'));
                pages.forEach(page => page.classList.remove('active'));
                const targetPage = document.getElementById(pageName);
                if (targetPage) {
                    targetPage.classList.add('active');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });