var move = document.getElementsById('move');
move.addEventListener('click', function(e) {
    var objs = document.body.querySelectorAll('div');
    Array.prototype.map.call(objs, function(o){
        o.classList.toggle('moved');
    });
});