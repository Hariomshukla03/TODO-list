let ul=document.querySelector("ul")
let btn=document.querySelector("#btn");
let li=document.querySelectorAll("li");
let icn=document.querySelector("i");
let input=document.querySelector("#input");
btn.addEventListener(("click"),()=>{
    if(input.value===""){
        alert("write something");
    }
    else{
        let inputvalue=input.value;
        console.log(inputvalue);
        let newLi=document.createElement("li");
        console.log(newLi)
        newLi.innerHTML=inputvalue;
        ul.append(newLi);
        newLi.appendChild(icn);
    }input.value="";
});
ul.addEventListener(("click"),(e)=>{
    // console.log(e.target);
    e.target.style.textDecoration="line-through" ;
    Color="#555" ;   
});
icn.addEventListener(("click"),(e)=>{
    console.log(e.target);
    
    
})


   
      
    

