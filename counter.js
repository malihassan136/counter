let decreasing=document.querySelector("#dec");
let reseting=document.querySelector("#reset");
let increasing=document.querySelector("#inc");
let value=document.querySelector("#value");


decreasing.addEventListener("click",()=>{
  (value.innerText)--;
})
increasing.addEventListener("click",()=>{
    (value.innerText)++;
})

reseting.addEventListener("click",()=>{

 value.innerText="0";


}
)