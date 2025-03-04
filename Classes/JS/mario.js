
var lpos=document.getElementById('icon');
var rpos=document.getElementById('rm');
var hor=rpos.style.left;
var ver=lpos.style.left;

function move(direction){

   

    if(hor=='')
    {
        hor=0;
    }

    if(direction=='right'){


        hor=parseInt(hor) + 10;
        lpos.style.left=hor+ 'px';
        rpos.style.display='none'
    }
    
    if(direction=='left'){

        hor=parseInt(hor) - 10;
        rpos.style.left=hor+ 'px';
        lpos.style.display='none'
    
    }



}