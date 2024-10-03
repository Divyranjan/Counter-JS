const dec = document.getElementById("dec_btn");
const reset= document.getElementById("reset_btn") ;
const inc= document.getElementById("inc_btn");
let count=0;


inc.onclick=function()
{
    count++;
    console.log(count);
    document.getElementById("counter").textContent=count;


}


dec.onclick=function()
{
    count--;
    console.log(count);
    document.getElementById("counter").textContent=count;


}

reset.onclick=function()
{
    count=0;
    console.log(count);
    document.getElementById("counter").textContent=count;


}
