let gameseq=[];
let userseq=[];
let btns= ["yellow","red","purple","green"];
let started = false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function() {
    if(started==false){
     console.log("game started")
     started=true;
     levelUp();


    }
} );
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
         
    },250); 

};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
         
    },250); 

};

function levelUp(){
    userseq =[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3); 
    let randColor=btns[randidx]
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randidx);
    // console.log(randColor);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq)

    gameFlash(randbtn);
}
function checkAns(idx){
    // console.log("current level : ",level);

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
       
h2.innerHTML=`Game Over! Your Score was :- <b>${level} </b> <b>press any key to start `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
        reset();
    }
}
function btnpress(){
  
    let btn= this;
    userFlash(btn);  
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq =[];
    userseq =[];
    level =0;
     
}