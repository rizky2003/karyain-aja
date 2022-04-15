//nafbar fixed
window.onscroll = function() {
const header = document.querySelector('header');
const fixedNav = Header.offsetop;

if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
} else {
    header.classList.remove('navbar-fixed');
}
};