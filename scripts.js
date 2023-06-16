const board=document.querySelector("#board")
const inst=document.querySelector("#Inst")
let turn='circle'
const squares=document.querySelectorAll(".square")
//console.log(squares)
const winCombos=[
    [0,1,2],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[3,4,5],[6,7,8]
]
const winMsg=document.querySelector(".winMsg")
const winPage=document.querySelector(".winPage")
let turnCnt=0



function create(){
    squares.forEach(cell=>{
        cell.addEventListener("click",addSign)
    })
}

function addSign(e){
    const addSymb=document.createElement('div')
    addSymb.classList.add(turn)
    e.target.append(addSymb)
   // console.log(addSymb)   
    e.target.removeEventListener("click",addSign)
    turn=(turn=='circle')?'cross':'circle';
    inst.innerHTML='it is now '+turn+"'s turn";
    turnCnt+=1
    //console.log(turnCnt)
    if(turnCnt==9) draw();    
    scores()
}


function scores(){
    winCombos.forEach(ary=>{
        const circleWin=ary.every(cmbo=>
            squares[cmbo].firstChild?.classList.contains('circle') //console.log(squares[cmbo].firstChild?.classList.contains('circle'))
            )
            if(circleWin) winner("Circle");
            
        })
    winCombos.forEach(winList=>{
        const crossWin=winList.every(cmbo=>
            squares[cmbo].firstChild?.classList.contains('cross')) //console.log(squares[cmbo].firstChild?.classList.contains('cross')) //console.log(cmbo)
            
            if(crossWin) winner("Cross");
            })
}

function winner(name){
        winMsg.innerHTML=name+" wins";
        winPage.style.display="flex";
    }


function draw(){
    winMsg.innerHTML="Draw";
    winPage.style.display="flex";
}


create();