function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light'); /* if light mode is on, turn it off, else turn it on */

    const img = document.querySelector('.profile img');

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/blind.png');
    } else {
        img.setAttribute('src', './assets/fotoGit.jpg');
    }
}