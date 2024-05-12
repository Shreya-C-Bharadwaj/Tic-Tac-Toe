//TIC TAC TOE

let boxes=document.querySelectorAll(".box");
let resetButton= document.querySelector("#reset");
let newGameButton= document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#message");
let msgContainer_D = document.querySelector(".msg-container");
let msgD= document.querySelector("#message");


let turnX = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText ="O";
            turnX=true;
        }
        box.disabled=true;

        checkWinner();
    });
});


//Enable boxes
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText ="";
    }
};

//Disable boxes
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled =true;
    }
};

//Reset Game
const resetGame =() =>{
    turnX= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//Draw match
const drawMatch=()=>{
    msgD.innerText=`It's a Draw!`;
    msgContainer_D.classList.remove("hide");
    disableBoxes();
}


// Declare Winner
const showWinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// GamePlay
const checkWinner =() =>{
    let isdraw = true;

    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner!!",pos1Val);
                showWinner(pos1Val);
                return;
            }  
        }

        if(pos1Val==="" || pos2Val==="" || pos3Val===""){
                isdraw=false;
        }    
    }
    if(isdraw){
        drawMatch();
    }
};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
