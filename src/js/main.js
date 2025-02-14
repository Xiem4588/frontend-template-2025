// Toggle menu MB
document.querySelector('.btn__menu-mb').addEventListener('click', (e) => {
    e.stopPropagation();
    const mainHeader = document.querySelector('.main__header');
    const isHidden = mainHeader.getAttribute('aria-hidden') === 'true';
    mainHeader.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
});

// Go back
document.querySelectorAll('[data-button-go-back]').forEach(item =>
    item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        item.closest('[aria-hidden]')?.setAttribute('aria-hidden', 'true');
    })
);

// Mega menu
document.querySelectorAll('[data-mega-menu-item] [data-mega-menu-submenu], [data-mega-menu-submenu-item] [data-mega-menu-submenu-item-submenu]')
    .forEach(el => el.parentElement.setAttribute('aria-hidden', 'true'));

document.addEventListener('click', (e) => {
    const subMenu = e.target.closest('[data-item-button]') || e.target.closest('[data-submenu-item-button]');
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const hideAll = (isSubMenu) =>
        document.querySelectorAll(isSubMenu ? '[data-submenu-item-button]' : '[data-item-button]')
            .forEach(el => el.parentElement?.setAttribute('aria-hidden', 'true'));

    if (subMenu) {
        const hasMegaMenuSubmenu = subMenu.parentElement.querySelector(`[data-mega-menu-submenu], ${!isDesktop ? '[data-mega-menu-submenu-item-submenu]' : null}`);
        if (hasMegaMenuSubmenu) {
            e.preventDefault();
            e.stopPropagation();
        }
        const isVisible = subMenu.parentElement.getAttribute('aria-hidden') === 'false';
        hideAll(!!e.target.closest('[data-submenu-item-button]'));
        subMenu.parentElement.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
    } else if (isDesktop && !e.target.closest('[data-mega-menu-submenu]')) {
        hideAll();
    }
});

// Get theme
const themeOptions = document.querySelectorAll('.theme-options li');

// Apply theme
function applyTheme(mode) {
    if (mode === 'dark') {
        document.documentElement.setAttribute('data-site-theme', 'dark');
    } else if (mode === 'light') {
        document.documentElement.setAttribute('data-site-theme', 'light');
    } else {
        // 'system' mode default
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-site-theme', prefersDark ? 'dark' : 'light');
    }
}

// Change theme active
const updateActiveTheme = (selectedMode) => {
    themeOptions.forEach((option) => {
        option.classList.toggle('active', option.getAttribute('data-site-theme') === selectedMode);
    });
}

// Event click
themeOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const selectedMode = option.getAttribute('data-site-theme');
        localStorage.setItem('themeMode', selectedMode); // save localStorage
        applyTheme(selectedMode);
        updateActiveTheme(selectedMode);
    });
});

// Apply theme when loading page
const savedMode = localStorage.getItem('themeMode') || 'system';
applyTheme(savedMode);
updateActiveTheme(savedMode);