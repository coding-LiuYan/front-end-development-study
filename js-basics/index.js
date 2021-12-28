window.onload = function() {
    let temp = document.getElementById('box1');
    let btn = document.getElementById('btn1');


    btn.onclick = function() {
        let css = getComputedStyle(temp, null);
        alert(css.width);
    }
    
}