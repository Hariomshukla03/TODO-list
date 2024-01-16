let ul=document.querySelector("ul")
let btn=document.querySelector("#btn");
let li=document.querySelectorAll(".li");
let icn=document.querySelectorAll("#icon");
let input=document.querySelector("#input");


 



btn.addEventListener("click",()=>{
    let inputvalue=input.value;
    console.log(inputvalue);
    
    if(input.value===""){
        alert("Write Something");
    } 
    else{
        let newLi=document.createElement("li");
        newLi=inputvalue;
        ul.append(newLi);
        
    } 
    input.value="";
     
    
});


   
      
    

