const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header__container');
const menuNav = document.querySelector('.menu-nav');
const contactUs = document.querySelector('.contactus');
const headerBlock = document.querySelector('.header__block'); // Знаходимо header__block

// Флаг для стану меню
let isMenuOpen = false;

// Функція відкриття/закриття меню
function toggleMenu() {
    if (window.innerWidth < 1199.89) {
        if (isMenuOpen) {
            // Закриваємо меню
            menuNav.classList.add('hide'); // Починаємо з приховування menu-nav
            setTimeout(() => {
                menuNav.classList.remove('active', 'hide'); // Скидаємо класи після анімації
                contactUs.classList.remove('active'); // Приховуємо contactus
                header.style.height = '62.98px';
                headerContainer.style.height = '62.98px';
                headerBlock.style.height = '62.98px'; // Скидаємо висоту header__block
            }, 200); // Затримка перед приховуванням інших елементів
        } else {
            // Відкриваємо меню
            header.style.height = '2800px';
            headerContainer.style.height = '2800px';
            headerBlock.style.height = '280px'; // Змінюємо висоту header__block

            contactUs.classList.add('active'); // Відображаємо contactus
            setTimeout(() => {
                menuNav.classList.add('active'); // Відображаємо menu-nav із затримкою
            }, 300);
        }
        isMenuOpen = !isMenuOpen; // Змінюємо стан
    }
}

// Функція скидання меню
function resetMenu() {
	if (window.innerWidth >= 1199.89) {
		 // Ширина екрану більше або дорівнює 1199px
		 header.style.height = '103px';
		 headerContainer.style.height = '103px';
		 headerBlock.style.height = '103px';
	} else {
		 // Якщо ширина екрану менша за 1199px
		 header.style.height = '62.98px';
		 headerContainer.style.height = '62.98px';
		 headerBlock.style.height = '62.98px';
	}
	menuNav.classList.remove('active', 'hide');
	contactUs.classList.remove('active');
	isMenuOpen = false; // Скидаємо стан
}

// Додаємо слухачі подій
menuButton.addEventListener('click', toggleMenu);
window.addEventListener('resize', resetMenu);

// Ініціалізуємо початковий стан при завантаженні
resetMenu();