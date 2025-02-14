
export const themeMode = () => {
    const themeOptions = document.querySelectorAll('.theme-options li');

    // Apply theme
    function applyTheme(mode) {
        if (mode === 'dark') {
            document.documentElement.setAttribute('data-site-theme', 'dark');
        } else if (mode === 'light') {
            document.documentElement.setAttribute('data-site-theme', 'light');
        } else if (mode === 'nebula') {
            document.documentElement.setAttribute('data-site-theme', 'nebula');
        } else if (mode === 'polaris') {
            document.documentElement.setAttribute('data-site-theme', 'polaris');
        } else if (mode === 'odyssey') {
            document.documentElement.setAttribute('data-site-theme', 'odyssey');
        } else if (mode === 'blackguard') {
            document.documentElement.setAttribute('data-site-theme', 'blackguard');
        } else if (mode === 'highContrast') {
            document.documentElement.setAttribute('data-site-theme', 'highContrast');
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
}