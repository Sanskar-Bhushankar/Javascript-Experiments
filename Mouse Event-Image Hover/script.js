var elem =document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        //console.log("hello");
        val.childNodes[3].style.opacity=1;
    });

    val.addEventListener("mouseleave",function(){
        //console.log("leaved");
        val.childNodes[3].style.opacity=0;
    });

    val.addEventListener("mousemove",function(dets){
        //console.log("leaved");
        val.childNodes[3].style.left=dets.x+"px";
        val.childNodes[3].style.top=dets.y+"px";

    });


});



// elem1.addEventListener("mousemove",function(dets){
//     elem1image.style.left=dets.x+"px";
//     elem1image.style.top=dets.y+"px";
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elem1image.style.opacity=1;
// })

// elem1.addEventListener("mouseleave",function(dets){
//     elem1image.style.opacity=0;
// })
