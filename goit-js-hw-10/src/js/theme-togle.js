const chekboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const changeTheme = event => {
  if (!event.target.checked) {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    localStorage.removeItem('theme', JSON.stringify(theme.DARK));
    localStorage.setItem('theme', JSON.stringify(theme.LIGHT));
  } else {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    localStorage.removeItem('theme', JSON.stringify(theme.LIGHT));
    localStorage.setItem('theme', JSON.stringify(theme.DARK));
  }
};
chekboxRef.addEventListener('change', changeTheme);

const savedTheme = localStorage.getItem('theme');
const parceTheme = JSON.parse(savedTheme);

const checkboxPropertyReloadChange = () => {
  if (parceTheme === theme.DARK) {
    chekboxRef.checked = true;
    bodyRef.classList.add('dark-theme');
  }
};
checkboxPropertyReloadChange();
