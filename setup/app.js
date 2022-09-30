let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const d=document.querySelector(".decrease");
const i=document.querySelector(".increase");
const r=document.querySelector(".decrease");


console.log(d)

btns.forEach(function(btn){

    btn.addEventListener ("click",function(e){
        
        const target = e.currentTarget.classList;
        

      
        if(target.contains("decrease"))
        {count--;}
        else if(target.contains("increase")){
            count++;
        }
        else if(target.contains("reset")){
            count=0;

        }
        value.textContent=count;

        });

    });
