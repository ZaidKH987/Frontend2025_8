//var nav=document.getElementById('nav');

function changetheme(colour)
{

    var cssfile=document.getElementById('cssfile');
    if (colour=='black')
    {
cssfile.href='css/dark.css';    }

else{
    cssfile.href='css/light.css';
}

}
