//var nav=document.getElementById('nav');

function changetheme(colour)
{

    var cssfile=document.getElementById('cssfile');
    if (colour=='black')
    {
cssfile.href='css/dark.css'    }

else{
    cssfile.href='css/light.css';
}

}

function showmenu()

{
    var rightmenu=document.getElementById('rightmenu');
    console.log(rightmenu.style.display);
    var menubutton=document.getElementById('menubutton');
    if(rightmenu.style.display=='' || rightmenu.style.display=='none')
    {
        rightmenu.style.display='block';
        
        menubutton.innerText='hide';
    ;
    }

    else{
        rightmenu.style.display='none';
        menubutton.innerText='show';
       
       
    }
}
