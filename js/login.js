var currentTheme = window.localStorage.getItem("theme")
  ? window.localStorage.getItem("theme")
  : "dark";

if (currentTheme == "dark") {

  document.documentElement.removeAttribute('data-theme', 'light');
  document.documentElement.setAttribute("data-theme", "dark");

}

 else
{
  document.documentElement.removeAttribute('data-theme', 'dark');
  document.documentElement.setAttribute("data-theme", "light");
}
