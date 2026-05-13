const PI=3.14159;
let radius;
let perimeter;
let area;


radius=document.getElementById("mySubmit").onclick = function(){
     radius =document.getElementById("myText").value;
     radius=Number(radius);
     perimeter= 2*PI*radius;
     document.getElementById("resultPerimeter").textContent= `${perimeter} cm`;

     area=PI*radius**2;
        document.getElementById("resultArea").textContent=`${area} cm²`;

}