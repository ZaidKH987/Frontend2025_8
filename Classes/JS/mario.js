
var pos=document.getElementById('icon');
var hor=pos.style.left;
var ver=pos.style.bottom;

function move(direction){

   

    if(hor=='')
    {
        hor=0;
    }
    if(ver=='')
        {
            ver=0;
        }

    if(direction=='right'){


        hor=parseInt(hor) + 10;
        pos.style.left=hor+ 'px';
        pos.src='/Classes/Media/MR left.png';
    
    }
    
    if(direction=='left'){

        hor=parseInt(hor) - 10;
        pos.style.left=hor+ 'px';
       
    
    }

    if(direction=='up')
       
    {
        console.log(parseInt(ver) - 10)
        ver=parseInt(ver) + 10;
        pos.style.bottom=ver+ 'px';
    }

    if(direction=='down')
        {
            ver=parseInt(ver) - 10;
            pos.style.bottom=ver+ 'px';
        }

}

document.addEventListener('keydown', function(event)
{
    console.log(event.key)

    if(event.key=='ArrowLeft'){
        move('left');
    }
    if(event.key=='ArrowRight'){
        move('right');
    }
    if(event.key=='ArrowUp'){
        move('up');
    }
    if(event.key=='ArrowDown'){
        move('down');
    }

}

)