window.addEventListener('load', function() {
    const theme = localStorage.getItem('theme');
    const darkTheme = document.getElementById('darkTheme');
    const lightTheme = document.getElementById('lightTheme');
    const body = document.body;
  
    if (theme === 'dark') {
      darkTheme.disabled = false;
      lightTheme.disabled = true;
      body.classList.add('dark-theme');
    } else {
      darkTheme.disabled = true;
      lightTheme.disabled = false;
      body.classList.remove('dark-theme');
    }
  });

  
const button = document.getElementById('moonLight');
const darkTheme = document.getElementById('darkTheme');
const lightTheme = document.getElementById('lightTheme');
const body = document.body;

button.addEventListener('click', function() {
  if (body.classList.contains('dark-theme')) {
    darkTheme.disabled = true;
    lightTheme.disabled = false;
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  } else {
    darkTheme.disabled = false;
    lightTheme.disabled = true;
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});
