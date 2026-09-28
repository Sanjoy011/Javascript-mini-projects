let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");

let trunO = true;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [2,5,8],
    [1,4,7],
    [3,4,5],
    [6,7,8],
];

boxes.forEach( (box) => {
    box.style.cursor = "pointer";
    box.addEventListener("click", () => {
        if(trunO){
            console.log("Now button clicked");
            box.innerHTML = "O";
            trunO = false;
        }else{
            box.innerHTML = "X";
            trunO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let patterns of winPatterns){
        let pos1Value = boxes[patterns[0]].innerHTML;
        let pos2Value = boxes[patterns[1]].innerHTML;
        let pos3Value = boxes[patterns[2]].innerHTML;

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("Winner",pos1Value);
                showWinner(pos1Value);
                return;
            };
        };
    };
    checkDraw();
};

const checkDraw = () =>{
    for(let box of boxes){
        if(box.innerHTML === ""){
            return false;
        }
    }
    msg.innerHTML =  "🤝 It's a Draw! No Winner! 🎮";
    disabledBox();
    resetBtn.style.display = "block";
}
const showWinner = (Winner) => {
    msg.innerHTML = `Congratulations! Winner is ${Winner}`;
    msg.style.color = "white";
    resetBtn.style.display = "block";
    disabledBox();
    
};

const disabledBox = () => {
    for(let box of boxes){
        box.disabled = true;
    };
};

const enableGame = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}


const resetGame = () => {
    trunO = true;
    enableGame();
    msg.innerHTML = "👀 Let's see who takes the victory! 🏆";
    resetBtn.style.display = "none";
    
};

resetBtn.addEventListener("click",resetGame);


