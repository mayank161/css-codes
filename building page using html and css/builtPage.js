var menuBar = document.getElementById('get');
menuBar.addEventListener('click',downMenu);
var s = "";
function downMenu(e) {
    e.preventDefault();
    if(s=="") {
    var newMenu = document.getElementById('center');
    s = document.createElement('h2');
    s.appendChild(document.createTextNode('Home'));

    var p = document.createElement('h2');
    p.appendChild(document.createTextNode('About'));

    var q = document.createElement('h2');
    q.appendChild(document.createTextNode('Contact'));
    
    newMenu.appendChild(s);
    newMenu.appendChild(p);
    newMenu.appendChild(q);
    }
}

var x = window.matchMedia("(min-width: 800px)");
if(screen.width == '800px') {location.reload();}