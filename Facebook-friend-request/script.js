var istatus=document.querySelector("h5");
var add=document.querySelector("#add");
flag=0;

add.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        flag=1;
        add.innerHTML="Remove";
    }
    else{
        istatus.innerHTML="Stranger";
        istatus.style.color="Red";
        flag=0;
        add.innerHTML="Add friends";
    }
})
