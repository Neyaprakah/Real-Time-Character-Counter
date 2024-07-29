const val=document.getElementById("input");
val.addEventListener('keypress',()=>{
    let txt=val.value;
    let c=1;
    for(let i=0;i<txt.length;i++)
    {
        c=c+1;
    }
    document.getElementById("total").innerHTML=c;
    let d=50-c;
    document.getElementById("remaining").innerHTML=d;
})

