export const headerMenu = () => {
    // Button Menu MB
    document.querySelector('.btn__menu-mb').addEventListener('click', (e) => {
        e.stopPropagation();
        const mainHeader = document.querySelector('.main__header');
        const isHidden = mainHeader.getAttribute('aria-hidden') === 'true';
        mainHeader.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
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

    const updateHeaderPadding = () => {
        const headerFixedTop = document.querySelector('[data-header-fixed-top]');
        const headerHeight = headerFixedTop ? headerFixedTop.offsetHeight : 0;
        document.querySelectorAll('[data-header-padding-top]').forEach(el => {
            if (el) {
                el.style.paddingTop = `${headerHeight}px`;
            }
        });
    };

    // Initial calculation
    updateHeaderPadding();

    // Recalculate on window resize
    window.addEventListener('resize', updateHeaderPadding);
}
