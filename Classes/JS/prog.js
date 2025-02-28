const button= document.querySelector('button');
var width=0;
var element=document.getElementById("mybar");

function move(){
    
    id=setInterval(frame,10);
}

function frame(){

   if (width==100)
   {
        clearInterval(id);
        width=0;
        
    }

    else{
        width++;
        element.style.width=width+'%';
        element.innerHTML=width+"%";
        console.log(width)

    }
}

function restart()
{
    element.style.width=0;
    element.innerHTML=0+"%";
}







