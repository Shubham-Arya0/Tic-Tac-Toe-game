let boxes = document.querySelectorAll(".box");
let player1 = document.querySelector("#player1");//X
let player2 = document.querySelector("#player2");//0
let start = document.querySelector("#to-start");
let play_turn = document.querySelector(".play-turn");

let reset = document.querySelector(".reset-btn");
let turn = true;
let count = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    play_turn.innerText ="";
  }
};

start.addEventListener("click",function(){
    play_turn.innerText = `its ${player1.value} turn`;
  });

  
boxes.forEach((box)=>{
    box.addEventListener("click", function(){
        if (turn) {
            //player1           
            box.innerText = "X";
            turn = false;
            play_turn.innerText = `its ${player2.value} turn`;
          } else {
            //player2
            
            box.innerText = "0";
            turn = true;
            play_turn.innerText = `its ${player1.value} turn`;
          }
          count++;
          box.disabled = true;
          checkWinner();
          if (count === 9 && !checkWinner()) {
            play_turn.innerText = " Match Draw";
          }
}
);
});

const checkWinner = () => {
    for(let pattern of winPatterns){
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;
  
      if (pos1 != "" && pos2 != "" && pos3 != "") {
        if (pos1 === pos2 && pos2 === pos3) {
          //showWinner(pos1Val);
          if(pos1 === 'X')
            play_turn.innerText = `Congrulation ${player1.value}  is the winner`;
        else 
        play_turn.innerText = `Congrulation ${player2.value}  is the winner`;
          disableBoxes();
          return true;
        }
      }
    }
};
 reset.addEventListener("click", enableBoxes);



