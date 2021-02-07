function fun1() {
    var chbox;
    chbox=document.getElementById('megamenu');
        if (chbox.checked) {
            document.getElementById('linkproizvoditeli').style.display = ('flex');          
        }
        else {
            document.getElementById('linkproizvoditeli').style.display = ('none');          
        }
    }


