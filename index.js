var n = Math.random()* 5+1;
n = Math.round(n);
// alert(n);
if (n==1){

    document.querySelector("#d1").style.zIndex= "10";
}
else if(n==2){
    document.querySelector("#d2").style.zIndex = "10";
}
else if(n==3){
    document.querySelector("#d3").style.zIndex = "10";
}
else if(n==4){
    document.querySelector("#d4").style.zIndex = "10";
}
else if(n==5){
    document.querySelector("#d5").style.zIndex = "10";
}
else{
    document.querySelector("#d6").style.zIndex = "10";
    
}

var n2 = Math.random()* 5+1;
n2 = Math.round(n2);

if (n2==1){

    document.querySelector("#dd1").style.zIndex= "10";
}
else if(n2==2){
    document.querySelector("#dd2").style.zIndex = "10";
}
else if(n2==3){
    document.querySelector("#dd3").style.zIndex = "10";
}
else if(n2==4){
    document.querySelector("#dd4").style.zIndex = "10";
}
else if(n2==5){
    document.querySelector("#dd5").style.zIndex = "10";
}
else{
    document.querySelector("#dd6").style.zIndex = "10";
    
}

if(n>n2){
    document.querySelector("h1").innerText = "player 1 win";
}
else if(n<n2){
    document.querySelector("h1").innerText = "player 2 win";
}
else{
    document.querySelector("h1").innerText = "draw";
}



