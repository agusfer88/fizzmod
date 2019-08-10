var btn = document.querySelector("button")
/*
btn.addEventListener("click",()=>{
    var btn_dinamico = document.createElement("button");
    btn_dinamico.id= "dinamico";
    btn_dinamico.innerText = "dinamico!";
    btn_dinamico.addEventListener("click",()=>{
        console.log("click dinamico");
    });
    document.body.appendChild(btn_dinamico);

})
*/
//intercepta la propagacion 

btn.addEventListener("click",()=>{
    var btn_dinamico =document.createElement("button");
    btn_dinamico.id = "dinamico";
    btn_dinamico.innerText = "dinamico!";
    document.body.appendChild(btn_dinamico);
});

document.addEventListener("click",(e)=>{
    if(e.target.id == "dinamico"){
        console.log("click dinamico");
    }
       
});