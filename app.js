const $ = document.querySelector.bind(document)
var btnMenu = $('.btn-menu');
var nav = $('.nav')
btnMenu.onclick = function() {
    this.classList.toggle('open')
    nav.classList.toggle('active')
}