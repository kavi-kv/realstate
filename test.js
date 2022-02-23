window.onload=function(){
    var hide_iv = document.getElementById('modal');
    document.onclick = function(div)
    {
        if(div.target.id !== 'modal'){
            hide_iv.style.display = 'none'
        }
    }
}





