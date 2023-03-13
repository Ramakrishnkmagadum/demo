let images=document.getElementById("images");
slider.oninput=a;
function a()
{
    
    
    let num=Math.round(this.value/20);
    display.innerText=num;
    if(num==1)
    {
        images.style.backgroundColor="yellow";
     img.src="ayantika6.jpg"
    }else if (num==2) {
        images.style.backgroundColor="orange";
       img.src="download.jpg"

    } else if(num==3) {
        images.style.backgroundColor="yellow";
        img.src="download3.jpg"
       
    }else{
        images.style.backgroundColor="red";
        img.src="download4.jpg"
        
       
    }

    // switch(num)
    // {
    //     case 1:{
    //       images.style.backgroundColor="yellow";
    //     }
    //     case 2:{
    //         images.style.backgroundColor="yellow";
    //     }
    //     case 3:{
    //         images.style.backgroundColor="orange";
    //     }
    //     case 4:{
    //         images.style.backgroundColor="blue";
            
    //     }
    //     case 5:{
    //         images.style.backgroundColor="pink";
    //     }
    // }

}



