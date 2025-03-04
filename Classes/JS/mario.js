function move(direction)
{
var id=document.getElementById('icon');
var ho=id.style.left;
var ver=id.style.bottom;







    if(ho=='')
        {
            ho=0;
           
        }

        

if(ver=='')
    {
        ver=0;
    }


if(direction=='left')
{
ho=parseInt(ho) - 10;
id.style.left=ho+ 'px';
console.log(ho);
}


if(direction=='right')
{
    ho=parseInt(ho)+ 10;
    id.style.left=ho+'px';
    console.log(ho);
}



if(direction=='up')
    {
        ver=parseInt(ver)+ 10;
        id.style.bottom=ver+'px';
        console.log(ver);
    }

    if(direction=='down')
        {
            ver=parseInt(ver)- 10;
            id.style.bottom=ver+'px';
            console.log(ver);
        }

}