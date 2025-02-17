export const headerMenu = () => {
    // Button Menu MB
    document.querySelector('.btn__menu-mb button').addEventListener('click', (e) => {
        e.stopPropagation();
        const mainHeader = document.querySelector('.main__header');
        const isHidden = mainHeader.getAttribute('aria-hidden') === 'true';
        mainHeader.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
        document.documentElement.setAttribute('data-mega-menu-visible', isHidden ? 'true' : 'false');
    });

    // Go Back
    document.querySelectorAll('[data-button-go-back]').forEach(item =>
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            item.closest('[aria-hidden]')?.setAttribute('aria-hidden', 'true');
        })
    );

    // Mega Menu
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
            const isVisible = subMenu.parentElement.getAttribute('aria-hidden') === 'false';
            //
            if (hasMegaMenuSubmenu) {
                e.preventDefault();
                e.stopPropagation();
            }
            //
            hideAll(!!e.target.closest('[data-submenu-item-button]'));
            subMenu.parentElement.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
            //
            document.documentElement.setAttribute('data-mega-menu-visible', !isVisible ? 'true' : 'false');
        } else if (isDesktop && !e.target.closest('[data-mega-menu-submenu]')) {
            hideAll();
            document.documentElement.setAttribute('data-mega-menu-visible', 'false');
        }
    });

    //
    const checkHeightHeader = () => {
        const headerFixedTop = document.querySelector('[data-header-fixed-top]');
        if (headerFixedTop) {
            document.documentElement.style.setProperty('--header-height', `${headerFixedTop.offsetHeight}px`);
        }
    };
    // Initial calculation
    checkHeightHeader();
    // Recalculate on window resize
    window.addEventListener('resize', checkHeightHeader);
}
